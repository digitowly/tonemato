import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function Home() {
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
