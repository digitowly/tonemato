import PostCreator from '../components/Forms/PostCreator/PostCreator';
import Layout from '../components/Layout/Layout';
import PostsView from '../components/PostsView/PostsView';

const PostsPage: React.FC = () => {
  return (
    <Layout>
      <PostCreator />
      <PostsView />
    </Layout>
  );
};

export default PostsPage;
