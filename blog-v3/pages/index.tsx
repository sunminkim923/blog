import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  function onClickBlog() {
    router.push('./list');
  }

  return (
    <>
      <div className="flex justify-center  bg-slate-600">
        <div className="w-screen md:w-[750px] bg-orange-300">
          <div className="text-center text-3xl mt-3 font-bold">
            Nice to meet you.
          </div>
          <div className="flex justify-center">
            {/* <img
              src="/images/profile.jpg"
              className="w-40 mt-6  rounded-full"
            /> */}
            <span className="w-40 h-40 mt-6 bg-slate-400 rounded-full"></span>
          </div>

          <div className="pl-8">
            <div className="text-lg sm:text-xl pt-10">About Me</div>
            <div className="text-md sm:text-lg pt-2  w-10:text-red-500">
              <li>
                Github :
                <a
                  className="pl-2"
                  href="https://github.com/sunminkim923"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/sunminkim923
                </a>
              </li>
              <li className="pt-1">
                Tech Blog :
                <a className="pl-2" onClick={onClickBlog}>
                  sunmin.dev94.co.kr
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
                  linkedin.com/in/sunmindev94
                </a>
              </li>
            </div>

            <div className="text-lg sm:text-xl pt-6">Developer</div>
            <div className="text-md sm:text-lg pt-2">
              <li>1년차 프론트앤드 주니어 개발자</li>
              <li className="pt-1">(주)마지막삼십분 에서 근무중</li>
              <li className="pt-1">Typescript와 Next.js에 관심이 높음</li>
              <li className="pt-1">UX와 UI에 관심이 많은 편</li>
            </div>
            <div className="text-lg sm:text-xl pt-6">Etc</div>
            <div className="text-md sm:text-lg pt-2">
              <li>Clean Code 정독 중</li>
              <li className="pt-1">야구와 축구를 좋아함</li>
              <li className="pt-1">꾸준한 뱃살 관리중</li>
            </div>
            <div className="text-md sm:text-lg pt-6">
              저에 대해 더 알고 싶으시다면, <a>이력서</a>를 참고해주세요.
            </div>
            <div className="text-md sm:text-lg pt-2 pb-10">
              문의, 제안 등은 언제든 메일 보내주세요.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
