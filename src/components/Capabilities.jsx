import React, {useState, useEffect } from 'react';
import {layout} from '../style';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const capabilities = () => (
  
  // px-[40px] md:px-[20px] justify-between items-center shadow-normal rounded-[25px]
  <section className = "min-h-[100px] flex items-center justify-center bg-secondary">

    {/* capabilities container */}
    {/* destop view */}
    <div className={`${layout.section} 
    pt-[50px] pb-[50px] sm:pt-[0px] sm:pb-[25px] max-w-[1400px] relative w-full min-h-inherit w-full  bg-secondary md:hidden`}>
      <div className="w-full flex flex-row justify-baseline items-center 
      px-[60px] gap-[40px]
      md:px-[30px] gap-[40px]
        ">
          <div className="flex flex-col justify-baseline items-left w-[25%] gap-[10px] h-full">
              <i className="fa-solid fa-laptop-code text-[34px] text-primary"></i>
              <h3 className="text-primary text-[18px] font-bold">Web-Apps</h3>
              <p className="text-primary text-[12px] ">Experienced in developing responsive and user-friendly web applications that cater to specific business needs and improve overall customer experience.</p>
          </div>
          <div className="flex flex-col justify-baseline items-left w-[25%] gap-[10px] h-full">
              <i className="fa-solid fa-mobile-screen text-[34px] text-primary"></i>
              <h3 className="text-primary text-[18px] font-bold">Mobile Apps</h3>
              <p className="text-primary text-[12px] ">Proficient in designing and developing high-quality mobile applications that provide seamless user experiences across different platforms and devices.</p>
          </div>
          <div className="flex flex-col justify-baseline items-left w-[25%] gap-[10px] h-full">
              <i className="fa-solid fa-paintbrush text-[34px] text-primary"></i>
              <h3 className="text-primary text-[18px] font-bold">UI/UX Design</h3>
              <p className="text-primary text-[12px] ">Skilled in creating visually appealing and intuitive interfaces that enhance the user experience and drive engagement.</p>
          </div>
          <div className="flex flex-col justify-baseline items-left w-[25%] gap-[10px] h-full">
              <i className="fa-solid fa-layer-group text-[34px] text-primary"></i>
              <h3 className="text-primary text-[18px] font-bold">Full-Stack Development</h3>
              <p className="text-primary text-[12px] ">Well-versed in building end-to-end web applications, from front-end interfaces to back-end systems, with a focus on performance, scalability, and security.</p>
          </div>
      </div>
    </div>

      {/* mobile and small screen view */}
      <Carousel autoPlay showThumbs={false} showArrows={false} showStatus={false} className={`${layout.section} w-full hidden md:flex flex-col py-[50px] `}>
        <div className="flex flex-col w-full justify-baseline items-left w-[25%] gap-[10px] h-full">
            <i className="fa-solid fa-laptop-code text-[34px] text-primary"></i>
            <h3 className="text-primary text-[18px] font-bold">Web-Apps</h3>
            <p className="text-primary text-[14px] ">Experienced in developing responsive and user-friendly web applications that cater to specific business needs and improve overall customer experience.</p>
        </div>

         <div className="flex flex-col w-full justify-baseline items-left w-[25%] gap-[10px] h-full">
              <i className="fa-solid fa-mobile-screen text-[34px] text-primary"></i>
              <h3 className="text-primary text-[18px] font-bold">Mobile Apps</h3>
              <p className="text-primary text-[14px] ">Proficient in designing and developing high-quality mobile applications that provide seamless user experiences across different platforms and devices.</p>
          </div>
          <div className="flex flex-col w-full justify-baseline items-left w-[25%] gap-[10px] h-full">
              <i className="fa-solid fa-paintbrush text-[34px] text-primary"></i>
              <h3 className="text-primary text-[18px] font-bold">UI/UX Design</h3>
              <p className="text-primary text-[14px] ">Skilled in creating visually appealing and intuitive interfaces that enhance the user experience and drive engagement.</p>
          </div>

          <div className="flex flex-col w-full justify-baseline items-left w-[25%] gap-[10px] h-full">
              <i className="fa-solid fa-layer-group text-[34px] text-primary"></i>
              <h3 className="text-primary text-[18px] font-bold">Full-Stack Development</h3>
              <p className="text-primary text-[14px] ">Well-versed in building end-to-end web applications, from front-end interfaces to back-end systems, with a focus on performance, scalability, and security.</p>
          </div>
      </Carousel>
  </section>
)

export default capabilities;