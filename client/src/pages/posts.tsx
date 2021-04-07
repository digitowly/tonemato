import PostCreator from '../components/Forms/PostCreator/PostCreator';
import Layout from '../components/Layout/Layout';
import PostsList from '../components/PostsList/PostsLists';

const PostsPage: React.FC = () => {
  return (
    <Layout>
      <PostCreator />
      <PostsList />
    </Layout>
  );
};

export default PostsPage;
