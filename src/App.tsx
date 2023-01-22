import { Header, WeatherInfo, Home, Error, Loader } from "./Components";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext<any>(null);

function App() {

  const [cities, setCities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchCityData, setSearchCityData] = useState<any>({});
  const [hourlyForcast, setHourlyForcast] = useState<{}>({});
  const [isError, setIsError] = useState<boolean>(false);

  
  useEffect(() => {
    
    /* Check Cities */
    let cities = localStorage.getItem('cities');
    if(cities !== null) {
      setCities(JSON.parse(cities))
    }
  }, []);

  const FormatTemperature = (temp:number) => { return `${temp.toFixed(1)}°C` };

  const GetTheme = (weather:string) => {
    if(weather === "Clear") { return `theme-clear` }
    if(weather === "Snow") { return `theme-snow` }
    if(weather === "Rain") { return `theme-rain` }
    if(weather === "Smoke" || weather === "Haze" || weather === "Dust" || weather === "Sand" || weather === "Ash" || weather === "Squall" || weather === "Tornado") { return `theme-smoke` }
    if(weather === "Drizzle" || weather === "Mist" ||  weather === "Fog"  ) { return `theme-drizzle` }
    if(weather === "Clouds") { return `theme-clouds` }
    if(weather === "ThunderStorm") { return `theme-thunderstorm`}
    if(weather === "Sunny") { return `theme-sunny` }
    return "theme-dark";
  }

  
  return (
    <>
      <AppContext.Provider value={{ cities, setCities, searchCityData, setSearchCityData, setIsLoading, hourlyForcast, setHourlyForcast, FormatTemperature, setIsError }}>
        <div className={ Object.keys(searchCityData).length === 0 ? "theme-dark" : GetTheme(searchCityData.weather[0].main)}>
          <div className={`bg-custom-bgPr text-custom-textPr text-pr min-h-screen duration-500`}>
            <div className="container mx-auto p-5">
              <Header />
              {
                isLoading ? <Loader /> :
                  isError ? <Error /> :
                    Object.keys(searchCityData).length === 0 ? <Home /> :
                      <WeatherInfo />
              }
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </>

  );
}

export default App;