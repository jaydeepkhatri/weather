import { Header, WeatherInfo, Loading } from "./Components";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext<any>(null);

function App() {

  const [cities, setCities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [searchCityData, setSearchCityData] = useState<{}>({});
  const [hourlyForcast, setHourlyForcast] = useState("");

  
  useEffect(() => {
    
    /* Check darkmode */
    let isdarkMode = localStorage.getItem('darkMode');
    if (isdarkMode !== null) {
      setDarkMode(() => isdarkMode === "true");
    };

    /* Check Cities */
    let cities = localStorage.getItem('cities');
    if(cities !== null) {
      setCities(JSON.parse(cities))
    }
  }, []);

  const FormatTemperature = (temp:number) => { return `${temp.toFixed(1)}°C` };

  return (
    <>
      <AppContext.Provider value={{ darkMode, setDarkMode, cities, setCities, searchCityData, setSearchCityData, setIsLoading, hourlyForcast, setHourlyForcast, FormatTemperature }}>
        <div className={`${darkMode ? "dark" : ''}`}>
          <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
            <div className="container mx-auto p-5">
              <Header />
              { isLoading ? <Loading />  : <WeatherInfo /> }
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </>

  );
}

export default App;