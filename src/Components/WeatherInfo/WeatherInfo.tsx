import { RiMapPinLine } from 'react-icons/ri';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import { useContext } from "react";
import { AppContext } from "../../App";

const WeatherInfo = () => {
  const { searchCityData, FormatTemperature } = useContext(AppContext);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-0 lg:my-32">
        <div className="flex flex-col items-center justify-center py-24 leading-normal">
          <img src={`/img/${searchCityData.weather[0].icon}.svg`} className="mb-12 w-[60px]" alt={searchCityData.weather[0].main} />
          <p className="text-8xl">{FormatTemperature(searchCityData.main.temp)}</p>
          <p className="text-[#393939] dark:text-slate-200">Feels like: {FormatTemperature(searchCityData.main['feels_like'])}</p>
          <p className="mt-2 text-[#393939] dark:text-slate-200">{searchCityData.weather[0].main}</p>

          <div className="flex mt-2">
            <div className="flex items-center text-cus-gray">
              <RiMapPinLine />
              <span className="ml-2">{searchCityData.name}, {searchCityData.sys.country}</span>
            </div>

            <div className="flex items-center text-cus-gray ml-6">
              <span>{FormatTemperature(searchCityData.main.temp_min)} / {FormatTemperature(searchCityData.main.temp_max)}°</span>
            </div>
          </div>
        </div>

        <AdditionalInfo />
      </div>
    </>
  );
};

export default WeatherInfo;