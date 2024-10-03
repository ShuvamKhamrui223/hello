import earthIcon from "../../assets/icons/Earth.svg";
const Logo = () => {
  return (
    <>
      <div className="logo-container flex items-center select-none">
        <img
          src={earthIcon}
          alt="logo"
          height={40}
          width={40}
          className="opacity-70 dark:opacity-95 dark:invert"
        />
        <span className="text-3xl font-medium text-zinc-500 dark:text-zinc-50 tracking-widest uppercase">
          hello
        </span>
      </div>
    </>
  );
};

export default Logo;
