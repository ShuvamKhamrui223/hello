import heroImg from "../assets/images/hero.png";
import Button from "../components/common/Button";
const Hero = () => {
  return (
    <section className="min-h-[65vh]  flex items-center px-[4%] py-12 lg:px-[8%]">
      <div className="container flex lg:flex-row flex-col-reverse items-center">
        <div className="text_container flex gap-8 flex-col text-center md:text-start">
          <h1 className="text-7xl font-bold md:text-8xl capitalize max-w-[15ch] leading-[1.2]">
            its's the <span className="text-transparent bg-gradient-to-r  from-red-500 to-yellow-400 bg-clip-text">bright</span> one, its's the right one.
          </h1>
          <p className="max-w-[40ch] md:max-w-[45ch] text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ratione doloremque quis corporis, velit, temporibus officiis atque.
          </p>

          <Button labelText="get started" className={"w-fit"} />
        </div>

        <div className="image_container">
          <img src={heroImg} width={500} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
