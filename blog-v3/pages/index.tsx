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
          <div className="text-center text-3xl mt-3 font-bold">hello</div>
          <div className="flex justify-center">
            {/* <img
              src="/images/profile.jpg"
              className="w-40 mt-6  rounded-full"
            /> */}
            <span className="w-40 h-40 mt-6 bg-slate-400 rounded-full"></span>
          </div>

          <div className="pl-10">
            <div className="text-2xl pt-10">About Me.</div>
            <div className="text-lg pt-2">
              <li>
                Github :
                <a
                  className="pl-2"
                  href="https://github.com/sunminkim923"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/sunminkim923
                </a>
              </li>
              <li>
                Tech Blog :
                <a
                  className="pl-2"
                  // href="https://github.com/sunminkim923"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/sunminkim923
                </a>
              </li>
              <li>
                Email :
                <a
                  className="pl-2"
                  href="mailto:sunmin.dev94@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  sunmin.dev94@gmail.com
                </a>
              </li>

              <li>
                LinkedIn :
                <a
                  className="pl-2"
                  href="https://www.linkedin.com/in/sunmindev94/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/in/sunmindev94/
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
