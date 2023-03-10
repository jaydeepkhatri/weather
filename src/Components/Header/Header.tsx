import { BiSearch } from "react-icons/bi";
import { RiMenu3Line, RiDeleteBin6Line, RiCloseLine } from "react-icons/ri";
import { useState, useContext, useRef } from "react";

import { AppContext } from "../../App";
import axios from "axios";


const Header = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const searchRef = useRef<HTMLInputElement>(null!);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [searchCityInput, setSearchCityInput] = useState<string>("");

  const { cities, setCities, setSearchCityData, setIsLoading, setHourlyForcast, setIsError } = useContext(AppContext);

  const handleNewCityInput = (ArgCity?: string) => {

    let city = searchCityInput

    //Get Input
    if (typeof ArgCity !== "undefined") {
      city = ArgCity;
      fetchApi(city);
      return false;
    }

    if ((city.length === 0) || city === '') {
      return false;
    }

    searchRef.current.value = "";

    //sanitize input
    city = city.trim();

    fetchApi(city);
  }

  //handle the search input
  const handleSearchCityInputChange = (cityCharacter: string) => {
    setSearchCityInput(cityCharacter);
  }

  //Remove City from Sidebar
  const removeCitySearchList = (cityIndex: number) => {
    let localStoreCities = JSON.parse(localStorage.getItem('cities') || '');
    localStoreCities.splice(cityIndex, 1);
    setCities(localStoreCities);
    localStorage.setItem("cities", JSON.stringify(localStoreCities))
  }


  // fetch
  const fetchApi = (city: string) => {
    setIsLoading(true);


    axios.all([
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`),
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    ])
      .then(axios.spread((obj1, obj2) => {
        setIsError(false);
        setSearchCityData(obj1.data);
        setIsLoading(false);
        setHourlyForcast(obj2.data);

        // add the city to localStorage
        if (localStorage["cities"]) {
          let localStoreCities = JSON.parse(localStorage.getItem('cities') || '');
          localStoreCities = [city].concat(localStoreCities);

          if (new Set(localStoreCities).size !== localStoreCities.length) {
            return false;
          }

          setCities(localStoreCities);
          localStorage.setItem("cities", JSON.stringify(localStoreCities))
        } else {
          setCities([city]);
          localStorage.setItem("cities", JSON.stringify([city]))
        }

      }))
      .catch(error => {
        setSearchCityData({});
        setHourlyForcast({});
        setIsLoading(false);
        setIsError(true);
      });
  }


  return (
    <>
      <div className="header flex justify-center">
        <form className="flex flex-1 bg-custom-bgSe rounded-2xl max-w-[400px]" onSubmit={(e) => { e.preventDefault(); handleNewCityInput(); }}>
          <input type="text" placeholder="Search City" list="cities-data" ref={searchRef} onInput={(e) => handleSearchCityInputChange((e.target as HTMLInputElement).value)} className="flex-1 rounded-2xl text-xl w-0 px-5 py-2 bg-custom-bgSe text-custom-textPr outline-none focus:outline-none" />
          <button className="px-3 py-2 text-xl" aria-label="Search Button" onClick={(e) => { e.preventDefault(); handleNewCityInput(); }}><BiSearch /></button>
        </form>
        <button className="rounded-2xl text-xl ml-2 py-3 px-4 bg-custom-bgSe duration-100" aria-label="Handle Open/Close of Sidebar" onClick={() => { setToggleMenu(!toggleMenu) }}><RiMenu3Line /></button>
      </div>


      {/* Sidebar in Header */}
      <div className={`h-[100vh] fixed right-0 ${toggleMenu ? "w-[300px]" : "w-0"} top-0 duration-100 bg-custom-bgSe z-10`}>
        <button className="ml-auto mt-2 mr-2 block text-xl" aria-label="Close Sidebar" onClick={() => { setToggleMenu(!toggleMenu) }}><RiCloseLine /></button>
        <h2 className="text-4xl mt-12 px-8">Weather.</h2>
        {
          /* Add Cities list (Obtained from LocalStorage) */
          cities.length > 0 ?
            <>
              <p className="mt-12 px-8 text-custom-textSe text-sm">Recent Searches</p>
              <ul className="mt-0 px-0">
                {
                  cities.map((city: string, i: number) => {
                    return <li key={i} className="px-8 py-2 mt-2 mb-1 text-xl hover:bg-custom-bgPr relative flex justify-between items-center duration-100"><span onClick={() => { handleNewCityInput(city) }}>{city}</span> <RiDeleteBin6Line onClick={() => removeCitySearchList(i)} /></li>
                  })
                }
              </ul>
            </>
            :
            <>
              <div className="my-20">
                <p className="text-center text-2xl px-8 mt-2 ">Oops, No Data!</p>
                <p className="text-center text-sm mt-1 px-8">Use the search(<BiSearch className="inline" />) to check the current weather.</p>
              </div>
            </>
        }
      </div>

      {/* Black cover when sidebar is active */}
      <div className={`${toggleMenu ? "block" : "hidden"} h-[100%] w-[100%] absolute inset-0  bg-black/50`} onClick={() => { setToggleMenu(!toggleMenu) }}></div>
    </>
  );
};

export default Header;