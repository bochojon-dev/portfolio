import React from "react";
import "../hero/Hero.css";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { IoLogoSass } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { ImHtmlFive } from "react-icons/im";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <div className="hero_title">
            <h2>Maqsadjon Maniyev</h2>
            <h2>Front-end developer</h2>
          </div>
          <div className="icons">
            <div className="icons_title">
              <h3>My technologies</h3>
            </div>
            <ul>
              <li>
                <FaReact />
              </li>
              <li>
                <TbBrandJavascript />
              </li>
              <li>
                <SiTypescript />
              </li>
              <li>
                <TbBrandCpp />
              </li>
              <li>
                <BsBootstrap />
              </li>
              <li>
                <ImHtmlFive />
              </li>
              <li>
                <IoLogoSass />
              </li>
              <li>
                <RiTailwindCssLine />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
