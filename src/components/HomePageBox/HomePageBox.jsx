import React from "react";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import TroubleshootSharpIcon from '@mui/icons-material/TroubleshootSharp';

const HomePageBox = () => {
  return (
    <div className=" sm:h-[30vh] h-min sm:flex justify-between items-center">
      <div className=" bg-white sm:w-[32%] h-[15vh] sm:h-[60%] rounded-xl pr-4 pt-2 mt-2 sm:mt-0">
        <div className=" text-end  w-full ">
          <button className=" bg-blue-700 rounded-3xl px-4 py-[4px] text-white text-sm">
            Manage
          </button>
        </div>
        <div className=" flex ml-4">
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
            <KitchenIcon className=" text-blue-700" />
          </div>
          <div className=" flex flex-col ml-4">
            <h1 className=" font-semibold">Total Device Models</h1>
            <h1 className=" text-blue-700 text-xl font-semibold">06</h1>
          </div>
        </div>
      </div>
      <div className=" bg-white  sm:w-[32%] w-[100%] h-[15vh] sm:h-[60%] rounded-xl pr-4 pt-2 mt-2 sm:mt-0">
        <div className=" text-end  w-full">
                  <button className=" bg-yellow-500 rounded-3xl px-4 py-[4px] text-white text-sm">
            Manage
          </button>
        </div>
        <div className=" flex ml-4">
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
                      <ScreenSearchDesktopIcon className=" text-yellow-600" />
          </div>
          <div className=" flex flex-col ml-4">
            <h1 className=" font-semibold">Total EndPoints</h1>
            <h1 className=" text-yellow-600 text-xl font-semibold">03</h1>
          </div>
        </div>
      </div>
      <div className=" bg-white sm:w-[32%] w-[100%] h-[15vh] sm:h-[60%] rounded-xl pr-4 pt-2 mt-2 sm:mt-0">
        <div className=" text-end  w-full">
                  <button className=" bg-red-600 rounded-3xl px-4 py-[4px] text-white text-sm">
            Manage
          </button>
        </div>
        <div className=" flex ml-4">
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
                      <TroubleshootSharpIcon className=" text-red-600" />
          </div>
          <div className=" flex flex-col ml-4">
            <h1 className=" font-semibold">Metrics Configured</h1>
            <h1 className=" text-red-600 text-xl font-semibold">02</h1>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePageBox;
