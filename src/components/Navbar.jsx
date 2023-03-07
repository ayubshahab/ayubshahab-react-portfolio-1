import React, {useRef, useState, useEffect } from 'react';
import styles, {layout} from '../style';
import { navLinks } from "../constants";
import {close, menu} from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const boxRef = useRef(null);
  const burgerRef = useRef(null);

  // to hide the mobile navbar if the user clicks outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        if(event.target != burgerRef.current){
          setToggle(false);
        }
      } else {
        setToggle(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [boxRef]);

  // automatically close navbar if screen size is not mobile anymore
   useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) { // adjust this threshold as needed
        setToggle(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className={`${layout.section} ${styles.flexCenter} fixed top-0 w-full z-[5]`}>
          <nav className = "bg-primary flex max-w-[1400px] w-full  px-[40px] md:px-[25px] xs:px-[10px] md:h-[50px] h-[60px] mt-[25px] justify-between items-center shadow-normal rounded-[25px] opacity-50 hover:opacity-100 ">
            {/* full name will be displayed on large screen sizes */}
            <h1 className = "xs:hidden flex font-bold text-[20px] text-accent">Ayub Shahab</h1>

            {/* will be shown on mobile screen sizes */}
            <h1 className ="xs:flex hidden font-bold text-[20px] text-accent">AS</h1>

            <ul className = "list-none items-center sm:hidden flex">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-black px-[10px] py-[5px] ${index === navLinks.length - 1 ? 'mr-[0px]' : 'mr-[10px]'} transition-all duration-100 hover:pb-[8px] hover:border-b-[1px] border-accent`}
                  >
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
            </ul>

            {/* burger icon */}
            <div className="sm:flex hidden items-center flex-1 justify-end">
                  <img 
                      ref={burgerRef}
                      src={toggle ? close : menu} 
                      alt="burger icon open and close" 
                      className = "w-[16px] h-[16px] object-contain cursor-pointer"
                      onClick={() => {
                        setToggle((prev) => !prev);
                      }}
                  />
            </div>

            {/* mobile menu */}
            <div
              className = {`${toggle ? 'flex' : 'hidden'} absolute md:right-[25px] right-[50px] top-[100px] min-w-[150px] min-h-[150px] br-radius-normal shadow-normal sidebar bg-primary`}
              ref={boxRef}
              >
              <ul className = "list-none items-center flex flex-col flex-1 gap-[5px] px-[5px] py-[5px]">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-black px-[10px] py-[5px]  transition-all duration-100 hover:pb-[10px] hover:border-b-[1px] border-accent`}
                    onClick ={() => setToggle((prev) => !prev)}
                  >
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
    </div>
  )
};

export default Navbar;