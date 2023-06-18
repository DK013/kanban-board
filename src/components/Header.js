import React from "react";
import "../assets/css/header.css";
import { User } from '../assets/images/users';

import { 
  HambergerMenu,
  SearchNormal1,
  Calendar2,
  MessageQuestion,
  Notification,
  ArrowDown2
} from "iconsax-react";

const Header = () => {
  const sidebarOpen = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  return (
    <div className="header w-full relative">
      <div className="container w-11/12 h-full mx-auto flex flex-row items-center">
        <div className="header-left w-1/2">
          <div className="search w-[417px] h-[40px] bg-[#F5F5F5] rounded-md hidden sm:flex flex-row items-center">
            <SearchNormal1 size={22} variant="TwoTone" color={"#787486"}className="mx-2" />
            <input type="text" className="search-input w-full mx-2 bg-transparent focus:outline-none text-[14px] leading-[16px]" placeholder="Search for anything..." />
          </div>
          <button className="mobile-menu-btn flex items-center justify-center h-[40px] w-[40px] bg-transparent rounded-lg sm:hidden" onClick={sidebarOpen}>
            <HambergerMenu size={22} variant="Linear" color={"#787486"}/>
          </button>
        </div>
        <div className="header-right w-1/2 flex flex-row justify-end h-full">
          <div className="nav-icons flex flex-row items-center justify-center h-full sm:mx-10">
            <button><Calendar2 size={22} varient="Linear" color={"#787486"} className="mx-2" /></button>
            <button><MessageQuestion size={22} varient="Linear" color={"#787486"} className="mx-2" /></button>
            <button className="relative">
              <Notification size={22} varient="Linear" color={"#787486"} className="mx-2" />
              <div className="eclipse rounded-full absolute bg-mercor-red-lite w-[6px] h-[6px] top-0 right-[25%]"></div>
            </button>
          </div>
          <button className="user-badge flex flex-row items-center justify-center h-full">
            <div className="user-info sm:mx-2 hidden sm:block">
              <h6 className="text-right text-[16px] leading-[19px]">Anima Agarwal</h6>
              <h6 className="text-right text-[14px] leading-[16px] text-mercor-gray">U.P, India</h6>
            </div>
            <img src={User} alt="" className="rounded-full mx-2 w-[38px] h-[38px]"/>
            <ArrowDown2 size={22} varient="Outline" color={"#292D32"} className="hidden sm:block sm:mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
