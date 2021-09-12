import React from 'react';

interface TechStackItemProps {
  techStackImg: string;
  tectStackTitle: string;
  idx?: string | number;
  theme: Record<string, any>;
}

const TechStackItem: React.FC<TechStackItemProps> = ({
  techStackImg,
  tectStackTitle,
  theme
}) => {
  return (
    <div
      className="shadow-xl w-36 h-36 flex justify-center items-center flex-col rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
      style={{ backgroundColor: theme.bodyBgColor }}
    >
      <img src={techStackImg} alt={tectStackTitle} id="tech-stack-logo" />
      <p
        className={`capitalize mt-2 ${
          theme.mode === "light" ? "light-text" : "dark-text"
        }`}
      >
        {tectStackTitle}
      </p>
    </div>
  );
};

export default TechStackItem;
