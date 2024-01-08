import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const toastStyle = {
    style: {
      borderRadius: "4px",
      background: "#333",
      color: "white",
    },
  };

  const notify = (text, status) => {
    if (status === "success") {
      toast.success(text, toastStyle);
    } else {
      toast.error(text, toastStyle);
    }
  };
  // my email js configaration
  const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      notify("please fill all the fields ", "faild");
      return;
    }
    const templateParams = {
      from_name: name,
      to_name: "codeGreen",
      from_email: email,
      from_subject: "need someone help",
      message: message,
    };
    setName("");
    setEmail("");
    setMessage("");
    setSending(true);

    emailjs
      .send(emailServiceId, emailTemplateId, templateParams, emailPublicKey)
      .then(
        () => {
          notify("email send successfully", "success");
          setSending(false);
        },
        (err) => {
          notify(err, "failed to send email");
          setSending(false);
        },
      );
  };

  return (
    <div className=" min-h-[80vh] py-[30px] md:py-0">
      <h1 className="mb-5 ml-2 text-[1.1rem] md:ml-0 md:text-[1.3rem]">
        Contact Me
      </h1>
      <div className="flex flex-col items-start justify-start md:flex-row">
        <form
          className="contact_form flex w-full flex-col gap-2  p-3 md:w-[60%] lg:w-[40%]"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              className="text-[0.8rem] md:text-[1rem]"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="text-[0.8rem] md:text-[1rem]"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className="text-[0.8rem] md:text-[1rem]"
              name="text_area"
              cols="30"
              rows="10"
              placeholder="Message Here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <h1 className="flex justify-end">
            <button className="hover_effect_btn b_1 p-2 px-3 text-end text-[0.8rem] md:text-[1rem]">
              {sending ? "Sending.." : "Submit"}
            </button>
          </h1>
        </form>
        <div className="w-full p-3 md:w-[40%] lg:w-[60%]">
          <div className="w-[300px] overflow-hidden ">
            <ul className="contact_ul text-[0.8rem] md:text-[1rem]">
              <li>Email: codegreen19s@gmail.com</li>
              <li>
                WhatsApp:{" "}
                <span className="ls_1 text-[0.7rem] md:text-[0.9rem]">
                  01854921359
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Contact;
