import { BiSearch } from "react-icons/bi";
import { RiMenu3Line, RiDeleteBin6Line, RiCloseLine, RiSunLine, RiMoonLine } from "react-icons/ri";
import { useState } from "react";



const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  let cities: string[] = ["Mumbai", "Amsterdam", "Dubai", "Montreal"];


  return (
    <>
      <div className="header flex justify-center">
        <form className="flex flex-1 bg-cus-gray rounded-2xl max-w-[460px]">
          <input type="text" placeholder="Search City" className="flex-1 rounded-2xl text-xl color-white px-5 py-2 bg-cus-gray outline-none focus:outline-none" />
          <button className="px-3 py-2 text-xl"><BiSearch /></button>
        </form>
        <button className="rounded-2xl text-xl ml-2 py-3 px-4 bg-cus-gray-hover duration-100" onClick={() => { setToggle(!toggle) }}><RiMenu3Line /></button>
      </div>


      {/* Sidebar in Header */}
      <div className={`h-[100vh] fixed right-0 ${toggle ? "w-[300px]" : "w-0"} top-0 duration-100 bg-slate-800 z-10`}>
        <button className="ml-auto mt-2 mr-2 block text-xl" onClick={() => { setToggle(!toggle) }}><RiCloseLine /></button>
        <h2 className="text-4xl mt-12 px-8 flex justify-between">Weather.
          {
            darkMode ?
              <div className="" onClick={() => { setDarkMode(false) }}>
                <RiMoonLine />
              </div>
              :
              <div className="" onClick={() => { setDarkMode(true) }}>
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
                    return <li key={i} className="px-8 py-2 mt-2 mb-1 text-xl relative flex justify-between items-center bg-cus-gray-hover duration-100">{city} <RiDeleteBin6Line /></li>
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

      <div className={`${toggle ? "block" : "hidden"} h-[100%] w-[100%] absolute inset-0  bg-black/50`} onClick={() => { setToggle(!toggle) }}></div>
    </>
  );
};

export default Header;