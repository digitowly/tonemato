import {
    ListMusicianPostsDocument,
    ListMusicianPostsQuery,
    useCreateMusicianPostMutation,
} from '../../generated/codegen_types';
import { useAuth } from '../auth/useAuth';

export function usePostCreator() {
    const { userId } = useAuth();
    const [createPost] = useCreateMusicianPostMutation();

    const handlePostCreate = async ({
        title,
        body,
        instrumentIds,
        genreIds,
    }) => {
        try {
            console.log('test');
            await createPost({
                variables: {
                    title,
                    body,
                    authorId: userId,
                    instrumentIds,
                    genreIds,
                },
                update: (cache, { data }) => {
                    const newPost = {
                        id: data.createMusicianPost.id,
                        body: data.createMusicianPost.body,
                        title: data.createMusicianPost.title,
                        author: data.createMusicianPost.author,
                    };

                    const currentPostsQuery = cache.readQuery<ListMusicianPostsQuery>(
                        {
                            query: ListMusicianPostsDocument,
                        }
                    );
                    const currentPosts = currentPostsQuery.musicianPosts;

                    if (currentPosts && newPost) {
                        cache.writeQuery<ListMusicianPostsQuery>({
                            query: ListMusicianPostsDocument,
                            data: {
                                posts: [...currentPosts, newPost],
                            },
                        });
                    }
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
