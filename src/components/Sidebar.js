import React from "react";
import collapse from "../assets/images/icons/collapse.svg";
import '../assets/css/sidebar.css';

//vuesax icons
import {
  Category,
  Message,
  TaskSquare,
  Profile2User,
  Setting2,
  AddSquare,
  LampOn,
  Colorfilter
} from "iconsax-react";

const Sidebar = () => {
  const sidebarClose = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="sidebar bg-white z-10 w-[250px] h-full relative overflow-y-auto translate-x-[-250px] sm:translate-x-0">
      <div className="sidebar-top w-full mx-auto flex justify-between px-2.5">
        <div className="logo flex items-center px-2.5">
          <Colorfilter size={24} color={"#5030e5"} variant="Bulk" />
          <span className="logo-text font-semibold ml-[9px] sm:text-lg 2xl:text-xl text-[#0D062D]">Project M.</span>
        </div>
        <button className="collapse-btn px-2.5" onClick={sidebarClose}>
          <img src={collapse} alt="<<" />
        </button>
      </div>
      <div className="sidebar-menu w-11/12 mx-auto px-2.5 py-4">
        <ul className="sidebar-menu-list">
          <li className="sidebar-menu-item sm:py-2 2xl:py-3">
            <button className="sidebar-menu-link flex justify-evenly font-medium">
              <Category size={24} variant="Outline" color={"#787486"} />
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Home</span>
            </button>
          </li>
          <li className="sidebar-menu-item py-1 2xl:py-3">
            <button className="sidebar-menu-link flex justify-evenly font-medium">
              <Message size={24} variant="Linear" color={"#787486"} />
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Messages</span>
            </button>
          </li>
          <li className="sidebar-menu-item py-1 2xl:py-3">
            <button className="sidebar-menu-link flex justify-evenly font-medium">
              <TaskSquare size={24} variant="Linear" color={"#787486"} />
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Tasks</span>
            </button>
          </li>
          <li className="sidebar-menu-item py-1 2xl:py-3">
            <button className="sidebar-menu-link flex justify-evenly font-medium">
              <Profile2User size={24} variant="Linear" color={"#787486"} />
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Members</span>
            </button>
          </li>
          <li className="sidebar-menu-item py-1 2xl:py-3">
            <button className="sidebar-menu-link flex justify-evenly font-medium">
              <Setting2 size={24} variant="Linear" color={"#787486"} />
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Settings</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="sidebar-projects px-2.5 sm:py-2 2xl:py-4">
        <div className="sidebar-title flex justify-between items-center w-11/12 mx-auto pb-2 2xl:pb-4">
            <h6 className="uppercase text-[12px] font-bold text-mercor-gray leading-[14px]">My projects</h6>
            <AddSquare size={16} variant="Linear" color={"#787486"} />
        </div>
        <ul className="sidebar-menu-list sm:my-1.5 2xl:my-3">
          <li className="sidebar-menu-item sm:my-1 2xl:my-3 flex justify-between items-center active px-2.5 h-[39px] rounded-lg leading-[19px]">
            <button className="sidebar-menu-link flex justify-evenly items-center font-medium">
              <div className="eclipse rounded-full w-[8px] h-[8px] bg-mercor-green"></div>
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Mobile App</span>
            </button>
            <button className="text-center">...</button>
          </li>
          <li className="sidebar-menu-item sm:my-1 2xl:my-3 flex justify-between items-center px-2.5 h-[39px] rounded-lg leading-[19px]">
            <button className="sidebar-menu-link flex justify-evenly items-center font-medium">
              <div className="eclipse rounded-full w-[8px] h-[8px] bg-mercor-yellow"></div>
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Website Design</span>
            </button>
          </li>
          <li className="sidebar-menu-item sm:my-1 2xl:my-3 flex justify-between items-center px-2.5 h-[39px] rounded-lg leading-[19px]">
            <button className="sidebar-menu-link flex justify-evenly items-center font-medium">
              <div className="eclipse rounded-full w-[8px] h-[8px] bg-mercor-purple-lite"></div>
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Design System</span>
            </button>
          </li>
          <li className="sidebar-menu-item sm:my-1 2xl:my-3 flex justify-between items-center px-2.5 h-[39px] rounded-lg leading-[19px]">
            <button className="sidebar-menu-link flex justify-evenly items-center font-medium">
              <div className="eclipse rounded-full w-[8px] h-[8px] bg-mercor-blue"></div>
              <span className="link-text text-mercor-gray pl-[16px] 2xl:text-[17px] sm:text-[15px] leading-[19px]">Wireframes</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tips absolute bottom-2.5 left-[50%] translate-x-[-50%] w-[95%] 2xl:h-[206px] h-[170px] rounded-lg flex justify-center bg-[#f3f3f3]">
        <div className="tips-icon 2xl:w-[66px] w-[50px] 2xl:h-[66px] h-[50px] 2xl:-mt-[33px] -mt-[25px] bg-[#f3efdc] flex justify-center items-center rounded-full">
            <LampOn size={24} variant="Bold" color={"#FBCB18"}/>
        </div>
        <div className="tips-content absolute mt-[33px] flex flex-col justify-around items-center w-4/5 h-4/5">
            <h6 className="text-[14] font-medium leading-[16px]">Thoughts Time</h6>
            <p className="text-center text-[12px] leading-[14px]">We don't have any notice for you, till then you can share your thoughts with your peers.</p>
            <button className="h-[40px] bg-white rounded-lg text-center text-[14px] font-medium w-full leading-[16px]">Write a message</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
