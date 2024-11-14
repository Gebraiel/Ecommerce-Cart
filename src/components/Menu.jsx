import closeIcon from "../assets/icon-close.svg";
import burgerMenu from "../assets/icon-menu.svg";
import { useState } from "react";

function Menu() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mobile-menu md:hidden">
        <button onClick={() => setShow(true)}>
          <img src={burgerMenu} alt="burger-menu" />
        </button>
        <div
          className={`absolute  top-0 transition-colors z-50 ${
            show
              ? "left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)]"
              : "-left-full bg-[rgba(0,0,0,0.0)]"
          }  `}
        >
          <ul
            className={`font-Kumbh h-screen  w-60 p-5 bg-white text-black transition-transform ${
              show ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button className="mb-7" onClick={() => setShow(false)}>
              <img src={closeIcon} />
            </button>
            <li className="py-2">
              <a href="">Collections</a>
            </li>
            <li className="py-2">
              <a href="">Men</a>
            </li>
            <li className="py-2">
              <a href="">Women</a>
            </li>
            <li className="py-2">
              <a href="">About</a>
            </li>
            <li className="py-2">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="font-Kumbh flex">
          <li className="px-4 relative after:absolute after:bg-orange-500 after:w-0 hover:after:w-full after:transition-all after:h-[3px] after:left-0 after:-bottom-7 ">
            <a href="">Collections</a>
          </li>
          <li className="px-4 relative after:absolute after:bg-orange-500 after:w-0 hover:after:w-full after:transition-all after:h-[3px] after:left-0 after:-bottom-7 ">
            <a href="">Men</a>
          </li>
          <li className="px-4 relative after:absolute after:bg-orange-500 after:w-0 hover:after:w-full after:transition-all after:h-[3px] after:left-0 after:-bottom-7 ">
            <a href="">Women</a>
          </li>
          <li className="px-4 relative after:absolute after:bg-orange-500 after:w-0 hover:after:w-full after:transition-all after:h-[3px] after:left-0 after:-bottom-7 ">
            <a href="">About</a>
          </li>
          <li className="px-4 relative after:absolute after:bg-orange-500 after:w-0 hover:after:w-full after:transition-all after:h-[3px] after:left-0 after:-bottom-7 ">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Menu;
