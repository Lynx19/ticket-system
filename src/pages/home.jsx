import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen object-cover">
      <img
        src={heroBg}
        alt="hero-background"
        className="w-full h-screen bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-yellow-600 bg-opacity-50 flex flex-col justify-center px-4 sm:px-8 lg:px-12 text-center">
        <h1 className="text-white font-bold font-body font-mont text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-12 md:leading-16 lg:leading-20 xl:leading-24">
          EVENT <span className="text-yellow-600"> IN-D</span>-CITY
        </h1>
        <p className="text-white font-medium text-base font-mont font-body md:text-3xl lg:text-4xl xl:text-5xl leading-6 md:leading-9 lg:leading-12 xl:leading-14 mt-[24px]">
          4nny Christmas
        </p>

        <p className="text-white font-medium font-mont font-body lg:text-6xl text-4xl leading-relaxed mt-[24px] ">
          Get your tickets {""}
          <Link to="/ticket" className="underline">
            here
          </Link>
        </p>

        <div className="mt-[30px]">
          <h2 className="text-yellow-700 font-medium text-base font-body font-lato md:text-2xl lg:text-3xl xl:text-4xl leading-6 md:leading-9 lg:leading-12 xl:leading-14">
            25th
          </h2>
          <p className="text-white font-medium text-base font-body font-lato md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14 mt-[5px]">
            December, 2023
          </p>
        </div>

        <div className="mt-[24px]">
          <h2 className="text-yellow-700 font-medium text-base font-body font-lato md:text-2xl lg:text-3xl xl:text-4xl leading-6 md:leading-9 lg:leading-12 xl:leading-14">
            Transcorp Hilton
          </h2>
          <p className="text-white font-medium text-base font-body font-lato md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14 mt-[5px]">
            Transcorp Hilton, Abuja, Nigeria.
          </p>
        </div>

        <div>
          <Link to="/ticket">
            <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-lato font-body text-xl font-bold py-3 px-4 rounded mt-[30px] w-[150px]">
              Buy Ticket
            </button>
          </Link>

          <Link to="#about">
            <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-lato font-body  font-bold py-3 px-4 rounded mt-[30px] w-[160px] ml-3">
              Learn more
            </button>
          </Link>

          {/* <div>
            <Link to="#about" smooth>
              <button className="bg-yellow-600  hover:bg-white hover:text-yellow-600 text-white font-lato font-body text-sm font-bold py-3 px-4 rounded mt-[30px] w-[160px]">
                Learn more
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
