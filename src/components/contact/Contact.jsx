import React, { useState } from "react";
import "../contact/Contact.css";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  let [show, setShow] = useState(false);
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_contents">
          <div className={`social_medias ${show ? "show" : ""} `}>
            <a href="https://web.telegram.org/a/#5283479810">
              <FaTelegram />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <SiGmail />
            </a>
            <a href="+998931901873">
              <FaPhoneVolume />
            </a>
            <a href="https://github.com/bochojon-dev">
              <FaGithub />
            </a>
          </div>
          <button onClick={() => setShow(!show)}>social medias</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
