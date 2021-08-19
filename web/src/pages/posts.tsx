import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { addApolloState, initializeApollo } from '../apollo/apolloClientTest';
import PostCreator from '../components/Forms/PostCreator/PostCreator';
import Layout from '../components/Layout/Layout';
import PostsView from '../components/PostsView/PostsView';
import { useSecretQuery } from '../generated/codegen_types';
import SECRET from '../graphql/queries/Secret.graphql';

const PostsPage: React.FC = () => {
  const { data, loading, error } = useSecretQuery();

  return (
    <Layout>
      <p>{data && data.secretConent}</p>
      <PostCreator />
      <PostsView />
    </Layout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const client = initializeApollo(null, context);

  try {
    const response = await client.query({
      query: SECRET,
    });
    console.log('RESP:', response.data);
    return addApolloState(client, {
      props: {},
    });
  } catch (err) {
    console.log('Error:', err.message);
    return {
      props: {},
    };
  }
};

export default PostsPage;
