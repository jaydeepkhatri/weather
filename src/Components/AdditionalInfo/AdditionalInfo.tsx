import { RiDropLine, RiWindyLine, RiArrowUpLine } from 'react-icons/ri';
import { TbSunrise, TbSunset } from 'react-icons/tb';

const AdditionalInfo = () => {

  return (
    <div className="grid grid-cols-2 flex-wrap gap-2">
      <div className="bg-slate-200 dark:bg-[#393939] group p-5 rounded-3xl w-full max-w-[240px] ml-auto duration-100 hover:bg-sky-600 dark:hover:bg-sky-600">
        <RiDropLine className="text-5xl group-hover:text-white dark:group-hover:text-white" />
        <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Humidity</p>
        <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">67%</p>
      </div>

      <div className="bg-slate-200 dark:bg-[#393939] p-5 group rounded-3xl w-full max-w-[240px] duration-100 hover:bg-rose-600 dark:hover:bg-rose-600">
        <RiWindyLine className="text-5xl group-hover:text-white dark:group-hover:text-white" />
        <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Wind</p>
        <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight flex items-center duration-100">3 KM/h <RiArrowUpLine className='rotate-[36deg] ml-1' /></p>
      </div>

      <div className="bg-slate-200 dark:bg-[#393939] p-5 group rounded-3xl w-full max-w-[240px] ml-auto duration-100 hover:bg-green-600 dark:hover:bg-green-600">
        <TbSunrise className="text-5xl group-hover:text-white dark:group-hover:text-white" />
        <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Sunrise</p>
        <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">06:37 AM</p>
      </div>

      <div className="bg-slate-200 dark:bg-[#393939] p-5 group rounded-3xl w-full max-w-[240px] duration-100 hover:bg-orange-600 dark:hover:bg-orange-600">
        <TbSunset className="text-5xl group-hover:text-white dark:group-hover:text-white" />
        <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Sunset</p>
        <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">07:30 PM</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
