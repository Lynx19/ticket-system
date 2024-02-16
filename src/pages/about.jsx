import React, {useEffect} from 'react';
// import { motion, useAnimation } from 'framer-motion';
import aboutImg from '../assets/about-img.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []); 
  
  return (
    <section id='about' className="lg:flex lg:flex-row flex-col items-center justify-between w-[90%] mx-auto py-[90px]">
      <div 
        className="lg:w-[40%] w-full mt-5 rounded-10"
        data-aos="fade-left" data-aos-duration="1000"
      >
        <img 
          src={ aboutImg }
          alt='about-xmas'
          className="rounded-10 mx-auto w-full object-cover"
        />
      </div>
      <div 
        className="w-full lg:w-[50%]"
        data-aos="fade-right" data-aos-duration="1000"
      > 
        <h2 className="text-yellow-600 font-bold font-body font-mont text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 mb-6 mt-6 md:mb-8">About the event</h2>
        <p className="text-yellow-600 font-body font-lato text-base md:text-md lg:text-lg xl:text-xl leading-6 md:leading-7 lg:leading-8 xl:leading-9">
          Experience the magic of the holiday season at "Christmas-in-D-City," a festive extravaganza set to 
          unfold at the prestigious Transcorp Hilton on the 25th of December. Immerse yourself in the enchanting yuletide 
          atmosphere filled with joy, laughter, and heartwarming performances. This Christmas event promises an 
          unforgettable evening featuring top-notch comedians, including the hilarious Chuks D General, the witty 
          Josh2Funny, the ever-entertaining Nedu, the charismatic KennyBlaq and many more. Get ready to be captivated by their 
          rib-cracking performances, leaving you in stitches and spreading the cheer. "Christmas-in-D-City" is not just an 
          event; it's a celebration of love, laughter, and the true spirit of Christmas. Join us for an evening of merriment 
          and create lasting memories with family and friends.
        </p>
        <Link to="/view-ticket">
          <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-lato font-body text-xl font-bold py-3 px-4 rounded mt-[30px] w-[220px]">Generate Ticket</button>
        </Link>
      </div>
    </section>
  )
}

export default About