import { Header, WeatherInfo } from "./Components";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext<any>(null);

function App() {

  const [cities, setCities] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(true);

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

  return (
    <>
      <AppContext.Provider value={{ darkMode, setDarkMode, cities, setCities }}>
        <div className={`${darkMode ? "dark" : ''}`}>
          <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
            <div className="container mx-auto p-5">
              <Header />
              <WeatherInfo />
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </>

  );
}

export default App;