import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col w-full h-full items-center justify-center ">
        {/* container */}
        <div className="grid grid-cols-2 w-full max-w-[1100px] gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
              About
            </p>
          </div>
        </div>
        <div className="grid w-full max-w-[1100px] gap-8 p-4 sm:grid-cols-2">
          <div>
            <p className="text-3xl sm:text-4xl font-bold sm:text-right ">
              Hi. I'm Sakti Sumant Das, nice to meet you. Please take a look
              around
            </p>
          </div>
          <div>
            <p className="text-justify">
              I am a aspiring front-end developer with a strong foundation in
              HTML, CSS, and JavaScript, and React. My goal is to apply my
              skills to build modern and accessible web applications, while
              continuously expanding my knowledge in Web Technology and grow
              professionally in this dynamic field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
