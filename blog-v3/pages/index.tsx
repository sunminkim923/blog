import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunmin&#39; Blog</title>
        <link rel="icon" href="/images/profile.ico" className="rounded-3xl" />
        <link
          href="https://fonts.googleapis.com/css2?https://fonts.google.com/share?selection.family=Jua=Krona+One&display=optional"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center  bg-slate-600 ">
        <div className="w-full md:w-[800px] bg-orange-300 ">
          <div className="text-center text-3xl mt-3 font-bold">
            안녕하세요. 김선민입니다.
          </div>
          <div className="flex justify-center">
            <img
              src="/images/profile.jpg"
              className="w-40 mt-6  rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
