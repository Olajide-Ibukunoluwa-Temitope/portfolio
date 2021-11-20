import React from 'react';

import { Fade } from "react-awesome-reveal";

import TechStackItem from '../custom/TechStackItem';


import {techStackData} from '../../constants/data';

interface TechStackProps {
  theme: Record<string, any>;
}

const TechStack = ({ theme }: TechStackProps): JSX.Element => {

  return (
    <div id="techstack" className="py-12">
      <Fade triggerOnce direction="right" delay={200}>
        <div
          className="p-8 my-12 md:my-0 md:p-20 flex justify-center flex-col"
          style={{ backgroundColor: theme.techStackBgColor }}
        >
          <div className="w-full flex items-center flex-col mb-12">
            <p className="uppercase text-pink-400 text-sm"> my skills</p>
            <h2 className="text-5xl md:text-6xl font-semibold text-center">
              Technology Stack
            </h2>
          </div>
          <div className="pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {techStackData.map(({ img, title }, idx) => (
                <div className="flex justify-center align-items" key={idx}>
                  <TechStackItem
                    idx={idx}
                    techStackImg={img}
                    tectStackTitle={title}
                    theme={theme}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TechStack;
