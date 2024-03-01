import React from 'react'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Header = () => {
  return (
      <header className=' bg-white w-full h-[10vh] border-b-2 flex pl-2 pr-2 sm:pr-0 sm:pl-0'>
          <div className=' sm:w-[5%] w-[10%] flex justify-center items-center pr-2'>
              <div className=' w-8 h-5 flex flex-col justify-between cursor-pointer'>
                  <div className=' bg-slate-800 w-[50%] h-1'></div>
                  <div className=' bg-slate-800 w-full h-1'></div>
                  <div className=' bg-slate-800 w-[50%] h-1 ml-[50%]'></div>
              </div>
          </div>
          <div className=' sm:w-[75%] w-[30%] justify-center items-center flex overflow-hidden'>
              <h1 className=' text-lg text-nowrap textanimation'><span className=' font-semibold'>What's New:</span> Connect more than 10+ devices at a single time. <span className=' text-blue-600 font-semibold cursor-pointer'> Check Out!</span></h1>
          </div>
          <div className=' flex justify-center items-center sm:w-[20%] w-[60%]'>
              <div className=' w-[20%] h-full justify-center items-center flex border-r-2 border-l-2 '>
                  <Badge color="secondary" variant="dot">
                      <NotificationsIcon className='cursor-pointer'/>
                  </Badge>
              </div>
              <div className=' w-[50%] flex flex-col items-end pr-2'>
              <h1 className=' text-sm font-bold text-blue-500'>Keshab Das</h1>
                  <h2 className=' text-sm font-semibold text-slate-600'>Admin</h2>
              </div>
              <Avatar alt="Keshab Das" src="/keshab.png" />
              <ArrowDropDownIcon className=' text-slate-600 cursor-pointer'/>
          </div>
    </header>
  )
}

export default Header
