import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Owly<a href='https://nextjs.org'>Next.js!</a>
          </h1>

          <h1>This is tonemato!</h1>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'>
            Powered by{' '}
            <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  );
}
