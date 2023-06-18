import React from 'react'
import '../assets/css/filter.css'
import seperator from '../assets/images/icons/seperator.svg'

import { Filter, Calendar1, ArrowDown2, Profile2User, Pause, Menu } from 'iconsax-react'

const FilterBar = () => {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="w-1/2 flex justify-start items-center">
        <button className="filter-btn rounded-lg flex flex-row items-center justify-center w-[40px] sm:w-[122px] h-[40px] mr-0.5 sm:mr-2">
          <Filter size={16} variant="Linear" color={'#787486'} className="mx-1"/>
          <span className='hidden sm:block text-[16px] leading-[19px]'>Filter</span>
          <ArrowDown2 size={16} variant="Linear" color={'#787486'} className="ml-2 hidden sm:block"/>
        </button>
        <button className="filter-btn rounded-lg flex flex-row items-center justify-center w-[40px] sm:w-[122px] h-[40px] ml-0.5 sm:ml-2">
          <Calendar1 size={16} variant="Linear" color={'#787486'} className="mx-1.5"/>
          <span className='hidden sm:block text-[16px] leading-[19px]'>Today</span>
          <ArrowDown2 size={16} variant="Linear" color={'#787486'} className="ml-2 hidden sm:block"/>
        </button>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <div className="flex flex-row justify-between">
          <button className="filter-btn rounded-lg flex flex-row items-center justify-center w-[40px] sm:w-[97px] h-[40px] mr-0.5 sm:mr-3">
            <Profile2User size={16} variant="Linear" color={'#787486'} className="mx-1.5"/>
            <span className='hidden sm:block text-[16px] leading-[19px]'>Share</span>
          </button>
          <img src={seperator} alt="" className='mx-0.5 sm:mx-3'/>
          <button className="w-[40px] h-[40px] bg-mercor-purple flex justify-center items-center rounded-lg mx-0.5 sm:mx-3">
            <Pause size={20} variant="Bold" color={'#ffffff'} className="rotate-90"/>
          </button>
          <button className="w-[40px] h-[40px] bg-transparent flex justify-center items-center rounded-lg ml-0.5 sm:ml-3">
            <Menu size={21} variant="Linear" color={'#787486'} className="rotate-180"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
