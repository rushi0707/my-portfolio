
import web from "../assets/g.jpg";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";

import starbucks from "../assets/javascript.png";

import threejs from "../assets/threejs.svg";

import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nit from "../assets/nit.png";
import ti from "../assets/ti.png";
import pu from "../assets/pu.png";


import pj3 from "../assets/college.png";
import pj1 from "../assets/campus.png";
import pj2 from "../assets/cri.png";

import ll from "../assets/ln.png";


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "HIRE ME",
    },
  ];
  
  const services = [
    
     {
      title: "LinkedIn",
      icon: ll,
      link: "https://www.linkedin.com/in/rushikeshkhiste07/",
    },
  
   
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [

    {
      title: "Texas Instruments",
      company_name: "Intern",
      icon: ti,
      iconBg: "#383E56",
      date: "Jan 2025 - July 2025",
     
    },

    {
      title: "National Institute of Technology Warangal (NITW)",
      company_name: "Master of Computer Application (MCA)",
      icon: nit,
      iconBg: "#383E56",
      date: "Augest 2022 - May 2025",
     
    },
    {

      title: "Savitribai Phule Pune University",
      company_name: " Bachelor of Computer Application (BCA)",
      icon: pu,
      iconBg: "#383E56",
      date: "Augest 2019 - July 2022",
     
    },
    
  ];
  const educations = [
    {
      institutionName: "React.js Developeer",
      iconBg: "383E56",
      icon: starbucks,
      startYear: "March 2020 - April 2021",
      endYear: "March 2020 - April 2021",
      degree:"MCA",
     
    },
    {
      institutionName: "React.js Developeer",
      iconBg: "383E56",
      icon: starbucks,
      startYear: "March 2020 - April 2021",
      endYear: "March 2020 - April 2021",
      degree:"MCA",
     
    },
    {
      institutionName: "React.js Developeer",
      iconBg: "383E56",
      icon: starbucks,
      startYear: "March 2020 - April 2021",
      endYear: "March 2020 - April 2021",
      degree:"MCA",
    },
    {
      institutionName: "React.js Developeer",
      iconBg: "383E56",
      icon: starbucks,
      startYear: "March 2020 - April 2021",
      endYear: "March 2020 - April 2021",
      degree:"MCA",
    },
  ];
  

  
  const projects = [
    {
      name: "CampusDealz",
      description:
        "Developed a marketplace for university students to buy and sell new or second-hand items within a campus ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "nodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pj1,
      source_code_link: "https://campus-dealz-frontend.onrender.com/",
    },
    
    {
      name: "College Info",
      description:
        "Built the College Info  Frontend, a vibrant and user-friendly web application that delivers seamless access to essential college information",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: pj3,
      source_code_link: "https://collegeinfo.onrender.com/",
    },

    {
      name: "Cricket Scoring System",
      description:
        "The Cricket Scoring System is a console-based application designed to manage and track the progress of a cricket match.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OOPS Concepts",
          color: "green-text-gradient",
        },
        
      ],
      image: pj2,
      source_code_link: "https://github.com/rushi0707/CricketGame",
    },
  ];
  
  export { services, technologies, experiences, projects,educations };