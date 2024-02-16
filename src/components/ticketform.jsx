import React, { useState, useEffect } from "react";

import Footer from "../pages/footer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";


const Ticketform = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  const [responseData] = useState(null);
  const [loading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/view-ticket");
  };
  const ticketTypes = [
    { label: "Select ticket type", value: "0" },
    { label: "Type1", value: "" },
    { label: "Type2", value: "" },
    { label: "Type3", value: "" },
    { label: "Type4", value: "" },
    { label: "Type5", value: "" },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ delay: 0.25, type: "spring" }}
    >
       <div className="flex justify-end items-center w-full h-[70px] px-[20px] py-10">
        <Link to='/'>
        <button className="bg-yellow-600 hover:bg-white hover:text-yellow-500 text-white font-lato font-body text-xl font-bold py-2 px-4 rounded my-[20px] w-[150px]">Go to home</button>
      </Link>
    
        </div>
      <section className="w-full py-[30px] mx-auto">
        <div
          className="w-full lg:w-[700px] mt-[50px] mx-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <form onSubmit={""} className="shadow-lg w-full p-5">
            <div className="mb-[15px]">
              <label className="text-yellow-600 font-body font-lato font-bold text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                FIRST NAME
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={""}
                onChange={""}
                className="border border-gray-300 py-2.5 px-2 w-full rounded-md focus:outline-none focus:border-yellow-600 my-[5px]"
              />
              
            </div>

            <div className="mb-[15px]">
              <label className="text-yellow-600 font-body font-lato font-bold text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                LAST NAME
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={""}
                onChange={""}
                className="border border-gray-300 py-2.5 px-2 w-full rounded-md focus:outline-none focus:border-yellow-600 my-[5px]"
              />
            
            </div>

            <div className="mb-[15px]">
              <label className="text-yellow-600 font-body font-lato font-bold text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={""}
                onChange={""}
                className="border border-gray-300 py-2.5 px-2 w-full rounded-md focus:outline-none focus:border-yellow-600 my-[5px]"
              />
              
            </div>

            <div className="mb-[15px]">
              <label className="text-yellow-600 font-body font-lato font-bold text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={""}
                onChange={""}
                className="border border-gray-300 py-2.5 px-2 w-full rounded-md focus:outline-none focus:border-yellow-600 my-[5px]"
              />
              
            </div>

            <div className="mb-[15px]">
              <label className="text-yellow-600 font-body font-lato font-bold text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                TICKET TYPE
              </label>
              <select
                  className="border border-gray-300 py-3 px-2 w-full rounded-md focus:outline-none focus:border-yellow-600 my-[5px] bg-transparent"
                  onChange={""}
                >
                  {ticketTypes.map((option) => (
                    <option key={option.value} value={""}>
                      {option.label}
                    </option>
                  ))}
              
               
              </select>
              
            </div>

            <div className="mb-[15px]">
              <label className="text-yellow-600 font-body font-lato font-bold text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                NUMBER OF TICKETS(S)
              </label>
              <select
                className="border border-gray-300 py-3 px-2 w-full rounded-md focus:outline-none focus:border-yellow-600 my-[5px] bg-transparent"
                value={""}
                onChange={""}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-[15px]">
              <label className="text-yellow-600 font-body font-lato font-bold text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                AMOUNT IN NAIRA (#)
              </label>
              <input
                type="amount"
                placeholder="Amount in naira"
                value={""}
                readOnly
                onChange={""}
                className="border border-gray-300 py-2.5 px-2 w-full rounded-md focus:outline-none focus:border-yellow-600 my-[5px]"
              />
            </div>

            <div className="flex justify-around items-center my-5">
              
              <label className="text-lg">
                <input
                  type="radio"
                  value="transfer"
                  onChange={""}
                  className="mr-2"
                />
                Pay via Bank Transfer
              </label>
            </div>

        
            <h4 className="font-bold text-yellow-600 font-lato text-md text-center font-body">
              Please note: A 5% service charge will be applied to the total
              amount.
            </h4>

            <button
              className="bg-yellow-600 hover:bg-red-800 text-white font-lato font-body text-xl font-bold py-3 px-4 rounded mt-[50px] w-[200px] mx-auto block"
              type="submit"
              disabled={loading}
              onClick={""}
            >
              {loading ? "Loading..." : "Buy Ticket"}
            </button>

            <p className="font-bold text-yellow-600 font-lato text-md text-center font-body my-5">
              By clicking Buy Ticket, you agree to our
              <Link className="underline text-blue-600 ml-1">Terms of Use</Link>
            </p>
          </form>
        </div>
      </section>
      {responseData && isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 fixed inset-0"></div>
          <div className="bg-white rounded-lg p-5 z-10 w-[400px]">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 font-bold text-2xl"
              >
                &#10005;
              </button>
            </div>
            
          </div>
        </div>
      )}
      <Footer />
    </motion.div>
  );
};

export default Ticketform;
