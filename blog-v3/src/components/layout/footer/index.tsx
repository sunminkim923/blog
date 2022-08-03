import { BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <div className="h-32 bg-black">
        <div className="flex items-center h-[100%] justify-center">
          <a
            href="https://github.com/sunminkim923"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="text-[40px] text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}
