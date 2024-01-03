import React, { Fragment } from "react";
import { skillArr } from "../need/Need";

function Skill() {
  return (
    <Fragment>
      <div className="min-h-[80vh] w-screen overflow-hidden md:pr-[20%]">
        <div className="my-[20px] ml-2 text-[1.3rem] md:ml-0">Expertise </div>
        <div className=" skill_main_box flex  w-full flex-col items-start justify-start md:flex-row md:justify-between">
          {skillArr.map((item) => (
            <div className="b_1 my-1 mr-6 w-full p-5 md:my-0">
              <h1 className=" my-2 pb-2 text-[1rem] md:text-[1.1rem]">
                {item.name}
              </h1>
              <ul className="w-full ">
                {item.skill.map((skill) => (
                  <li className="flex w-full items-center justify-between text-[0.8rem] md:text-[1rem]">
                    {skill.name} <span>{skill.aquire}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Skill;
