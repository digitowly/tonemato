import { GetServerSidePropsContext } from 'next';
import { addApolloState, initializeApollo } from '../lib/apollo';
import PostCreator from '../components/Forms/PostCreator/PostCreator';
import Layout from '../components/Layout/Layout';
import PostsView from '../components/PostsView/PostsView';
import LIST_POSTS from '../graphql/queries/ListPosts.graphql';

const PostsPage: React.FC = () => {
  return (
    <Layout>
      <PostCreator />
      <PostsView />
    </Layout>
  );
};

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const client = initializeApollo(null, context);

//   try {
//     const response = await client.query({
//       query: LIST_POSTS,
//     });
//     console.log('RESP:', response.data);
//     return addApolloState(client, {
//       props: {
//         posts: response.data,
//       },
//     });
//   } catch (err) {
//     console.log('Error:', err.message);
//     return {
//       props: {},
//     };
//   }
// };

export default PostsPage;
