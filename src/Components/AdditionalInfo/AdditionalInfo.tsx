import { RiDropLine, RiWindyLine, RiArrowUpLine } from 'react-icons/ri';
import { TbSunrise, TbSunset } from 'react-icons/tb';
import { useContext } from "react";
import { AppContext } from "../../App";
const clouds = require("../../assets/img/clouds.png");
const atmosphere = require("../../assets/img/atmosphere.png");
const clear = require("../../assets/img/clear.png");
const drizzle = require("../../assets/img/drizzle.png");
const rain = require("../../assets/img/rain.png");
const snow = require("../../assets/img/snow.png");
const thunderstorm = require("../../assets/img/thunderstorm.png");

const AdditionalInfo = () => {
  let { searchCityData, hourlyForcast, FormatTemperature } = useContext(AppContext);
  hourlyForcast = hourlyForcast.list.slice(2, 10);
  console.log(hourlyForcast);

  const timeFormatter = Intl.DateTimeFormat("en-US", {
    hour12: true,
    minute: "numeric",
    hour: "numeric",
  });

  const handleWeatherImg = (weather:string) => {
    if(weather === "Thunderstorm") return thunderstorm;
    if(weather === "Drizzle") return drizzle;
    if(weather === "Rain") return rain;
    if(weather === "Snow") return snow;
    if(weather === "Mist" || weather === "Smoke" || weather === "Haze" || weather === "Dust" || weather === "Fog" || weather === "Sand" || weather === "Ash" || weather === "Squall" || weather === "Tornado") return atmosphere;
    if(weather === "Clear") return clear;
    if(weather === "Clouds") return clouds;
  }


  return (
    <>

      <div className="grid grid-cols-2 m-auto gap-2 max-w-[460px]">
        <div className="col-start-1 col-span-2 md:col-start-1 md:col-span-2 bg-gray-100 dark:bg-[#393939] flex overflow-auto p-5 group rounded-3xl duration-100 hover:bg-teal-600 dark:hover:bg-teal-600">
          <div className='mr-6 flex flex-col items-center'>
            <span className='text-slate-600 dark:text-gray-500 text-sm whitespace-pre group-hover:text-white dark:group-hover:text-white duration-100'>Now</span>
            <img src={handleWeatherImg(searchCityData.weather[0].main)} className="mt-1" alt={searchCityData.weather[0].main} />
            <span className="mt-1 group-hover:text-white dark:group-hover:text-white">{FormatTemperature(searchCityData.main.temp)}</span>
          </div>
          {


            hourlyForcast.map((forcast: any, index: number) => {
              return (
                <div className='mr-6 flex flex-col items-center last:mr-0' key={index}>
                  <span className='text-slate-600 dark:text-gray-500 text-sm whitespace-pre group-hover:text-white dark:group-hover:text-white duration-100'>{timeFormatter.format(new Date(forcast.dt_txt))}</span>
                  <img src={handleWeatherImg(forcast.weather[0].main)} className="mt-1" alt={searchCityData.weather[0].main} />
                  <span className='mt-1 group-hover:text-white dark:group-hover:text-white'>{FormatTemperature(forcast.main.temp)}</span>
                </div>)
            })


          }
        </div>
        <div className="col-start-1 col-span-1 bg-gray-100 dark:bg-[#393939] group p-5 rounded-3xl duration-100 hover:bg-sky-600 dark:hover:bg-sky-600">
          <RiDropLine className="text-5xl group-hover:text-white dark:group-hover:text-white" />
          <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Humidity</p>
          <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">{searchCityData.main.humidity}%</p>
        </div>

        <div className="col-start-2 col-span-1 bg-gray-100 dark:bg-[#393939] p-5 group rounded-3xl duration-100 hover:bg-rose-600 dark:hover:bg-rose-600">
          <RiWindyLine className="text-5xl group-hover:text-white dark:group-hover:text-white" />
          <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Wind</p>
          <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight flex items-center duration-100">{`${searchCityData.wind.speed}KM/h`} <RiArrowUpLine style={{ transform: `rotate(${searchCityData.wind.deg}deg)` }} className={`ml-1`} /></p>
        </div>

        <div className="col-start-1 col-span-1 bg-gray-100 dark:bg-[#393939] p-5 group rounded-3xl duration-100 hover:bg-green-600 dark:hover:bg-green-600">
          <TbSunrise className="text-5xl group-hover:text-white dark:group-hover:text-white" />
          <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Sunrise</p>
          <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">{timeFormatter.format(searchCityData.sys.sunrise * 1000)}</p>
        </div>

        <div className="col-start-2 col-span-1 bg-gray-100 dark:bg-[#393939] p-5 group rounded-3xl duration-100 hover:bg-orange-600 dark:hover:bg-orange-600">
          <TbSunset className="text-5xl group-hover:text-white dark:group-hover:text-white" />
          <p className="text-cus-gray mt-6 group-hover:text-slate-200 dark:group-hover:text-white duration-100">Sunset</p>
          <p className="text-2xl group-hover:text-white dark:group-hover:text-white leading-tight duration-100">{timeFormatter.format(searchCityData.sys.sunset * 1000)}</p>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
