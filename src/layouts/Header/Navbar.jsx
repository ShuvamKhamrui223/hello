import { useState } from "react";
import { navMenu } from "../../constants/common";
import Logo from "../../components/common/Logo";
import darkModeIcon from "../../assets/icons/dark_mode.svg";
import lightModeIcon from "../../assets/icons/light_mode.svg";
import Button from "../../components/common/Button";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const location = useLocation();
  return (
    <nav className="w-full flex items-center py-6 px-6 md:px-[5%] lg:px-[7%]">
      <div className="container w-full flex items-center justify-between">
        <Logo />

        <ul className="md:flex hidden gap-8 items-center">
          {navMenu?.map((menuitem) => (
            <li key={menuitem.menuId}>
              <NavLink
                href={menuitem.path}
                className={`text-linkColor_primary capitalize font-normal ${
                  location.pathname == menuitem.path && "font-bold"
                } text-2xl`}
              >
                {menuitem.menuLabel}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-6 items-center">
          <img
            className="cursor-pointer invert size-8 select-none"
            src={isLightTheme ? darkModeIcon : lightModeIcon}
            onClick={() => setIsLightTheme((prev) => !prev)}
            alt="theme icon"
          />
          <Button labelText="login" className={"hidden sm:block"} />
          <Button
            labelText="signup"
            className={"hidden sm:block"}
            gradient={true}
          />
        </div>
      </div>

      {/* optional rendering */}
      <div
        className="ml-6 w-[4rem] h-[4rem] md:hidden flex flex-col items-center justify-center gap-1 bg-maincolor/30 cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="h-[0.25rem] w-[85%] bg-maincolor"></span>
        <span className="h-[0.25rem] w-[80%] bg-maincolor"></span>
        <span className="h-[0.25rem] w-[85%] bg-maincolor"></span>
      </div>

      {/* mobile nav menu */}
      <aside
        className={`absolute top-0 ${
          isMenuOpen ? "right-0" : "-right-full"
        } transition-all duration-200  bg-black/90 min-h-screen w-2/3 flex items-center justify-center gap-8 flex-col`}
      >
        <a
          className="text-5xl bg-white p-4 text-maincolor cursor-pointer absolute top-0 right-5"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          x
        </a>
        <ul className="md:hidden flex flex-col gap-6 items-center">
          {navMenu?.map((menuitem) => (
            <li key={menuitem.menuId} className="select-none">
              <a
                href={menuitem.path}
                className="text-white uppercase font-thin text-2xl"
              >
                {menuitem.menuLabel}
              </a>
            </li>
          ))}
        </ul>
        <Button labelText="login" className={"invert"} />
        <Button labelText="signup" gradient={true} />
      </aside>
    </nav>
  );
};

export default Navbar;
