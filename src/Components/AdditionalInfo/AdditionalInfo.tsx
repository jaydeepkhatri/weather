import React from 'react';
import { RiDropLine, RiWindyLine, RiArrowUpLine } from 'react-icons/ri';
import { TbSunrise, TbSunset } from 'react-icons/tb';

const AdditionalInfo = () => {
  return (
    <div className="grid grid-cols-2 flex-wrap gap-2">
      <div className="bg-cus-gray  group p-5 rounded-3xl w-full max-w-[240px] ml-auto duration-100 hover:bg-sky-600">
        <RiDropLine className="text-5xl" />
        <p className="text-cus-gray mt-6 group-hover:text-white duration-100">Humidity</p>
        <p className="text-2xl leading-tight">67%</p>
      </div>

      <div className="bg-cus-gray p-5 group rounded-3xl w-full max-w-[240px] duration-100 hover:bg-rose-600">
        <RiWindyLine className="text-5xl" />
        <p className="text-cus-gray mt-6 group-hover:text-white duration-100">Wind</p>
        <p className="text-2xl leading-tight flex items-center">3 KM/h <RiArrowUpLine className='rotate-[36deg] ml-1' /></p>
      </div>

      <div className="bg-cus-gray p-5 group rounded-3xl w-full max-w-[240px] ml-auto duration-100 hover:bg-green-600">
        <TbSunrise className="text-5xl" />
        <p className="text-cus-gray mt-6 group-hover:text-white duration-100">Sunrise</p>
        <p className="text-2xl leading-tight">06:37 AM</p>
      </div>

      <div className="bg-cus-gray p-5 group rounded-3xl w-full max-w-[240px] duration-100 hover:bg-orange-600">
        <TbSunset className="text-5xl" />
        <p className="text-cus-gray mt-6 group-hover:text-white duration-100">Sunset</p>
        <p className="text-2xl leading-tight">07:30 PM</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
