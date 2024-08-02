import React from "react";
import LightButton from "../assets/website/Light-mode.png";
import DarkButton from "../assets/website/Dark-mode.png"; // Assuming you have a DarkButton image

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")? localStorage.getItem("theme"):"light"// "light"
  );
  const element = document.documentElement;
  console.log(element);//end

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Light Mode Button"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
      />
      <img
        src={DarkButton}
        alt="Dark Mode Button"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
