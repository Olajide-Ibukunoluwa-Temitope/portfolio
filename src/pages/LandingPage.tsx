import React, { useState } from 'react';
import HeroArea from '../components/view/HeroArea';
import AboutTemi from '../components/view/AboutTemi';
import Portfolio from '../components/view/Portfolio';
import TechStack from '../components/view/TechStack';
import ContactMe from '../components/view/ContactMe';
import NavBar from '../components/view/NavBar';
import {light, dark} from '../constants/theme';

const LandingPage: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const currentTheme = isLightMode ? light : dark;

  // toggle between light and dark mode
  const handleThemeToggle = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div
      style={{
        color: currentTheme.pryTextColor,
        backgroundColor: currentTheme.bodyBgColor,
      }}
    >
      <NavBar theme={currentTheme} toggleThemeMode={handleThemeToggle} />
      <HeroArea theme={currentTheme} />
      <AboutTemi theme={currentTheme} />
      <TechStack theme={currentTheme} />
      <Portfolio theme={currentTheme} />
      <ContactMe theme={currentTheme} />
    </div>
  );
}

export default LandingPage;
