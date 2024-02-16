import React, {useState } from "react";
import { motion } from "framer-motion";

import { Link} from "react-router-dom";




const Userticket = () => {
  
  const [loading,] = useState(false);
  

  


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ delay: 0.25, type: "spring" }}
        className="h-full"
      >
        <div className="flex justify-end items-center w-full h-[70px] px-[20px] py-10">
        <Link to='/'>
        <button className="bg-yellow-600 hover:bg-white hover:text-yellow-500 text-white font-lato font-body text-xl font-bold py-2 px-4 rounded my-[20px] w-[150px]">Go to home</button>
      </Link>
    
        </div>
        <div>
          
            <>
              <div className="text-center">
                <p className="text-yellow-600 font-body font-lato font-bold text-lg p-3">
                  Enter your email address to generate your ticket.
                </p>
              </div>
              <form
                onSubmit={""}
                className="shadow-lg lg:w-[600px] sm:w-[90%] p-5 mx-auto"
              >
                <div className="mb-[15px]">
                  <label className="text-yellow-600 font-body font-lato font-bold text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={""}
                    onChange={""}
                    className="border border-gray-300 py-2.5 px-2 w-full rounded-md focus:outline-none focus:border-yellow-600 my-[5px]"
                  />
                  
                </div>

                <div className="flex lg:flex-row flex-col items-center justify-center my-[30px]">
                  <button
                    className="bg-yellow-600 hover:bg-red-800 text-white font-lato font-body text-xl font-bold py-3 px-4 rounded w-[220px] lg:mr-5 mt-6"
                    onClick={""}
                  >
                    {loading ? "Generating Ticket..." : "Generate Ticket"}
                  </button>
                  <Link to="/ticket">
                    <button className="bg-yellow-600 hover:bg-red-800 text-white font-lato font-body text-xl font-bold py-3 px-4 rounded w-[200px] lg:ml-5 mt-6">
                      Buy Ticket
                    </button>
                  </Link>
                </div>

                {/* <div className="text-center">
                  <p className="text-yellow-600 font-body font-lato font-bold text-lg">
                    To stream Event in-d-city live,{" "}
                    <Link to="/live" className="underline">
                      click here
                    </Link>
                    .
                  </p>
                </div> */}
              </form>
            </>
          )
          
        </div>
        
      </motion.div>
    </>
  );
};

export default Userticket;
