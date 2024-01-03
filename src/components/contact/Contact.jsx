import React from "react";

function Contact() {
  return (
    <div className=" min-h-[80vh] py-[30px] md:py-0">
      <h1 className="mb-5 ml-2 text-[1.1rem] md:ml-0 md:text-[1.3rem]">
        Contact Me
      </h1>
      <div className="flex flex-col items-start justify-start md:flex-row">
        <form className="contact_form flex w-full flex-col gap-2  p-3 md:w-[60%] lg:w-[40%]">
          <div>
            <input
              type="text"
              className="text-[0.8rem] md:text-[1rem]"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <input
              className="text-[0.8rem] md:text-[1rem]"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="text-[0.8rem] md:text-[1rem]"
              name="text_area"
              cols="30"
              rows="10"
              placeholder="Message Here..."
            ></textarea>
          </div>
          <h1 className="contact_btn_box flex justify-end">
            <button className="b_1 p-2 px-3 text-end text-[0.8rem] md:text-[1rem]">
              Submit
            </button>
          </h1>
        </form>
        <div className="w-full p-3 md:w-[40%] lg:w-[60%]">
          <div className="w-[300px] overflow-hidden ">
            <ul className="contact_ul text-[0.8rem] md:text-[1rem]">
              <li>email: codegreen19s@gmail.com</li>
              <li>
                whatsApp:{" "}
                <span className="ls_1 text-[0.7rem] md:text-[0.9rem]">
                  01854921359
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
