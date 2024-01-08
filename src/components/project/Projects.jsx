import React from "react";
import { projectsArr } from "../need/Need";

function Projects() {
  return (
    <div className="min-h-[73vh]">
      <h1 className="m-2 py-8 text-right text-[1.1rem]  md:text-[1.3rem]">
        Recent Projects
      </h1>
      <div className="projects_box left-0 flex w-full flex-wrap items-center justify-center gap-3 md:justify-end">
        {projectsArr.map((item) => (
          <div className="b_1 w-[300px]  flex-none bg-[#1d1d1d] sm:w-[300px]">
            <div className="h-[150px] w-full">
              <img className="h-full" src={item.img_url} alt="project_img" />
            </div>
            <h2 className="p-2 text-[0.8rem] md:text-[1rem]">{item.name}</h2>
            <div className="flex items-center justify-between pt-3 sm:pt-6">
              <button className="b_1 hover_effect_btn bg-[#292929] p-2 text-[#c8c8c8]">
                <a
                  href={item.github_url}
                  className="text-[0.8rem] md:text-[1rem] "
                >
                  github
                </a>
              </button>
              <button className="b_1 hover_effect_btn bg-[#292929] p-2 text-[#c8c8c8]">
                <a
                  href={item.live_url}
                  className="text-[0.8rem] md:text-[1rem]"
                >
                  live demo
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
