import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import Head from 'next/head';

export default function MyBlog({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sunmin&#39; Blog</title>
        <link rel="icon" href="/images/profile.ico" className="rounded-3xl" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
