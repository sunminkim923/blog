import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  function onClickBlog() {
    router.push('./list');
  }

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
            <div className="text-xl pt-10">About Me.</div>
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
              <li className="pt-1">
                Tech Blog :
                <a className="pl-2" onClick={onClickBlog}>
                  https://github.com/sunminkim923
                </a>
              </li>
              <li className="pt-1">
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

              <li className="pt-1">
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
            <div className="text-2xl pt-10">Developer</div>
            <div className="text-xl pt-2">
              <li>1년차 프론트앤드 주니어 개발자</li>
              <li className="pt-1">(주)마지막삼십분 에서 근무중</li>
              <li className="pt-1">
                Javascript 와 React로 개발중이나 Typescript와 Next로 넘어가는 중
              </li>
              <li className="pt-1">UX와 UI에 관심이 많은 편</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
