import logo1 from "../assets/icons/logo1.svg";
import logo2 from "../assets/icons/logo2.svg";
import logo3 from "../assets/icons/logo3.svg";
import logo4 from "../assets/icons/logo5.svg";
import logo5 from "../assets/icons/logo7.svg";
const Clients = () => {
  return (
    <section className="clients min-h-[25vh] flex items-center">
      <div className="container p-8 grid auto-cols-[20rem] grid-flow-col gap-8 md:gap-4 overflow-y-auto snap-x">
        <img
          src={logo1}
          alt=""
          className="grayscale dark:invert dark:grayscale-0 hover:grayscale snap-center"
        />
        <img
          src={logo2}
          alt=""
          className="grayscale  dark:invert dark:grayscale-0 hover:grayscale-0 snap-center"
        />
        <img
          src={logo3}
          alt=""
          className="grayscale  dark:invert dark:grayscale-0 hover:grayscale-0 snap-center"
        />
        <img
          src={logo4}
          alt=""
          className="grayscale  dark:invert dark:grayscale-0 hover:grayscale-0 snap-center"
        />
        <img
          src={logo5}
          alt=""
          className="grayscale  dark:invert dark:grayscale-0 hover:grayscale-0 snap-center"
        />
      </div>
    </section>
  );
};

export default Clients;
