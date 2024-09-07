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
          className="opacity-70"
        />
        <span className="text-3xl font-medium text-zinc-500 tracking-widest uppercase">
          hello
        </span>
      </div>
    </>
  );
};

export default Logo;
