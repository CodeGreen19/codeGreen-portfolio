import React from "react";
import twitter from "../../assets/socialSvg/twitter.svg";
import github from "../../assets/socialSvg/github.svg";
import instagram from "../../assets/socialSvg/instagram.svg";
import linkedin from "../../assets/socialSvg/linkedin.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <div className="main_footer z-20  flex h-[19vh] w-full flex-col items-end justify-end bg-transparent py-3 text-white md:mb-0">
      <ul className="social_icons bb_1 flex w-full items-center justify-end gap-3 pb-5 pr-[6px] sm:gap-5  md:pr-0 ">
        <li>
          <a href="https://github.com/CodeGreen19">
            <img src={github} className="w-[22px] md:w-[29px]" alt="youtube" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hmnajmul24?igshid=YTQwZjQ0NmI0OA%3D%3D">
            <img
              src={instagram}
              className=" w-[22px] md:w-[28px]"
              alt="instagram"
            />
          </a>
        </li>

        <li>
          <a href="https://web.facebook.com/the.earn.way?mibextid=ZbWKwL&_rdc=1&_rdr">
            <img
              src={twitter}
              className=" w-[21px] md:w-[33px]"
              alt="facebook"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/code-green-25a2872a8/">
            <img
              src={linkedin}
              className="w-[21px] md:w-[26px]"
              alt="linkedin"
            />
          </a>
        </li>
      </ul>
      <div className="footer_location mt-3 pr-[6px] text-right sm:self-start sm:text-left md:pr-0">
        <span>
          <LocationOnIcon />
          <span className="text-[0.8rem] md:text-[0.9rem]"> Bangladesh</span>
        </span>
        <br />
        <span className="text-[0.8rem] text-[#b8b8b8] ">
          <CopyrightIcon /> 2023, All Right Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
