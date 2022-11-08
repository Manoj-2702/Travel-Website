import React from "react";
import Manojimage from "../assests/herobg.jpg";
// import ProfileImage from "../assets/heroImage.png"
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
// import { Link } from "react-scroll";
import {motion} from "framer-motion";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-red-200 via-black to-stone-500 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
           <h2 className="text-4xl sm:text-8xl font-signature2 font-bold px-3 items-center justify-center text-orange-500">
              M N M Holidays
          </h2>
          <p className="text-cyan-500 py-5 max-w-md px-4 font-signature3 text-2xl">
          Your Travel made Easy with MNM Holidays
          </p>
          <div>
            <motion.button
              to="about"
              whileHover={{scale:1.2}}
              whileTap={{scale:0.5}}
              smooth
              duration={500}
              className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-gray-500 cursor-pointer shadow-lg shadow-blue-500/75"
            >
              About-Us
              <span className="group-hover:rotate-90 duration-500">
                <HiOutlineArrowRightCircle size={25} className="ml-2" />
              </span>
            </motion.button>
          </div>
        </div>
        <div>
          <img
            src={Manojimage}
            alt="Manoj"
            className="rounded-3xl mx-auto w-2/3 h-full"
            // style={{ width: 375, height: 375 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
