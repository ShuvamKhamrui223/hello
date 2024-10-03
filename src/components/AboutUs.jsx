import { Link } from "react-router-dom";
import Button from "./common/Button";
import { aboutContent } from "../constants/homepage";
import aboutvideo from "../assets/about-vid.mp4";
const AboutUs = () => {
  return (
    <section className="about min-h-[65vh] flex items-center" id="about">
      <div className="container flex gap-8 flex-col items-center">
        <h1 className="heading text-[3rem] self-start text-black_primary dark:text-white pl-4 border-l-[1rem] border-black_secondary capitalize ">
          {aboutContent.sectionHeading}
        </h1>

        <div className="row flex items-center flex-wrap gap-12">
          <div className="video flex-1 basis-[41rem]">
            <video
              src={aboutvideo}
              className="w-full"
              loop
              muted
              autoPlay
            ></video>
          </div>

          <div className="content space-y-8 flex-1 basis-[41rem]">
            <h3 className="text-[3rem] text-black_primary dark:text-white/80 capitalize">
              {aboutContent.heading}
            </h3>
            <p className="text-2xl text-black_secondary text-balance">
              {aboutContent.desc}
            </p>

            <Button labelText="read more" />
          </div>
        </div>

        <div className="box-container grid auto-cols-[16rem] sm:grid-cols-2 gap-8 grid-flow-row md:grid-flow-col">
          {aboutContent?.stats?.map((stat) => (
            <div
              className="box text-center bg-black_primary dark:bg-black py-12 px-8"
              key={stat.statFor}
            >
              <h3 className="text-[4rem] font-semibold text-white capitalize">
                {stat.stat}+
              </h3>
              <p className="text-[1.5rem] text-black_secondary">
                {stat.statFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
