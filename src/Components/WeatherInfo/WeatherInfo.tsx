import { RiMapPinLine } from 'react-icons/ri';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import {useContext} from "react";
import { AppContext } from "../../App";

const WeatherInfo = () => {
  const {searchCityData} = useContext(AppContext);
  const FormatTemperature = (temp:number) => `${temp.toFixed(1)}°C`;

  return (
    <>
      <div className="flex flex-col items-center justify-center py-24 leading-normal">
        <p className="text-8xl">{searchCityData.main.temp}°C</p>
        <p className="text-slate-700 dark:text-slate-200">Feels like: {FormatTemperature(searchCityData.main['feels_like'])}</p>
        <p className="mt-2 text-cus-gray">{searchCityData.weather[0].description}</p>

        <div className="flex mt-2">
          <div className="flex items-center text-cus-gray">
            <RiMapPinLine />
            <span className="ml-2">{searchCityData.name}</span>
          </div>

          <div className="flex items-center text-cus-gray ml-6">
            <span>{FormatTemperature(searchCityData.main.temp_min)} / {FormatTemperature(searchCityData.main.temp_max)}°</span>
          </div>
        </div>
      </div>

      <AdditionalInfo />
    </>
  );
};

export default WeatherInfo;
