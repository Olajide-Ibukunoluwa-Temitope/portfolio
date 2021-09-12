import React from 'react';

import { Fade } from "react-awesome-reveal";

import ProjectItem from '../custom/ProjectItem';

import project_1 from '../../assets/images/project_1.png';
import project_2 from "../../assets/images/project_2.png";
import project_3 from "../../assets/images/project_3.png";


interface PortfolioProps {
  theme: Record<string, any>;
}

const Portfolio = ({ theme }: PortfolioProps): JSX.Element => {
  const projects = [
    {
      projectImg: project_1,
      projectLink: "https://hulpafrica.com",
      projectTitle: "Hulp",
      projectDesc:
        "Hulp is a social innovation and technology platform that connects people with opportunities to invest and participate in social development. Hulp helps to simplify investment for home-grown African NGOs using technology and data.",
    },
    {
      projectImg: project_2,
      projectLink: "https://ploutos-app.herokuapp.com",
      projectTitle: "MyXchange",
      projectDesc:
        "MyXchange is an open peer to peer exchange platform where users can buy and sell currency and decide their own exchange rate. Any registered User can browse through the trades dashboard, buy at a preferred rate or create their own transaction.",
    },
    {
      projectImg: project_3,
      projectLink: "https://live-crown-store.herokuapp.com",
      projectTitle: "Crown Store",
      projectDesc:
        "Crown Store is a simple e-commerce built on react and firebase to handle database operations and sign in authentication. It is an online marketplace that serves users with clothing items of their choice some of which include hats, sneakers, jackets and more.",
    },
  ];
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
          <div>
            <div className="w-full flex flex-wrap justify-center">
              {projects.map((project) => (
                <div className="w-full md:w-1/2 mb-12">
                  <ProjectItem
                    projectImg={project.projectImg}
                    projectLink={project.projectLink}
                    projectTitle={project.projectTitle}
                    projectDesc={project.projectDesc}
                    theme={theme}
                  />
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Portfolio;
