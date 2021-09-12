import React from 'react';

import { Fade } from "react-awesome-reveal";

import mailLight from '../../assets/icons/mail_light.png';
import mailDark from "../../assets/icons/mail_dark.png";
import linkedin_mini from "../../assets/icons/linkedin_mini.svg";
import github_mini from "../../assets/icons/github_mini.svg";

interface ContactMeProps {
  theme: Record<string, any>;
}

const ContactMe = ({ theme }: ContactMeProps): JSX.Element => {
  const date = new Date();
  const mailIcon = theme.mode === "light" ? mailLight : mailDark;
  return (
    <div id="contact">
      <Fade triggerOnce direction="down" delay={200}>
        <div className="px-8 pt-8 md:px-20 md:mt-20 mt-12 md:mb-0 md:mt-0 flex justify-center flex-col">
          <div
            className="rounded-md  pt-16 pb-8 mb-12"
            style={{ backgroundColor: theme.contactMeBgColor }}
          >
            <div className="w-full flex items-center flex-col mb-12">
              <p className="uppercase text-pink-400 text-sm"> contact me</p>
              <h2 className="text-5xl md:text-6xl font-semibold text-center">
                Got a Project? Let's Talk!
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-28">
                {" "}
                <a
                  href="mailto:ibukunoluwa.jide@gmail.com"
                  className="rounded-full py-3 px-6 border border-blue-300 flex items-center"
                >
                  <img src={mailIcon} alt="mail" id="mail" className="mr-1" />
                  ibukunoluwa.jide@gmail.com
                </a>
              </div>
              <div className="flex mb-12">
                <a
                  href="https://www.linkedin.com/in/ibukunoluwa-olajide-85b601137/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin_mini}
                    alt="linkedin"
                    className="footer_icon mr-4"
                  />
                </a>
                <a
                  href="https://github.com/Olajide-Ibukunoluwa-Temitope"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={github_mini}
                    alt="github"
                    className="footer_icon mr-4"
                  />
                </a>
              </div>
              <div
                className={` mb-8 ${
                  theme.mode === "light" ? "light-text" : "dark-text"
                }`}
              >
                &#169; {date.getFullYear()} Olajide Ibukunoluwa Temitope
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ContactMe;
