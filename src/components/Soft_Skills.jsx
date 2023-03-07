import React, {useState, useEffect } from 'react';
import styles, {layout} from '../style';

const softSkills = () => (
  // px-[40px] md:px-[20px] justify-between items-center shadow-normal rounded-[25px]
  <section className = "min-h-[400px] flex items-center justify-center ">

    {/* this contains the picture/background */}
    <div className={`${layout.section} pt-[50px] pb-[100px] sm:pt-[0px] sm:pb-[100px] max-w-[1400px] relative w-full min-h-inherit w-full bg-primary`}>
        {/* soft skills container */}
        <div className="w-full flex flex-row smmiddle:flex-col justify-center items-top gap-[40px] md:gap-[20px]">
          
          {/* problem solving */}
          <div className="w-[33%] transform-margin ease-in duration-700 mr-[0px] smmiddle:w-auto ssmin:smmiddle:mr-[150px] flex flex-col items-left justify-top gap-[10px] px-[30px] py-[30px] br-rounded-normal shadow-normal h-auto mx-[10px] br-radius-normal">
            {/* for icon */}
            <span className="h-[54px] w-[54px] ss:h-[36px] ss:w-[36px] flex items-center justify-center bg-secondary rounded-full">
              <i className="fa-solid fa-lightbulb h-[20px] w-[20px] ss:text-[14px]  text-primary flex justify-center items-center"></i>
            </span>
            <h3 className="text-[18px] font-bold text-accent w-fit">Problem-solving</h3>
            <p className="text-[14px]">Skilled at analyzing and solving complex problems with a creative and logical approach.</p>
          </div>

          {/* continuous learning */}
          <div className="w-[33%] transform-margin ease-in duration-700 ss:mr-[0px] smmiddle:w-auto ssmin:smmiddle:ml-[150px] flex flex-col items-left justify-top gap-[10px] px-[30px] py-[30px] br-rounded-normal shadow-normal h-auto mx-[10px] br-radius-normal">
            {/* for icon */}
            <span className="h-[54px] w-[54px] ss:h-[36px] ss:w-[36px] flex items-center justify-center bg-secondary rounded-full">
              <i className="fa-solid fa-swatchbook h-[20px] w-[20px] ss:text-[14px]  text-primary flex justify-center items-center"></i>
            </span>
            <h3 className="text-[18px] font-bold text-accent w-fit">Continuous Learning</h3>
            <p className="text-[14px]">Committed to ongoing professional development and staying up-to-date with the latest industry trends and technologies.</p>
          </div>

          {/* attention to detail */}
          <div className="w-[33%] transform-margin ease-in duration-700 ss:mr-[0px] smmiddle:w-auto ssmin:smmiddle:mr-[150px] flex flex-col items-left justify-top gap-[10px] px-[30px] py-[30px] br-rounded-normal shadow-normal h-auto mx-[10px] br-radius-normal">
            {/* for icon */}
            <span className="h-[54px] w-[54px] ss:h-[36px] ss:w-[36px] flex items-center justify-center bg-secondary rounded-full">
              <i className="fa-solid fa-magnifying-glass h-[20px] w-[20px] ss:text-[14px] text-primary flex justify-center items-center"></i>
            </span>
            <h3 className="text-[18px] font-bold text-accent w-fit">Attention to detail</h3>
            <p className="text-[14px]">Highly meticulous and detail-oriented with a keen eye for accuracy and precision.</p>
          </div>

        </div>

      </div>
  </section>
)

export default softSkills;