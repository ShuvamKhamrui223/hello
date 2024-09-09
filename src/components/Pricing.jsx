import { pricingContent } from "../constants/homepage";
import Button from "./common/Button";

const Pricing = () => {
  return (
    <section
      className="min-h-[60vh] flex flex-col items-center gap-8 py-[7%]"
      id="pricing"
    >
      <h1 className="text-[3rem] self-start text-black_primary pl-4 border-l-[1rem] border-black_secondary capitalize">
        our pricing
      </h1>

      <div className="box-container w-full flex flex-col md:flex-row items-center justify-center gap-2">
        {/* basic plan */}
        {pricingContent?.pricingData?.map((plan) => (
          <div
            key={plan.planId}
            className={`${
              plan.planName == pricingContent.planToHighlight
                ? " h-[40rem] p-8 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-800"
                : " h-[35rem] rounded-2xl outline outline-2 outline-slate-800/25"
            } w-[85%] sm:basis-[30rem] p-8`}
          >
            <h3
              className={`text-[2rem]  ${
                plan.planName == pricingContent?.planToHighlight
                  ? "text-white/95"
                  : "text-black_secondary"
              } font-semibold capitalize`}
            >
              {plan.planName}
            </h3>
            <div
              className={`price pb-4 text-[4rem] ${
                plan.planName == pricingContent?.planToHighlight
                  ? "text-white"
                  : "text-black_primary"
              } font-bold`}
            >
              <span>$</span>
              {plan.planPrice}
              <span>/mo</span>
            </div>
            <ul className="flex flex-col gap-2 mb-8">
              {plan?.availableFeatures?.map((feature) => (
                <li
                  key={feature?.featureId}
                  className="w-full flex items-center gap-4"
                >
                  {feature?.isAvailable ? (
                    <p>✔</p>
                  ) : (
                    <p className="brightness-150">✖</p>
                  )}
                  <p
                    className={`capitalize ${
                      plan.planName == pricingContent?.planToHighlight
                        ? "text-white/95"
                        : "text-black_secondary"
                    } text-3xl md:text-2xl`}
                  >
                    {feature.feature}
                  </p>
                </li>
              ))}
            </ul>

            {/* the button below will change its text color and background-color depending planToHighlight property this is done to enhance visibility text on gradient background */}
            <Button
              className={`font-bold ${
                plan.planName == pricingContent?.planToHighlight
                  ? "text-white/95 bg-slate-100"
                  : "text-black_secondary"
              }`}
              gradient={
                plan.planName !== pricingContent?.planToHighlight ? true : false
              }
              labelText="choose plan"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
