import React from "react";
import { styles, layout } from "../../styles";
import { features } from "../../constants";
import Button from "../button";

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button className="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature) => {
          return <FeatureCard key={feature.id} {...feature} />;
        })}
      </div>
    </section>
  );
};

export default Business;

type FeatureCardProps = typeof features[0];

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] mb-6 last-of-type:mb-0 feature-card`}
    >
      <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img
          src={props.icon}
          alt={props.title}
          className="w-1/2 h-1/2 object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {props.title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-base leading-[24px] mb-1">
          {props.content}
        </p>
      </div>
    </div>
  );
};
