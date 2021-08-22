import { GetServerSidePropsContext } from 'next';
import { addApolloState, initializeApollo } from '../lib/apollo/client';
import PostCreator from '../components/Forms/PostCreator/PostCreator';
import Layout from '../components/Layout/Layout';
import PostsView from '../components/PostsView/PostsView';
import LIST_POSTS from '../graphql/queries/ListPosts.graphql';
import { useQuery } from '@apollo/client';
import { DISPLAY_POST_CREATOR } from '../graphql/local/DisplayPostCreator';

const PostsPage: React.FC = () => {
  const { data } = useQuery(DISPLAY_POST_CREATOR);
  return (
    <Layout>
      {data.displayPostCreator && <PostCreator />}
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
