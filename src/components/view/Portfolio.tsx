import React from 'react';

import { Fade } from "react-awesome-reveal";

import ProjectItem from '../custom/ProjectItem';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {webProjects, mobileProjects} from '../../constants/data';


interface PortfolioProps {
  theme: Record<string, any>;
};

const Portfolio = ({ theme }: PortfolioProps): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  const handleSwitchTab = (tabId: number) => {
    setActiveTab(tabId)
  };

  const handleDisplayTabContent = (): Array<Record<string, string>> => {
    switch (activeTab) {
      case 0:
        return webProjects;
      case 1:
        return mobileProjects;
    
      default:
        return webProjects;
    }
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 813 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 813, min: 0 },
      items: 1
    }
  };

  return (
    <div id="portfolio" className="md:py-12 py-0">
      <div className="p-4 my-12 md:my-0 md:p-20 flex justify-center flex-col">
        <Fade triggerOnce direction="left">
          <div className="w-full flex items-center flex-col mb-12">
            <p className="uppercase text-pink-400 text-sm">portfolio</p>
            <h2 className="text-5xl md:text-6xl font-semibold text-center">
              Projects
            </h2>
          </div>
          <div className='flex w-full mb-12 justify-between'>
            <div className={`w-5/12 flex justify-center cursor-pointer mx-12 border-pink-400 ${activeTab === 0 && 'border-b-2'} `} onClick={() => handleSwitchTab(0)}>
              <p className='text-2xl mb-4 h-full'>Web</p>
            </div>
            <div className={`w-5/12 flex justify-center cursor-pointer mx-12 border-pink-400 ${activeTab === 1 && 'border-b-2'} `} onClick={() => handleSwitchTab(1)}>
              <p className='text-2xl mb-4 h-full'>Mobile</p>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-wrap justify-center">
              <Carousel
                ssr={false}
                swipeable={true}
                showDots={false}
                infinite={true}
                responsive={responsive}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                className='w-full h-auto'
                keyBoardControl={true}
              >
                {handleDisplayTabContent().map((project) => (
                  <div className="w-full mb-8">
                    <ProjectItem
                      projectImg={project.projectImg}
                      projectLink={project.projectLink}
                      projectTitle={project.projectTitle}
                      projectDesc={project.projectDesc}
                      techStack={project.techStack}
                      theme={theme}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Portfolio;
