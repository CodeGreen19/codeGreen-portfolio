import React from "react";
// import myself from "../../assets/img/hoddie-man2.png";
import myself from "../../assets/img/shobuj.png";
import CodeSlide from "./CodeSlide";

function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/my-cv.pdf"; // Path to the CV file in the public folder
    link.download = "shobuj-dev.pdf"; // Desired filename for the downloaded file
    link.click();
  };

  const handleHireBtn = () => {
    window.location.href = "mailto:codegreen19s@gmail.com";
  };

  return (
    <div className="hero_container flex min-h-[95vh] flex-col-reverse items-center justify-start py-6 md:flex-row md:items-start md:justify-between">
      <div className="w-full p-2  md:w-[60%] md:p-0">
        <div className="about_box">
          <div className="effect_box  w-[130px] ">
            <h1 className="effect_text ls_1 mb-3 mt-3 h-[40px] text-[1.2rem] md:mt-0 md:text-[1.3rem]">
              Hi There,
            </h1>
          </div>
          <div className="effect_box  w-[95%] ">
            <p className="effect_text h-[120px]  text-[0.8rem] md:text-[1rem]">
              I'm{" "}
              <span className="tex-[1rem] md:text-[1.1rem] ">Shobuj Ahmed</span>
              , also known as
              <span className="text-[1rem] md:text-[1.1rem]"> CodeGreen</span>,
              a<span> MERN &nbsp;</span>
              developer with 1 year of experience. I'm passionate about
              programming and serious about my tech career. I live in Bangladesh
              and I'm looking for freelance work.
            </p>
          </div>
        </div>
        <div className="my-5 w-[70%] p-1">
          <CodeSlide />
        </div>
        <div className="hero_btn_box my-5">
          <button className="b_1 mr-1 p-2 px-3" onClick={handleDownload}>
            Download CV
          </button>
          <button className="b_1 p-2 px-3" onClick={handleHireBtn}>
            Hire Me
          </button>
        </div>
      </div>
      <div className=" b_1 w-full md:w-[40%]">
        <div className="pofile_img_box relative w-full bg-[#202020]">
          <div className=" profile_img_sub_box p-[50px] md:p-[70px]">
            <img
              src={myself}
              alt="hoddie_man"
              className="profile_img b_1 w-full "
            />
          </div>
          <div className="b_1 absolute left-[5%] right-[5%] top-[70%]  md:left-[-50px] md:right-[40%]">
            <ul className="effect_text hero_overlay_box flex h-[100px] flex-col items-start justify-evenly bg-[#181818]  text-[0.8rem]  md:text-[1rem]">
              <li>full-stack developer</li>
              <li>
                secialized in <span className="ls_1">MERN</span>
              </li>
              <li> experience lavel : intermediate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
