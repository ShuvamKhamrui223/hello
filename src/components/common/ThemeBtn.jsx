import darkModeIcon from "../../assets/icons/dark_mode.svg";
import lightModeIcon from "../../assets/icons/light_mode.svg";
import useTheme from "../../Hooks/useTheme";
const ThemeBtn = () => {
  const [currenttheme, setTheme] = useTheme();
  return (
    <img
      className="cursor-pointer dark:invert-0 invert size-8 select-none"
      src={currenttheme == "light" ? darkModeIcon : lightModeIcon}
      onClick={() => setTheme(currenttheme)}
      alt="theme icon"
    />
  );
};

export default ThemeBtn;
