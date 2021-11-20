import javascript from '../assets/logos/javascript.svg';
import react from '../assets/logos/react.png';
import reactnative from '../assets/logos/react.png';
import tailwind from '../assets/logos/tailwindcss.svg';
import nextjs from '../assets/logos/Nextjs-logo.png';
import material from '../assets/logos/material-ui-logo.png';
import css_3 from '../assets/logos/css-3.svg';
import html_5 from '../assets/logos/html-5.svg';
import sass from "../assets/logos/sass.svg";
import figma from "../assets/logos/figma.svg";
import visual_studio_code from "../assets/logos/visual-studio-code.svg";
import github from "../assets/logos/github.svg";

import project_1 from '../assets/images/project_1.png';
import project_2 from "../assets/images/project_2.png";
import project_3 from "../assets/images/project_3.png";
import project_4 from "../assets/images/project_4.png";
import project_5 from "../assets/images/onboarding_screen.png";
import m_project_1 from '../assets/images/m_project_1.png'

export const webProjects = [
    {
      projectImg: project_1,
      projectLink: "https://hulpafrica.com",
      projectTitle: "Hulp",
      projectDesc:
        "Hulp is a social innovation and technology platform that connects people with opportunities to invest and participate in social development. Hulp helps to simplify investment for home-grown African NGOs using technology and data.",
      techStack: 'React JS, Typescript, TailwindCSS'
    },
    {
      projectImg: project_2,
      projectLink: "https://ploutos-app.herokuapp.com",
      projectTitle: "MyXchange",
      projectDesc:
        "MyXchange is an open peer to peer exchange platform where users can buy and sell currency and decide their own exchange rate. Any registered User can browse through the trades dashboard, buy at a preferred rate or create their own transaction.",
      techStack: 'React JS, Material UI'
    },
    {
      projectImg: project_3,
      projectLink: "https://live-crown-store.herokuapp.com",
      projectTitle: "Crown Store",
      projectDesc:
        "Crown Store is a simple e-commerce built on react and firebase to handle database operations and sign in authentication. It is an online marketplace that serves users with clothing items of their choice some of which include hats, sneakers, jackets and more.",
      techStack: 'React JS, SASS'
    },
    {
      projectImg: project_4,
      projectLink: "https://lightinthemarketplace.com",
      projectTitle: "Light In The Marketplace",
      projectDesc:
        "Light In The Marketplace is a platform established to provide premium grooming services for excellent-minded individuals called to leadership in politics, government, industry and business in Africa.",
      techStack: 'Wordpress'
    },
    {
        projectImg: project_5,
        projectLink: "https://onboarding-screen-by-temi.netlify.app",
        projectTitle: "Onboarding Screen",
        projectDesc:
          "An Onboarding screen for potential users or businesses to register onto a platform in order to have access to a dashbooard that would contain their account details and include the functionality to withdraw funds from their account.",
        techStack: 'React JS, CSS'
      },
  ];
  
export const mobileProjects = [
    {
      projectImg: m_project_1,
      projectLink: "#",
      projectTitle: "Cryptfolio",
      projectDesc:
        "Cryptfolio serves as a portfolio for all crypto currency owned by a user, it contains all the basic information about a user's currency at first glance and even more information on request from the user.",
      techStack: 'React-Native'
    },
];

export const techStackData = [
    {
      img: javascript,
      title: "javascript",
    },
    {
      img: react,
      title: "react js",
    },
    {
      img: css_3,
      title: "CSS 3",
    },
    {
      img: html_5,
      title: "HTML 5",
    },
    {
      img: sass,
      title: "sass",
    },
    {
      img: figma,
      title: "figma",
    },
    {
      img: visual_studio_code,
      title: "VS code",
    },
    {
      img: github,
      title: "github",
    },
    {
      img: reactnative,
      title: "React-Native",
    },
    {
      img: tailwind,
      title: "TailwindCSS",
    },
    {
      img: nextjs,
      title: "Next JS",
    },
    {
      img: material,
      title: "Material UI",
    },
];