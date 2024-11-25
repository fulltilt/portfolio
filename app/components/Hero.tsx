"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ druation: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-white">Hello, I&apos;m </span>
            Dave
            {/* <br />
            <TypeAnimation
              sequence={[
                "Dave",
                2000,
                "a Web Developer",
                2000,
                "a Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /> */}
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a web developer located in the East Bay here to help with
            your website needs.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-slate-400 hover:bg-slate-200">
              <a href="mailto:dave.doria@com">Hire Me</a>
            </button>
            {/* <button
              className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent text-white  mt-3 hover:bg-slate-800
            bg-gradient-to-br from-secondary-500 via-primary-500 to-pink-500"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button> */}
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ druation: 0.5 }}
          className="col-span-4 place-self-center ml-18 lg:mt-0"
        >
          <div
            className="bg-[#181818] rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
            style={{ marginLeft: "6rem" }}
          ></div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
