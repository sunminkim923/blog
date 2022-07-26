import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Layout from "../src/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
