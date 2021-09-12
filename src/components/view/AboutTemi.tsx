import React from 'react';

import { Fade } from "react-awesome-reveal";

interface AboutTemiProps {
  theme: Record<string, any>;
}

const AboutTemi = ({ theme }: AboutTemiProps): JSX.Element => {
  return (
    <div id="about" className="md:py-12 py-4">
      <div
        className="p-4 md:p-20 my-12 md:my-0 w-full flex flex-wrap flex-col-reverse md:flex-row justify-between items-center "
        // id="about-temi-bg"
      >
        <div className="w-full md:w-1/2">
          <div className="w-full flex justify-center md:block mt-10 md:mt-0 md:pr-8">
            <Fade direction="left" triggerOnce className='w-full'>
              <div
                className="bg-no-repeat bg-cover bg-center rounded-lg h-96 mb-8"
                style={{ backgroundImage: `url('${theme.aboutTemiImg}')`, width: 'inherit' }}
                id="about-temi-img"
              ></div>
            </Fade>
          </div>
        </div>
        <Fade triggerOnce className="w-full md:w-1/2" direction="right" delay={200}>
          <div className="w-full">
            <div className="w-full mb-8">
              <p className="uppercase text-pink-500 text-sm">
                {" "}
                nice to meet you
              </p>
              <h2 className="text-5xl md:text-6xl font-semibold">
                Hey, I'm Temi
              </h2>
            </div>
            <div>
              <p
                className={`text-base md:text-lg text-left ${
                  theme.mode === "light" ? "light-text" : "dark-text"
                } `}
              >
                A self-driven Frontend Developer with about 2 years experience
                in leading development teams and building responsive web apps
                with modern technology. A tech enthusiast with a particular
                interest in using technology to solve everyday problems, able to
                work alone or within a team.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutTemi;
