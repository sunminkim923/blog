import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunmin&#39; Blog</title>
        <link rel="icon" href="/images/profile.ico" className="rounded-3xl" />
      </Head>
      <div className="flex justify-center  bg-slate-600">
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
            <div className="text-xl pt-2">
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
            <div className="text-2xl pt-10">테스트</div>
            <div className="text-lg">
              <div>
                ReactNode는 ReactElement를 비롯하여 대부분의 자바스크립트 데이터
                타입을 아우르는 범용적인 타입이다. 따라서 어떤 props을 받을
                건데,
              </div>
              <div>
                구체적으로 어떤 타입이 올지 알 수 없거나, 어떠한 타입도 모두
                받고 싶다면 ReactNode로 지정해주는 것이 좋다.
              </div>
              <div>
                참고로 ReactText와 ReactChild는 React를 사용할 때 큰 관련이 없기
                때문에 곧 deprecated 될 것이라 명시되어 있다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
