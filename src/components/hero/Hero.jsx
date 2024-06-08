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

// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <div className="hero_title">
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi, I'm Maqsadjon Maniyev. A passionate front-end developer and
              educator.
            </p>
          </div>

          {/* <div className="icons">
            <div className="icons_title">
              <h3>My hard scills</h3>
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
          </div> */}

          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            initialSlide={"expression"}
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <li>
                <FaReact />
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <TbBrandJavascript />
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <SiTypescript />
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <TbBrandCpp />
              </li>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
