import React, { useState } from 'react';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import HamBurgeMenu from './HamBurgeMenu';
import { IoMdMenu } from "react-icons/io";

const Nav = () => {

 const [flag, setFlag] = useState(0);
 function handelHambarg() {
  setFlag(flag === 1 ? 0 : 1);
}


  
  const tabs = ['DESIGNER', 'COLLABS', 'EVENTS','BLOG','CARD']

  return (
    <div className='nav w-full bg-[#060503] text-[#E4E2E0] flex justify-between items-center p-2.5 relative'>
      <LeftNav />

      <div
        className='text-2xl w-[25px] h-[25px] rounded-lg lg:hidden cursor-pointer active:scale-95'
        onClick={handelHambarg}
      >
        <IoMdMenu />
      </div>

      <RightNav tabs={tabs} />
       {/* <HamBurgeMenu opacity={flag} tabs={tabs}/> */}
    <HamBurgeMenu opacity={flag} tabs={tabs} />

  
    </div>
  );
};

export default Nav;
