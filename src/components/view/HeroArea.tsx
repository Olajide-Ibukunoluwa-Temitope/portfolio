import React from 'react';

import { Fade } from "react-awesome-reveal";

import temiImg from "../../assets/images/temi_temp.png"
import arrowDownLight from "../../assets/icons/arrow_down_light.png";
import arrowDownDark from "../../assets/icons/arrow_down_dark.png";

interface HeroAreaProps {
  theme: Record<string, any>;
}

const HeroArea = ({ theme }: HeroAreaProps): JSX.Element => {
  const arrowIcon = theme.mode === "light" ? arrowDownLight : arrowDownDark;

  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-4 md:p-20 border-b mb-12"
      id="home"
      style={{
        backgroundImage: `url(${theme.heroAreaBg})`,
        borderColor: theme.heroAreaBorderColor,
      }}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mt-20 md:mt-0">
          <div className="w-full h-full">
            <Fade triggerOnce direction="bottom-left">
              <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
                Hi there, I'm Temi, a{" "}
                <span className="text-pink-500">Frontend Developer</span>. Nice
                to meet you.
              </h2>
            </Fade>
            <Fade triggerOnce direction="up">
              <p
                className={` mt-8 mr-12 ${
                  theme.mode === "light" ? "light-text" : "dark-text"
                } `}
              >
                Welcome, don't be shy, since you're here already, you might as
                well look around, mi casa es su casa. &#128513;
              </p>
              <div className="mt-4 md:mt-12">
                {" "}
                <a
                  href="#about"
                  className="rounded-full py-2 px-6 border border-blue-300 flex items-center"
                  style={{ width: "fit-content" }}
                >
                  Explore
                  <img
                    src={arrowIcon}
                    alt="explore"
                    id="arrow-down"
                    className="ml-2 animate-bounce"
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:block mt-10 mb-16 md:mb-0 md:mt-0">
          <Fade triggerOnce direction="right" className='w-full h-full flex justify-center'>
            <div
              className="bg-no-repeat bg-cover bg-center h-96 w-96 md:h-101 md:w-101 md:-mt-8"
              id="temi-img"
              style={{ backgroundImage: `url('${temiImg}')`}}
            ></div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
