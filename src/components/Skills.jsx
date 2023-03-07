import React, {useState, useEffect } from 'react';
import styles, {layout} from '../style';
import {curlyBracket} from "../assets";

const skills = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1060);
  const [frontend, setFrontend] = useState(true);
  const [backend, setBackend] = useState(false);
  const [fullstack, setFullstack] = useState(false);

  function frontEndClick(){
    if (window.innerWidth > 1060) { // adjust this threshold as needed
      setBackend(false);
      setFullstack(false);
      if(backend != false || fullstack != false){
        setTimeout(() => {
          setFrontend((prev) => !prev);
        }, 250); // Delay of 0.5 seconds
      }
    }else{
      setFrontend((prev) => !prev);
    }
  }

  function backEndClick(){
    if (window.innerWidth > 1060) { // adjust this threshold as needed
      setFrontend(false);
      setFullstack(false);
      if(frontend != false || fullstack != false){
        setTimeout(() => {
          setBackend((prev) => !prev);
        }, 250); // Delay of 0.5 seconds
      }
    }else{
      setBackend((prev) => !prev);
    }
  }

  function fullStackClick(){
    if (window.innerWidth > 1060) { // adjust this threshold as needed
      setBackend(false);
      setFrontend(false);
      if(backend != false || frontend != false){
        setTimeout(() => {
          setFullstack((prev) => !prev);
        }, 250); // Delay of 0.5 seconds
      }
    }else{
      setFullstack((prev) => !prev);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 1060;
      setIsSmallScreen(isSmall);

      if (!isSmall) {
        setFrontend(true);
        setBackend(false);
        setFullstack(false);
      }
    };

    window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
  }, []);

  return(
    // px-[40px] md:px-[20px] justify-between items-center shadow-normal rounded-[25px]
    <section id="skills" className = "min-h-[400px] f-full flex items-center justify-center">

      {/* this contains the picture/background */}
      <div className={`${layout.section} 
      pt-[100px] pb-[100px] md:py-[50px] sm:py-[50px] 
      max-w-[1400px] relative w-full min-h-inherit w-full
      flex flex-col gap-[25px]
      `}>
          {/* hero section container */}
          <div className = "flex flex-col w-full pl-[50px] md:pl-[0px]">
            <h1 className="w-full text-left md:text-center text-[36px] text-accent ss:text-[26px]">Skills</h1>
            <p className="w-full text-left md:text-center text-[18px] ss:-[14px]">Technical Experience</p>
          </div>

          <div className="
          h-fit w-full
          flex-1 flex flex-row md:flex-col items-center gap-[10px] 
          px-[10px] py-[10px] 
          md:px-[0px]
          ">

            {/* left side becomes the main view in mobile */}
            <div className={`
            flex flex-col w-[50%] md:w-full h-auto
            px-[40px] py-[20px] gap-[20px] md:gap-[25px] md:px-[0px] md:py-[0px]`}>
              {/* frontend development */}
              <div className={`flex flex-col w-full `}>
                {/* font end toggle question */}
                <div className="flex flex-row cursor-pointer justify-between w-full items-center px-[10px] mdmin:px-[0px]"
                    onClick={frontEndClick}
                  >
                  {/* question title */}
                  <div className="flex flex-row gap-[10px] items-center w-fit">
                      <img className="h-[40px] w-[40px] sm:h-[30px] sm:w-[30px]" src = {curlyBracket} alt="My Happy SVG"/>
                      <div className="flex flex-col justify-center">
                        <h1 className="text-[16px] ssmin:text-[20px] mdmin:text-[24px] text-left w-full font-semibold">Frontend Development</h1>
                        <p className="text-[14px] text-left w-full font-normal">More than 7 years</p>
                      </div>
                  </div>
                  <i className={`fa-solid fa-chevron-right ${frontend ? 'md:rotate-90' : 'md:rotate-0'} text-[20px] sm:text-[16px] text-accent`}></i>
                </div>

                {/* front end answer mobile */}
                {/* container for all languages */}
                <div className={`smooth-dropdown ${frontend ? 'open-container' : 'closed-container'} flex flex-col w-full br-radius-normal shadow-normal mt-[15px] skills-gradient px-[45px] ss:px-[25px] justify-center items-center mdmin:hidden`}>
                   {/* row */}
                    <div className="flex flex-row justify-evenly flex-wrap ss:gap-[25px] gap-[50px] py-[45px] ss:py-[25px] items-center w-fit">
                      {/* html */}
                      <div className="flex flex-col gap-[5px] justify-center items-center">
                        <i className="devicon-html5-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                        <p className="text-primary text-[18px] ss:text-[14px] w-fit">HTML</p>
                      </div>
                      
                      {/* CSS */}
                      <div className="flex flex-col gap-[5px] justify-center items-center">
                        <i className="devicon-css3-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                        <p className="text-primary text-[18px] ss:text-[14px] w-fit">CSS</p>
                      </div>

                      {/* JS */}
                      <div className="flex flex-col gap-[5px] justify-center items-center">
                        <i className="fa-brands fa-js text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                        <p className="text-primary text-[18px] ss:text-[14px] w-fit">JS</p>
                      </div>
                      
                      {/* TS */}
                      <div className="flex flex-col gap-[5px] justify-center items-center">
                        <i className="devicon-typescript-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                        <p className="text-primary text-[18px] ss:text-[14px] w-fit">TS</p>
                      </div>
                      
                      {/* React */}
                      <div className="flex flex-col gap-[5px] justify-center items-center">
                        <i className="devicon-react-original text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                        <p className="text-primary text-[18px] ss:text-[14px] w-fit">TS</p>
                      </div>

                      {/* Angular */}
                      <div className="flex flex-col gap-[5px] justify-center items-center">
                        <i className="devicon-angularjs-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                        <p className="text-primary text-[18px] ss:text-[14px] w-fit">Angular</p>
                      </div>

                      {/* BootStrap */}
                      <div className="flex flex-col gap-[5px] justify-center items-center">
                        <i className="fa-brands fa-bootstrap text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                        <p className="text-primary text-[18px] ss:text-[14px] w-fit">Bootstrap</p>
                      </div>

                      {/* Tailwind CSS */}          
                      <div className="flex flex-col gap-[5px] justify-center items-center">
                        <i className="devicon-tailwindcss-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                        <p className="text-primary text-[18px] ss:text-[14px] w-fit">Tailwind</p>
                      </div>
                    </div>
                </div>  
              </div>  

              {/* backend development */}
              <div className={`flex flex-col w-full `}>
                {/* backend question */}
                <div className="flex flex-row cursor-pointer justify-between w-full items-center px-[10px] mdmin:px-[0px]"
                    onClick={backEndClick}
                  >
                  <div className="flex flex-row gap-[10px] items-center w-fit">
                      <i className="fa-solid fa-server h-[40px] w-[40px] text-[30px] sm:h-[30px] sm:w-[30px] sm:text-[20px] flex justify-center items-center text-accent"></i>
                      <div className="flex flex-col justify-center">
                        <h1 className="text-[16px] ssmin:text-[20px] mdmin:text-[24px] text-left w-full font-semibold">Backend Development</h1>
                        <p className="text-[14px] text-left w-full font-normal">More than 6 years</p>
                      </div>
                  </div>
                  <i className={`fa-solid fa-chevron-right ${backend ? 'md:rotate-90' : 'md:rotate-0'} text-[20px] sm:text-[16px] text-accent`}></i>
                </div>

                {/* backend answer mobile */}
                <div className={`smooth-dropdown ${backend ? 'open-container' : 'closed-container'} flex flex-col w-full br-radius-normal shadow-normal mt-[15px] skills-gradient px-[45px] ss:px-[25px] justify-center items-center mdmin:hidden`}>
                  {/* row */}
                  <div className="flex flex-row justify-center flex-wrap gap-[50px] ss:gap-[25px] py-[45px] ss:py-[25px] items-center w-fit">
                    {/* NodeJS */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-nodejs-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">NodeJS</p>
                    </div>
                    
                    {/* ExpressJS */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-express-original text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">ExpressJS</p>
                    </div>

                    {/* Ruby */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-ruby-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Ruby</p>
                    </div>
                    
                    {/* Python */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-python-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Python</p>
                    </div>
                    
                    {/* PHP */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-php-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">PHP</p>
                    </div>

                    {/* Java */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-java-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Java</p>
                    </div>

                    {/* C sharp */}          
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-csharp-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">C#</p>
                    </div>

                    {/* C++  */}          
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-cplusplus-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">C++</p>
                    </div>

                    {/* C  */}          
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-c-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">C</p>
                    </div>
                  </div>
                </div>
              </div>  

              {/* full stack development */}
              <div className={`flex flex-col w-full `}>
                {/* full stack question */}
                <div className="flex flex-row cursor-pointer justify-between w-full items-center px-[10px] mdmin:px-[0px]"
                    onClick={fullStackClick}
                  >
                  <div className="flex flex-row gap-[10px] items-center w-fit">
                      <i className="fa-solid fa-layer-group h-[40px] w-[40px] text-[30px] sm:h-[30px] sm:w-[30px] sm:text-[20px] flex justify-center items-center text-accent"></i>
                      <div className="flex flex-col justify-center">
                        <h1 className="text-[16px] ssmin:text-[20px] mdmin:text-[24px] text-left w-full font-semibold">Full Stack Development</h1>
                        <p className="text-[14px] text-left w-full font-normal">More than 6 years</p>
                      </div>
                  </div>
                  <i className={`fa-solid fa-chevron-right ${fullstack ? 'md:rotate-90' : 'md:rotate-0'} text-[20px] sm:text-[16px] text-accent`}></i>
                </div>

                {/* full stack answer mobile*/}
                <div className={`smooth-dropdown ${fullstack ? 'open-container' : 'closed-container'} flex flex-col w-full br-radius-normal shadow-normal mt-[15px] skills-gradient px-[45px] ss:px-[25px] justify-center items-center mdmin:hidden`}>
                  {/* row */}
                  <div className="flex flex-row justify-center flex-wrap gap-[50px] ss:gap-[25px] py-[54px] ss:py-[25px] items-center w-fit">
                    {/* Laravel*/}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-laravel-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Laravel</p>
                    </div>
                    
                    {/* Django */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-django-plain-wordmark text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Django</p>
                    </div>

                    {/* Linux */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-linux-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Unix/Linux</p>
                    </div>
                    
                    {/* MySQL */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-mysql-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">MySQL</p>
                    </div>
                    
                    {/* Android Studio */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-androidstudio-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Android Studio</p>
                    </div>

                    {/* AWS */}
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-amazonwebservices-original text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">AWS</p>
                    </div>

                    {/* Heroku */}          
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-heroku-original text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Heroku</p>
                    </div>

                    {/* GIT  */}          
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-github-original text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">GIT</p>
                    </div>

                    {/* Jira  */}          
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-jira-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Jira</p>
                    </div>
                    
                    {/* Figma  */}          
                    <div className="flex flex-col gap-[5px] justify-center items-center">
                      <i className="devicon-figma-plain text-primary h-[54px] w-[54px] text-[54px] ss:h-[36px] ss:w-[36px] ss:text-[36px] flex justify-center items-center"></i>
                      <p className="text-primary text-[18px] ss:text-[14px] w-fit">Jira</p>
                    </div>
                  </div>
                </div>
              </div>  
            </div>


            {/* right side | desktop view */}
            <div className="flex flex-col w-[50%] items-center justify-center md:hidden">
              
              {/* font end development desktop */}
              <div className={`smooth-dropdown ${frontend ? 'open-container' : 'closed-container'} ss:h-[36px] ss:w-[36px] ss:text-[36px] flex flex-col w-full br-radius-normal shadow-normal skills-gradient px-[45px] justify-center items-center gap-[15px]`}>

                {/* container for all languages */}
                <div className="flex flex-row justify-center flex-wrap gap-[50px] py-[45px] items-center w-fit">
                  {/* html */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-html5-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">HTML</p>
                  </div>
                  
                  {/* CSS */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-css3-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">CSS</p>
                  </div>

                  {/* JS */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="fa-brands fa-js text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">JS</p>
                  </div>
                  
                  {/* TS */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-typescript-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">TS</p>
                  </div>
                  
                  {/* React */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-react-original text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">TS</p>
                  </div>

                  {/* Angular */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-angularjs-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Angular</p>
                  </div>

                  {/* BootStrap */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="fa-brands fa-bootstrap text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Bootstrap</p>
                  </div>

                  {/* Tailwind CSS */}          
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-tailwindcss-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Tailwind</p>
                  </div>
                </div>
              </div>

              {/* back end development desktop*/}
              <div className={`smooth-dropdown ${backend ? 'open-container' : 'closed-container'} ss:h-[36px] ss:w-[36px] ss:text-[36px] flex flex-col w-full br-radius-normal shadow-normal skills-gradient px-[45px] justify-center items-center gap-[15px]`}>
                {/* row */}
                <div className="flex flex-row justify-center flex-wrap gap-[50px] py-[45px] items-center w-fit">
                  {/* NodeJS */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-nodejs-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">NodeJS</p>
                  </div>
                  
                  {/* ExpressJS */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-express-original text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">ExpressJS</p>
                  </div>

                  {/* Ruby */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-ruby-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Ruby</p>
                  </div>
                  
                  {/* Python */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-python-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Python</p>
                  </div>
                  
                  {/* PHP */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-php-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">PHP</p>
                  </div>

                   {/* Java */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-java-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Java</p>
                  </div>

                  {/* C sharp */}          
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-csharp-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">C#</p>
                  </div>

                  {/* C++  */}          
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-cplusplus-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">C++</p>
                  </div>

                  {/* C  */}          
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-c-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">C</p>
                  </div>
                </div>
              </div>

              {/* full stack development desktop*/}
              <div className={`smooth-dropdown ${fullstack ? 'open-container' : 'closed-container'} ss:h-[36px] ss:w-[36px] ss:text-[36px] flex flex-col w-full br-radius-normal shadow-normal skills-gradient px-[45px] justify-center items-center gap-[15px]`}>
                {/* row */}
                <div className="flex flex-row justify-center flex-wrap gap-[50px] py-[54px] items-center w-fit">
                  {/* Laravel*/}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-laravel-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Laravel</p>
                  </div>
                  
                  {/* Django */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-django-plain-wordmark text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Django</p>
                  </div>

                  {/* Linux */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-linux-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Unix/Linux</p>
                  </div>
                  
                  {/* MySQL */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-mysql-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">MySQL</p>
                  </div>
                  
                  {/* Android Studio */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-androidstudio-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Android Studio</p>
                  </div>

                  {/* AWS */}
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-amazonwebservices-original text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">AWS</p>
                  </div>

                  {/* Heroku */}          
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-heroku-original text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Heroku</p>
                  </div>

                  {/* GIT  */}          
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-github-original text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">GIT</p>
                  </div>

                  {/* Jira  */}          
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-jira-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Jira</p>
                  </div>
                  
                  {/* Figma  */}          
                  <div className="flex flex-col gap-[5px] justify-center items-center">
                    <i className="devicon-figma-plain text-primary h-[54px] w-[54px] text-[54px] flex justify-center items-center"></i>
                    <p className="text-primary text-[18px] w-fit">Jira</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
};

export default skills;