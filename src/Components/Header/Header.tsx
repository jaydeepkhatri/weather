import { BiSearch } from "react-icons/bi";
import { RiMenu3Line, RiDeleteBin6Line, RiCloseLine, RiSunLine, RiMoonLine } from "react-icons/ri";
import { useState, useContext } from "react";


import { ThemeContext } from "../../App";


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);  

  let cities: string[] = ["Mumbai", "Amsterdam", "Dubai", "Montreal"];

  const handleDarkMode = (theme:boolean) => {
    localStorage.setItem("darkMode", ""+theme);
    setDarkMode(theme);
  }


  return (
    <>
      <div className="header flex justify-center">
        <form className="flex flex-1 bg-gray-200 dark:bg-[#393939] rounded-2xl max-w-[460px]">
          <input type="text" placeholder="Search City" className="flex-1 rounded-2xl text-xl color-white px-5 py-2 bg-gray-200 dark:bg-[#393939] outline-none focus:outline-none" />
          <button className="px-3 py-2 text-xl"><BiSearch /></button>
        </form>
        <button className="rounded-2xl text-xl ml-2 py-3 px-4 hover:bg-gray-200 dark:hover:bg-[#393939] duration-100" onClick={() => { setToggleMenu(!toggleMenu) }}><RiMenu3Line /></button>
      </div>


      {/* Sidebar in Header */}
      <div className={`h-[100vh] fixed right-0 ${toggleMenu ? "w-[300px]" : "w-0"} top-0 duration-100 bg-gray-200 dark:bg-slate-800 z-10`}>
        <button className="ml-auto mt-2 mr-2 block text-xl" onClick={() => { setToggleMenu(!toggleMenu) }}><RiCloseLine /></button>
        <h2 className="text-4xl mt-12 px-8 flex justify-between">Weather.
          {
            darkMode ?
              <div className="" onClick={() => { handleDarkMode(false) }}>
                <RiMoonLine />
              </div>
              :
              <div className="" onClick={() => { handleDarkMode(true) }}>
                <RiSunLine />
              </div>
          }

        </h2>

        {
          cities.length > 0 ?
            <>
              <p className="mt-12 px-8 text-gray-500 text-sm">Recent Searches</p>
              <ul className="mt-0 px-0">
                {
                  cities.map((city, i) => {
                    return <li key={i} className="px-8 py-2 mt-2 mb-1 text-xl relative flex justify-between items-center hover:bg-slate-300 dark:hover:bg-[#393939] duration-100">{city} <RiDeleteBin6Line /></li>
                  })
                }
              </ul>

            </>
            :
            <>
              <div className="my-20">
                <p className="text-center text-xl px-8 mt-2 ">Oops, No Data!</p>
                <p className="text-center text-cus-gray px-8">Use the search(<BiSearch className="inline" />) to check the current weather.</p>
              </div>
            </>
        }
      </div>

      <div className={`${toggleMenu ? "block" : "hidden"} h-[100%] w-[100%] absolute inset-0  bg-black/50`} onClick={() => { setToggleMenu(!toggleMenu) }}></div>
    </>
  );
};

export default Header;