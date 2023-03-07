import React, {useState, useEffect } from 'react';
import styles, {layout} from '../style';

const about = () => (
  // px-[40px] md:px-[20px] justify-between items-center shadow-normal rounded-[25px]
  <section id="about" className = "min-h-[400px] flex items-center justify-center">

    {/* this contains the picture/background */}
    <div className={`${layout.section} pt-[100px] pb-[50px] md:py-[50px] sm:py-[50px] max-w-[1400px] relative w-full min-h-inherit w-full`}>
        {/* hero section container */}
        <div className="flex flex-row md:flex-col-reverse w-full bg-primary md:gap-[30px] ">
          {/* left side */}
          <div className="flex flex-col w-[50%] md:w-full px-[30px] py-[30px] education-background br-radius-normal">
              <h1 className="text-primary text-[36px] ss:text-[26px]">Education</h1>
              <div className="flex flex-col w-full gap-[30px] md:gap-[20px] pl-[30px] border-l-4 border-primary">
                <h2 className="text-primary text-[26px] ss:text-[18px]">Bachelors in Computer Science</h2>
                <span className="text-black bg-primary w-fit px-[10px] py-[10px] br-radius-normal ss:text-[14px]">Aug 2019 - May 2023</span>
                <p className="text-primary text-[18px] ss:text-[16px]">University of Virginia, Charlottesville VA</p>
                <p className="text-primary text-[16px] ss:text-[14px]">Relevant Coursework: Data Structures and Algorithms; Program and Data Representation; Software Testing; Computer Architecture; Database Systems; Advanced Software Development</p>
              </div>
          </div>
          {/* right side */}
          <div className="flex flex-col w-[50%] md:w-full items-center justify-center gap-[40px] smmin:px-[50px] smmin:py-[30px] ssmin:px-[30px] px-[0px] py-[0px]">
            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="text-[36px] text-accent ss:text-[26px]">About Me</h1>
              <p className="text-[18px] ss:-[14px]">My introduction</p>
            </div>
            <p className="text-center xs:px-[10px]">Full Stack Developer with extensive knowledge and years of experience, working in both mobile and web-based technologies and UI/UX design, delivering quality work.</p>
            <div className=" flex flex-row w-full items-center justify-evenly">
              <div className="flex flex-col w-[33%] justify-center items-center">
                <span className="text-[40px] text-accent font-bold ss:text-[32px]">08+</span>
                <h3 className="w-min text-center ss:text-[14px]">Years Experience</h3>
                </div>
              <div className="flex flex-col w-[33%] justify-center items-center">
                <span className="text-[40px] text-accent font-bold ss:text-[32px]">11+</span>
                <h3 className="w-min text-center ss:text-[14px]">Projects Completed</h3></div>
              <div className="flex flex-col w-[33%] justify-center items-center">
                <span className="text-[40px] text-accent font-bold ss:text-[32px]">04+</span>
                <h3 className="w-min text-center ss:text-[14px]">Companies Worked</h3></div>
            </div>
          </div>
        </div>

      </div>
  </section>
)

export default about;