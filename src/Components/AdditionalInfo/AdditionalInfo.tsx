import { RiDropLine, RiWindyLine, RiArrowUpLine } from 'react-icons/ri';
import { TbSunrise, TbSunset } from 'react-icons/tb';
import { useContext } from "react";
import { AppContext } from "../../App";

const AdditionalInfo = () => {
  const { searchCityData } = useContext(AppContext);

  const calculateTime = (time: number) => {
    let date = new Date();
    date.setTime(time * 1000);
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${hour}:${minutes}`;
  }

  return (
    <>

      <div className="grid grid-cols-4 gap-2">
        <div className="col-start-2 col-span-2 bg-slate-200 dark:bg-[#393939] p-5 group rounded-3xl duration-100 hover:bg-rose-600 dark:hover:bg-rose-600">

        </div>
        <div className="col-start-2 col-span-1 bg-slate-200 dark:bg-[#393939] group p-5 rounded-3xl duration-100 hover:bg-sky-600 dark:hover:bg-sky-600">
          <RiDropLine className="text-5xl group-hover:text-white dark:group-hover:text-white" />
          <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Humidity</p>
          <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">{searchCityData.main.humidity}%</p>
        </div>

        <div className="col-start-3 col-span-1 bg-slate-200 dark:bg-[#393939] p-5 group rounded-3xl w-full max-w-[240px] duration-100 hover:bg-rose-600 dark:hover:bg-rose-600">
          <RiWindyLine className="text-5xl group-hover:text-white dark:group-hover:text-white" />
          <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Wind</p>
          <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight flex items-center duration-100">{`${searchCityData.wind.speed} KM/h`} <RiArrowUpLine style={{ transform: `rotate(${searchCityData.wind.deg}deg)` }} className={`ml-1`} /></p>
        </div>

        <div className="col-start-2 col-span-1 bg-slate-200 dark:bg-[#393939] p-5 group rounded-3xl w-full max-w-[240px] ml-auto duration-100 hover:bg-green-600 dark:hover:bg-green-600">
          <TbSunrise className="text-5xl group-hover:text-white dark:group-hover:text-white" />
          <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Sunrise</p>
          <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">{calculateTime(searchCityData.sys.sunrise)} AM</p>
        </div>

        <div className="col-start-3 col-span-1 bg-slate-200 dark:bg-[#393939] p-5 group rounded-3xl w-full max-w-[240px] duration-100 hover:bg-orange-600 dark:hover:bg-orange-600">
          <TbSunset className="text-5xl group-hover:text-white dark:group-hover:text-white" />
          <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Sunset</p>
          <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">{calculateTime(searchCityData.sys.sunset)} PM</p>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
