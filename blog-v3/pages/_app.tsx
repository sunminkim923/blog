import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import Layout from '../src/components/layout';

export default function MyBlog({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
