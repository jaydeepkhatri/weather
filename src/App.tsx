import { Header, WeatherInfo } from "./Components";
import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext<any>(null);

function App() {


  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {


    let isdarkMode = localStorage.getItem('darkMode');
    if (isdarkMode!.length > 0) {
      setDarkMode(() => isdarkMode === "true");
    };
  }, [])



  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={`${darkMode ? "dark" : ''}`}>
          <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
            <div className="container mx-auto p-5">
              <Header />
              <WeatherInfo />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>

  );
}

export default App;