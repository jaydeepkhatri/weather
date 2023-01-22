import { RiDropLine, RiWindyLine, RiArrowUpLine } from 'react-icons/ri';
import { TbSunrise, TbSunset } from 'react-icons/tb';
import { useContext } from "react";
import { AppContext } from "../../App";


const AdditionalInfo = () => {
  let { searchCityData, hourlyForcast, FormatTemperature } = useContext(AppContext);
  hourlyForcast = hourlyForcast.list.slice(2, 10);

  const timeFormatter = Intl.DateTimeFormat("en-US", {
    hour12: true,
    minute: "numeric",
    hour: "numeric",
  });



  return (
    <>

      <div className="grid grid-cols-2 m-auto gap-2 max-w-[460px]">
        <div className="col-start-1 col-span-2 md:col-start-1 md:col-span-2 bg-custom-bgSe flex overflow-auto p-5 group rounded-3xl duration-100 hover:bg-teal-600 dark:hover:bg-teal-600">
          <div className='mr-6 flex flex-col items-center'>
            <span className='text-custom-textSe text-xs whitespace-pre group-hover:text-white duration-100'>Now</span>
            <img src={`/img/${searchCityData.weather[0].icon}.svg`} className="mt-2" alt={searchCityData.weather[0].main} />
            <span className="mt-2 text-xl group-hover:text-white">{FormatTemperature(searchCityData.main.temp)}</span>
          </div>
          {


            hourlyForcast.map((forcast: any, index: number) => {
              return (
                <div className='mr-6 flex flex-col items-center last:mr-0' key={index}>
                  <span className='text-custom-textSe text-xs whitespace-pre group-hover:text-white'>{timeFormatter.format(new Date(forcast.dt_txt))}</span>
                  <img src={`/img/${forcast.weather[0].icon}.svg`} className="mt-2" alt={searchCityData.weather[0].main} />
                  <span className='mt-2 text-xl group-hover:text-white'>{FormatTemperature(forcast.main.temp)}</span>
                </div>)
            })


          }
        </div>
        <div className="col-start-1 col-span-1 bg-custom-bgSe group p-5 rounded-3xl duration-100 hover:bg-sky-600">
          <RiDropLine className="text-5xl group-hover:text-white" />
          <p className="text-custom-textSe mt-6 group-hover:text-slate-200">Humidity</p>
          <p className="text-2xl group-hover:text-white leading-tight duration-100">{searchCityData.main.humidity}%</p>
        </div>

        <div className="col-start-2 col-span-1 bg-custom-bgSe p-5 group rounded-3xl duration-100 hover:bg-rose-600">
          <RiWindyLine className="text-5xl group-hover:text-white" />
          <p className="text-custom-textSe mt-6 group-hover:text-slate-200 duration-100">Wind</p>
          <p className="text-2xl group-hover:text-white leading-tight flex items-center duration-100">{`${searchCityData.wind.speed}KM/h`} <RiArrowUpLine style={{ transform: `rotate(${searchCityData.wind.deg}deg)` }} className={`ml-1`} /></p>
        </div>

        <div className="col-start-1 col-span-1 bg-custom-bgSe p-5 group rounded-3xl duration-100 hover:bg-green-600">
          <TbSunrise className="text-5xl group-hover:text-white" />
          <p className="text-custom-textSe mt-6 group-hover:text-slate-200 duration-100">Sunrise</p>
          <p className="text-2xl group-hover:text-white leading-tight duration-100">{timeFormatter.format(searchCityData.sys.sunrise * 1000)}</p>
        </div>

        <div className="col-start-2 col-span-1 bg-custom-bgSe p-5 group rounded-3xl duration-100 hover:bg-orange-600">
          <TbSunset className="text-5xl group-hover:text-white" />
          <p className="text-custom-textSe mt-6 group-hover:text-slate-200 duration-100">Sunset</p>
          <p className="text-2xl group-hover:text-white leading-tight duration-100">{timeFormatter.format(searchCityData.sys.sunset * 1000)}</p>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
