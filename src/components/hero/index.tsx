import React from "react";
import { styles } from "../../styles";
import { discount, robot } from "../../assets";
import GetStarted from "../get.started";

const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.paddingY} flex md:flex-row flex-col`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 ${styles.paddingX}`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            <span>Discount For </span>
            <span className="text-white">1 Month </span>
            <span>Account</span>
          </p>
        </div>

        <div className={`flex flex-row justify-between items-center w-full`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-7xl text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span> <br />
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* Right Side */}
      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="Billing"
          className="w-full h-full relative z-[5]"
        />

        <div className="absolute top-0 z-0 w-2/5 h-[35%] pink__gradient" />
        <div className="absolute top-0 z-[1] w-4/5 h-4/5 rounded-full bottom-40 white__gradient" />
        <div className="absolute top-0 z-0 w-1/2 h-1/2 right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
