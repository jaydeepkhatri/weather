import { RiMapPinLine } from 'react-icons/ri';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import {useContext} from "react";
import { AppContext } from "../../App";

const WeatherInfo = () => {
  const {searchCityData} = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-24 leading-normal">
        <p className="text-8xl">{searchCityData.main.temp}°C</p>
        <p className="text-slate-700 dark:text-slate-200">Feels like: {searchCityData.main['feels_like']}°</p>
        <p className="mt-2 text-cus-gray">{searchCityData.weather[0].description}</p>

        <div className="flex mt-2">
          <div className="flex items-center text-cus-gray">
            <RiMapPinLine />
            <span className="ml-2">{searchCityData.name}</span>
          </div>

          <div className="flex items-center text-cus-gray ml-6">
            <span>{searchCityData.main.temp_min}° / {searchCityData.main.temp_max}°</span>
          </div>
        </div>
      </div>

      <AdditionalInfo />
    </>
  );
};

export default WeatherInfo;
