import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useInView } from 'react-intersection-observer'

const Ticket = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-[90%] mx-auto py-[90px]">
      <h2 className="text-center text-yellow-600 font-bold font-mont font-body text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-12 xl:leading-14">
        Get Your Ticket To Stream The Show Live!
      </h2>
      <div className="mt-5 flex flex-row mx-auto justify-around flex-wrap">
        {/* <div
          className="bg-yellow-200 p-4 shadow-lg rounded w-[250px] text-center mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-red-600 font-medium text-base font-body font-lato md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14">
            Watch Live Only (Coming soon)
          </h3>
          <h1 className="text-center text-red-600 font-bold font-body font-lato text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 my-5">
            #1,500
          </h1>
          <Link to="/ticket">
            <button className="bg-red-600 hover:bg-red-800 text-white font-lato font-body text-xl font-bold py-2 px-4 rounded mt-[30px] w-[150px]">
              Buy Ticket
            </button>
          </Link>
        </div> */}
        <div
          className="bg-yellow-600 p-4 shadow-lg rounded w-[250px] text-center mt-8"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3 className="text-white font-medium text-base font-body font-lato md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14">
            Regular
          </h3>
          <h1 className="text-center text-white font-bold font-body font-lato text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 my-5">
            #7,000
          </h1>
          <Link to="/ticket">
            <button className="bg-white hover:bg-yellow-500 hover:text-white text-yellow-600 font-lato font-body text-xl font-bold py-2 px-4 rounded mt-[30px] w-[150px]">
              Buy Ticket
            </button>
          </Link>
        </div>

        <div
          className="bg-yellow-600 p-4 shadow-lg rounded w-[250px] text-center mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-white font-medium text-base font-body font-lato md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14">
            VIP
          </h3>
          <h1 className="text-center text-white font-bold font-body font-lato text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 my-5">
            #20k
          </h1>
          <Link to="/ticket">
            <button className="bg-white hover:bg-yellow-500 hover:text-white text-yellow-600 font-lato font-body text-xl font-bold py-2 px-4 rounded mt-[30px] w-[150px]">
              Buy Ticket
            </button>
          </Link>
        </div>

        <div
          className="bg-yellow-600 p-4 shadow-lg rounded w-[250px] text-center mt-8"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3 className="text-white font-medium text-base font-lato font-body md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14">
            Silver Table of 10
          </h3>
          <h1 className="text-center text-white font-bold font-lato font-body text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 my-5">
            #1M
          </h1>
          <Link to="/ticket">
            <button className="bg-white hover:bg-yellow-500 hover:text-white text-yellow-500 font-lato font-body text-xl font-bold py-2 px-4 rounded mt-[30px] w-[150px]">
              Buy Ticket
            </button>
          </Link>
        </div>

        <div
          className="bg-yellow-600 p-4 shadow-lg rounded w-[250px] text-center mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-white font-medium font-lato text-base font-body md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14">
            Gold Table of 10
          </h3>
          <h1 className="text-center text-white font-lato font-bold font-body text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 my-5">
            #2M
          </h1>
          <Link to="/ticket">
            <button className="bg-white hover:bg-yellow-500 hover:text-white font-lato text-yellow-500 font-body text-xl font-bold py-2 px-4 rounded mt-[30px] w-[150px]">
              Buy Ticket
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
