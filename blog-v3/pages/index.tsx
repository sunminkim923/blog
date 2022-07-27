import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunmin&#39; Blog</title>
        <link rel="icon" href="/images/profile.ico" className="rounded-3xl" />
      </Head>
      <div className="text-4xl">Body</div>
    </>
  );
}
