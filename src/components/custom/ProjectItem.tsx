import React from 'react';

import open_in_new_pink from "../../assets/icons/open_in_new_pink.svg";

interface ProjectItemProps {
  projectImg: string;
  projectLink: string;
  projectTitle: string;
  projectDesc: string;
  theme: Record<string, any>;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  projectImg,
  projectLink,
  projectTitle,
  projectDesc,
  theme,
}) => {
  return (
    <div className="px-4 md:px-10">
      <a href={projectLink} target="_blank" rel="noreferrer">
        <div
          className="rounded-lg bg-no-repeat bg-cover border mb-8 bg-center flex items-center justify-center h-52 md:h-80"
          id="project"
          style={{
            backgroundImage: `url('${projectImg}')`,
          }}
        >
          <div
            className="bg-no-repeat bg-contain bg-center"
            id="open-link"
          ></div>
        </div>
      </a>
      <div className="text-2xl font-semibold flex items-center">
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <p className="mr-1">{projectTitle}</p>
          <span>
            <img
              src={open_in_new_pink}
              alt={projectTitle}
              className="open-link-mini mt-1"
            />
          </span>
        </a>
      </div>
      <p
        className={` ${
          theme.mode === "light" ? "light-text" : "dark-text"
        }`}
      >
        {projectDesc}
      </p>
    </div>
  );
};

export default ProjectItem;
