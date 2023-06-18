import React from 'react'
import '../assets/css/projectName.css'

import { Link21, Edit2 } from 'iconsax-react'

const ProjectName = () => {
  return (
    <div className="flex flex-row items-center justify-start">
      <h1 className='2xl:text-[46px] sm:text-[38px] text-[24px] font-semibold mr-1 sm:mr-5'>Mobile App</h1>
      <button className="edit-btn relative w-[25px] h-[25px] sm:mx-2 bg-[#5030E5]/[0.2] rounded flex justify-center items-center">
        <Edit2 size={16} color={'#5030E5'} variant="Outline"/>
      </button>
      <button className="w-[25px] h-[25px] mx-2 bg-[#5030E5]/[0.2] rounded flex justify-center items-center">
        <Link21 size={16} color={'#5030E5'} variant="Outline"/>
      </button>      
    </div>
  )
}

export default ProjectName
