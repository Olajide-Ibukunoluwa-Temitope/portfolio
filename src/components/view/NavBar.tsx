import React, { MouseEvent, useState, useEffect } from "react";

import logo from "../../assets/logos/temi_logo.svg";
import menu_icon_dark from "../../assets/icons/menu_icon_dark.svg";
import menu_icon_light from "../../assets/icons/menu_icon_light.svg";
import cancel_dark from "../../assets/icons/clear_dark.svg";
import cancel_light from "../../assets/icons/clear_light.svg";
import sun_icon from '../../assets/icons/sun.svg';
import moon_icon from "../../assets/icons/moon.png";

interface NavbarProps {
  theme: Record<string, any>;
  toggleThemeMode: () => void ;
}

const NavBar = ({ theme, toggleThemeMode }: NavbarProps): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [openMenu, setOpenMenu] = useState(false);
  const [shadowMenu, setShadowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const windowTopPosition = 100;

  const themeModeIcon = theme.mode === 'light' ? moon_icon : sun_icon;
  const menuIcon = theme.mode === "light" ? menu_icon_light : menu_icon_dark;
  const cancelIcon = theme.mode === "light" ? cancel_light : cancel_dark;

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setActiveLink(event.currentTarget.innerText);
    setOpenMenu(false);
  };

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.document.documentElement.scrollTop; // or use document.documentElement.scrollTop;
      if (currentPosition > windowTopPosition) {
        // downscroll code
        setShadowMenu(true);
      } else {
        // upscroll code
        setShadowMenu(false);
      }
      setScrollPosition(currentPosition <= 0 ? 0 : currentPosition);
    };
    // onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);
  return (
    <div>
      <nav
        id="navbar"
        className={`${
          shadowMenu ? "md:shadow-lg" : "md:shadow-none md:bg-transparent"
        } shadow-lg ${
          theme.mode === "light" ? "white-bg" : "dark-bg"
        } fixed z-40 w-screen header`}
        // style={{ backgroundColor: `${shadowMenu ? theme.bodyBgColor : ""}` }}
      >
        <div className="flex items-center w-full px-4 md:px-20 py-6 justify-between">
          <div className="text-4xl">
            <a href="#home" onClick={handleLinkClick}>
              <img src={logo} alt="logo" id="temi-logo" />
            </a>
          </div>
          <div className="hidden md:flex md:items-center text-lg font-semibold">
            <a
              href="#about"
              className={`mx-4 hover:text-pink-500 ${
                activeLink === "About" && "text-pink-500"
              }`}
              onClick={handleLinkClick}
            >
              About
            </a>
            <a
              href="#techstack"
              className={`mx-4 hover:text-pink-500 ${
                activeLink === "Tech Stack" && "text-pink-500"
              }`}
              onClick={handleLinkClick}
            >
              Tech Stack
            </a>
            <a
              href="#portfolio"
              className={`mx-4 hover:text-pink-500 ${
                activeLink === "Portfolio" && "text-pink-500"
              }`}
              onClick={handleLinkClick}
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className={`mx-4 hover:text-pink-500 ${
                activeLink === "Contact" && "text-pink-500"
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </a>

            <div className="cursor-pointer" onClick={toggleThemeMode}>
              <img
                src={themeModeIcon}
                alt="theme-mode"
                id="theme-mode-icon"
                className="ml-2"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/196hjuEXLncgjWmnYFRJ79N6xtIeWd_sE/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full px-6 py-2 bg-pink-500 cursor-pointer">
                <p className="text-base text-white font-semibold">Resumè</p>
              </div>
            </a>
          </div>
          <div className="md:hidden mr-2 flex items-center">
            <div className="cursor-pointer mr-4" onClick={toggleThemeMode}>
              <img
                src={themeModeIcon}
                alt="theme-mode"
                id="theme-mode-icon"
                className="ml-2"
              />
            </div>
            <div onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? (
                <img
                  src={cancelIcon}
                  alt="clear"
                  className="transition duration-700 transform rotate-180"
                  style={{ height: "20px" }}
                />
              ) : (
                <img
                  src={menuIcon}
                  alt="menu_icon"
                  style={{ height: "15px" }}
                />
              )}
            </div>
          </div>
        </div>
        {/* start mobile navbar links */}
        <div
          className={`md:hidden ${
            openMenu ? "flex" : "hidden"
          }  flex-col justify-center items-center text-base font-semibold`}
        >
          <a
            href="#about"
            className={`my-4 hover:text-pink-500 ${
              activeLink === "About" && "text-pink-500"
            }`}
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#techstack"
            className={`my-4 hover:text-pink-500 ${
              activeLink === "Tech Stack" && "text-pink-500"
            }`}
            onClick={handleLinkClick}
          >
            Tech Stack
          </a>
          <a
            href="#portfolio"
            className={`my-4 hover:text-pink-500 ${
              activeLink === "Portfolio" && "text-pink-500"
            }`}
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={`my-4 hover:text-pink-500 ${
              activeLink === "Contact" && "text-pink-500"
            }`}
            onClick={handleLinkClick}
          >
            Contact
          </a>
          <div className="pb-6">
            <a
              href="https://drive.google.com/file/d/196hjuEXLncgjWmnYFRJ79N6xtIeWd_sE/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full px-5 py-2 bg-pink-500 cursor-pointer">
                <p className="text-base text-white font-semibold">Resumè</p>
              </div>
            </a>
          </div>
        </div>
        {/* end mobile navbar links */}
      </nav>
      <nav></nav>
    </div>
  );
};

export default NavBar;
