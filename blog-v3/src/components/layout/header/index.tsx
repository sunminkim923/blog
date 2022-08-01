import { Switch } from 'antd';

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import React from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <>
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 flex justify-between items-center h-[75px]">
        <div
          className="flex items-center pl-4 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <img src="/images/profile.jpg" className="w-7 rounded-full" />
          <div className="text-white text-xl pl-2  font-extrabold">
            Sunmin&#39;s Blog
          </div>
        </div>

        <div className="pr-3">
          <Switch
            checkedChildren={<BsFillSunFill className="ml-1.5 text-[17px]" />}
            unCheckedChildren={<BsMoonStarsFill className="ml-1 text-[16px]" />}
            className="w-[55px]"
          />
        </div>
      </div>
    </>
  );
}
