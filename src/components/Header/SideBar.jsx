import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import logo1 from '/thunder.jpg'
import logo2 from '/statistic.png'

const SideBar = () => {
  return (
      <div className=' bg-white border-r-2 sm:h-[90vh] h-[180vh] sm:w-[5vw] w-[17vw] absolute'>
          <div className='flex flex-col h-[50%] pt-5 justify-around items-center'>
            <HomeIcon className=' text-yellow-500 cursor-pointer'/>
            <DashboardCustomizeIcon/>
            <img src={logo1} alt="" width={25} height={25}/>
            <img src={logo2} alt="" width={25} height={25}/>
          </div>
    </div>
  )
}

export default SideBar
