import React from 'react';
import { RiDropLine, RiWindyLine } from 'react-icons/ri';
import { TbSunrise, TbSunset } from 'react-icons/tb';

const AdditionalInfo = () => {
  return (
    <div className="grid grid-cols-2 flex-wrap gap-2">
      <div className="bg-cus-gray p-5 rounded-3xl w-full max-w-[240px] ml-auto">
        <RiDropLine className="text-5xl" />
        <p className="text-cus-gray mt-6">Humidity</p>
        <p className="text-2xl leading-tight">67%</p>
      </div>

      <div className="bg-cus-gray p-5 rounded-3xl w-full max-w-[240px]">
        <RiWindyLine className="text-5xl" />
        <p className="text-cus-gray mt-6">Wind</p>
        <p className="text-2xl leading-tight">67%</p>
      </div>

      <div className="bg-cus-gray p-5 rounded-3xl w-full max-w-[240px] ml-auto">
        <TbSunrise className="text-5xl" />
        <p className="text-cus-gray mt-6">Sunrise</p>
        <p className="text-2xl leading-tight">06:37 AM</p>
      </div>

      <div className="bg-cus-gray p-5 rounded-3xl w-full max-w-[240px]">
        <TbSunset className="text-5xl" />
        <p className="text-cus-gray mt-6">Sunset</p>
        <p className="text-2xl leading-tight">07:30 PM</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
