import React from "react";
import { AddSquare } from "iconsax-react";
import { User2, User3, User4, User5 } from "../assets/images/users";

const Team = () => {
  return (
    <div className="flex flex-row items-center justify-end">
      <button className="flex flex-row items-center">
        <AddSquare size={18} variant="Bulk" color={"#5030E5"} />
        <span className="text-mercor-purple text-[16px] leading-[19px] font-medium sm:mx-2">
          Invite
        </span>
      </button>
      <div className="flex flex-row items-center ml-2">
        <img src={User2} alt="" className="w-[38px] h-[38px] rounded-full hidden sm:block" />
        <img src={User3} alt="" className="w-[38px] h-[38px] -ml-[8px] rounded-full hidden sm:block" />
        <img src={User4} alt="" className="w-[38px] h-[38px] -ml-[8px] rounded-full hidden sm:block" />
        <img src={User5} alt="" className="w-[38px] h-[38px] -ml-[8px] rounded-full hidden sm:block" />
        <button className="eclipse rounded-full w-[38px] h-[38px] -ml-[8px] bg-mercor-red-liter hidden sm:flex justify-center items-center">
          <span className="text-mercor-red text-[15px] leading-[18px] font-medium">
            +2
          </span>
        </button>
      </div>
    </div>
  );
};

export default Team;
