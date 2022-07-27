import { AiFillGithub } from 'react-icons/ai';

export default function Header() {
  return (
    <>
      <div className=" bg-gradient-to-r from-slate-600 to-slate-500 flex justify-between items-center h-[85px]">
        <div>안녕하세요, 김선민 입니다.</div>

        <a
          href={'https://github.com/sunminkim923'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="mr-[20px] text-[50px] cursor-pointer" />
        </a>
      </div>
    </>
  );
}
