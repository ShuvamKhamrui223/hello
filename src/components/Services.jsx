import { servicesContent } from "../constants/homepage";
import ArrowRight from "../assets/icons/Arrow_right.svg";
const Services = () => {
  return (
    <section className="min-h-[65vh] flex items-center px-[4%] py-12 lg:px-[8%]">
      <div className="w-full conatiner flex flex-col items-center">
        <h2 className="text-5xl  font-bold capitalize mb-4    ">
          let your saas do the walking.
        </h2>
        <p className="text-2xl opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          mollitia aperiam alias possimus aliquam doloremque.
        </p>

        <div className="card-grid w-full mt-8 grid gap-8 auto-cols-[30rem] scroll-px-8 grid-flow-col overflow-x-auto">
          {servicesContent?.serviceCards?.map((card) => (
            <div className="card rounded-2xl p-6 bg-slate-100 hover:bg-slate-200 transition-colors duration-150">
              <div className="w-full h-3/4 overflow-hidden rounded-2xl">
                <img
                  src={card.thumbnailUrl}
                  alt="card thumbnail"
                  className="h-full w-full object-cover aspect-square hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="text_content relative p-6">
                <img
                  src={ArrowRight}
                  alt="right arrow"
                  className="absolute right-5 size-12 invert"
                />
                <h4 className="text-4xl capitalize font-semibold mb-2">
                  {card.cardTitle}
                </h4>

                <p className="text-2xl first-letter:uppercase">
                  {card.cardDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
