import { Switch } from 'antd';

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import React from 'react';

export default function Header() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 flex justify-between items-center h-[75px]">
        <div className="flex items-center pl-4 cursor-pointer">
          <img src="/images/profile.jpg" className="w-10 rounded-3xl" />
          <div className="text-white text-3xl pl-4  font-extrabold">
            Sunmin&#39;s Blog
          </div>
        </div>

        <div className="pr-3 ">
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
