import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import upper_svg from "../../assets/svg/upper.svg";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

function Navbar({ scrollTo }) {
  const [navOption, setNavOption] = useState(false);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setNavOption(false);
  };
  return (
    <div className="nav_container flex w-full items-center justify-between py-3 pr-2 md:py-3 md:pr-0">
      <div className=" w-[155px] p-1 md:w-[200px]">
        <h1 className="effect_text md:ls_3 logo_text font-sofia text-[1.9rem] font-[600] text-[#ffffff] md:text-[2.3rem] md:font-[500]">
          Code<span className="text-[red]">G</span>reen
          <span className="ml-1 text-[red]">.</span>
        </h1>
      </div>
      <ul
        className="relative md:mr-2"
        onClick={() => !navOption && setNavOption(true)}
      >
        <li className=" my-[5px] h-[3px] w-[22px] rounded-lg  bg-[#e7e7e7] md:my-2 md:h-[3.5px] md:w-[34px]"></li>
        <li className=" my-[5px] h-[2px] w-[22px] rounded-lg bg-[#e7e7e7] md:my-2 md:h-[2px] md:w-[34px]"></li>
        <li className=" my-[5px] h-[3px] w-[22px] rounded-lg bg-[#e7e7e7] md:my-2 md:h-[3px] md:w-[34px]"></li>
        <div
          className={` nav_option_box ${
            navOption ? "add h-[90px] " : "remove "
          } absolute -right-2 top-0 z-10 h-[100px] w-[180px] overflow-hidden   `}
        >
          <li className="text-[0.9rem] before:z-20 md:text-[1rem]">
            <li onClick={() => handleClick(scrollTo.skillRef)}>Expertise</li>
            <li onClick={() => handleClick(scrollTo.projectRef)}>Projects</li>
            <li
              onClick={() => handleClick(scrollTo.contactRef)}
              className="h-[40px]"
            >
              Contact Me
            </li>
            <li className="absolute right-2  top-1 z-10 h-[30px] w-[30px] rounded-full bg-[black]">
              <CloseRoundedIcon
                onClick={() => setNavOption(false)}
                sx={{
                  color: "red",
                  font: "1.5rem",
                  width: "100%",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              />
            </li>
          </li>
        </div>
      </ul>
      <span
        onClick={() => handleClick(scrollTo.navRef)}
        className="fixed bottom-[30px] right-1 z-50 cursor-pointer md:right-[7%]"
      >
        <KeyboardDoubleArrowUpRoundedIcon sx={{ fontSize: "2rem" }} />
      </span>
    </div>
  );
}

export default Navbar;
