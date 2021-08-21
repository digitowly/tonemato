import {
  ListPostsDocument,
  ListPostsQuery,
  useCreatePostMutation,
  useListPostsQuery,
} from '../../generated/codegen_types';
import { useAuth } from '../auth/useAuth';

export function usePostCreator() {
  const { userId } = useAuth();
  const [createPost] = useCreatePostMutation();
  const { data } = useListPostsQuery();

  const postsData = data?.posts;

  const handlePostCreate = async ({ title, body }) => {
    try {
      await createPost({
        variables: { title, body, authorId: userId },
        update: (store, { data }) => {
          const newPost = {
            id: data.createPost.id,
            body: data.createPost.body,
            title: data.createPost.title,
            author: data.createPost.author,
          };
          store.writeQuery<ListPostsQuery>({
            query: ListPostsDocument,
            data: {
              posts: [...postsData, newPost],
            },
          });
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    handlePostCreate,
  };
}
