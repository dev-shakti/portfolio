import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" id="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center  h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          SAKTI SUMANT DAS
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer.
        </h2>
        <p className="text-[#8892b0] py-5 max-w-[700px]">
          I'm an enthusiastic front-end developer with a passion for developing
          user-friendly websites. I stay up-to-date with the latest web tech and
          I'm eager to tackle new challenges to help your team succeed.
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1W2y3A7FAQkVvvIcsHEw68sMU6Rw3aRhf/view?usp=sharing"
            download
            target="_blank"
            className="text-white border-2 px-6 py-3 my-2 flex justify-center items-center hover:bg-pink-600 duration-300 hover:border-pink-600 w-[200px] font-medium"
          >
            Hire Me
            <span>
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
