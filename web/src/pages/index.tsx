import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { useListUsersQuery } from '../generated/codegen_types';

export default function Home() {
  const { data, loading } = useListUsersQuery();

  !loading && console.log(data.users);

  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </div>
    </Layout>
  );
}
