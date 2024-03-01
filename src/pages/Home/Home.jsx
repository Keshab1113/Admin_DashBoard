import React from 'react'
import HomePageBox from '../../components/HomePageBox/HomePageBox'
import HomePageCharts from '../../components/HomePageCharts/HomePageCharts'

const Home = () => {
  return (
    <div className=' bg-slate-100 w-full sm:h-[90vh] h-full sm:pl-[15vh] pl-[20vw] pt-5 pr-[3vw] overflow-hidden'>
      <div className=' sm:flex justify-between flex-col sm:flex-row'>
        <div>
      <h1 className=' text-2xl font-semibold'>Good Evening!</h1>
          <h2 className=' text-base text-slate-600'>Hey ambrose welcome to your default dashboard.</h2>
        </div>
        <div className=' sm:flex flex justify-around items-end sm:w-[35%] w-[100%] sm:flex-col md:flex-row flex-col gap-2 flex-wrap'>
          <select name="cars" id="cars" form="carform" className=' bg-white h-10 rounded-3xl pl-4 pr-4 outline-none text-sm sm:mr-5'>
            <option value="volvo" className=' bg-white rounded-3xl'>Default Dashboard</option>
            <option value="saab">Others</option>
          </select>
          <button className=' bg-blue-700 h-10 rounded-3xl px-6 outline-none text-white text-sm'>Create New</button>
          <button className=' text-white bg-yellow-500 h-10 rounded-3xl px-6 outline-none text-sm'>Edit</button>
        </div>
      </div>
      <HomePageBox />
      <HomePageCharts/>
    </div>
  )
}

export default Home
