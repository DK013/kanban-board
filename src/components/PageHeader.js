import React from 'react'

import ProjectName from './ProjectName'
import Team from './Team'

const PageHeader = () => {
  return (
    <div className='flex flex-row justify-between mb-5 2xl:mb-10'>
      <ProjectName />
      <Team />
    </div>
  )
}

export default PageHeader
