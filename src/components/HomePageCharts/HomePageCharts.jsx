import React from 'react'
import BarChart from '../Charts/BarChart'
import AreaChart from '../Charts/AreaChart'


const HomePageCharts = () => {
  return (
    <div className='  sm:h-[47.5vh] h-screen flex justify-between sm:flex-row flex-col mt-4 sm:mt-0'>
          <div className=' sm:w-[48%] w-[100%] h-full bg-white flex flex-col justify-center items-center'>
        <div className=' flex w-[100%] sm:w-[80%] mt-2 justify-between'>
          <h1 className=' font-semibold pl-2'>Your Daily Test Execution Summary</h1>   
          <select name="cars" id="cars" form="carform" className=' border h-10 rounded-3xl px-2 outline-none text-sm mr-5'>
            <option value="volvo" className=' rounded-3xl'>Today</option>
            <option value="saab">Yesterday</option>
            <option value="saab">This Week</option>
            <option value="saab">This Months</option>
            <option value="saab">This Year</option>
          </select>
              </div>
             <BarChart/>
      </div>
      <div className=' sm:w-[48%] w-[100%] h-full bg-white flex flex-col justify-center items-center mt-4 sm:mt-0'>
        <div className=' flex w-[100%] sm:w-[80%] mt-2 justify-between'>
        <h1 className=' font-semibold pl-2'>Your Network Signals</h1>
        <select name="cars" id="cars" form="carform" className=' border h-10 rounded-3xl px-2 outline-none text-sm mr-5'>
          <option value="volvo" className=' rounded-3xl'>Today</option>
          <option value="saab">Yesterday</option>
          <option value="saab">This Week</option>
          <option value="saab">This Months</option>
          <option value="saab">This Year</option>
          </select>
        </div>
              <AreaChart/>
      </div>
    </div>
  )
}

export default HomePageCharts
