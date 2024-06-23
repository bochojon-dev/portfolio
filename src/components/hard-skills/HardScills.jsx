import React from "react";
import "../hard-skills/HardScills.css";
import { PiFileHtmlFill } from "react-icons/pi";
import { BiSolidFileCss } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { PiFileCppBold } from "react-icons/pi";
import { TbBrandVite } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const HardScills = () => {
  return (
    <div className="container">
      <div className="scills">
        <PiFileHtmlFill />
        <BiSolidFileCss />
        <RiTailwindCssFill />
        <FaBootstrap />
        <TbBrandJavascript />
        <FaReact />
        <SiTypescript />
        <RiNextjsLine />
        <SiMui />
        <PiFileCppBold />
        <TbBrandVite />
        <SiRedux />
        <FaGithub />
      </div>
    </div>
  );
};

export default HardScills;
