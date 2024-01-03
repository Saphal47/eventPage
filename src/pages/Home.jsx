// Home.jsx
import React from 'react';
import { Link } from "react-router-dom";
import thumb from "../assets/event.webp";
import { Card } from "../components/Cards/index";
import people from "../assets/people.png"
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <div className="container grid lg:grid-cols-2 md:grid-cols-1 justify-items-start gap-20 xl:mb-0 sm:mb-8" id='home'>
      <section className="relative after:bg-arrow after:w-[100px] after:h-[100px] after:absolute after:top-[-30px] after:left-0  before:bg-arrow before:w-[100px] before:h-[100px] before:absolute before:bottom-0 before:right-0 before:rotate-180 p-8">
        <h1 className="2xl:text-7xl lg:text-[3.2rem] md:text-7xl sm:text-5xl text-4xl text-white-100 font-semibold xl:leading-tight lg:leading-tight md:leading-tight mb-2">
          Microsoft SDE Secrets:
          <br /> Tips by Anshima Choudhary  <br />
          for Landing Top Placements
        </h1>
        <span className="text-yellow mb-2 block 2xl:text-2xl-bold">
          Sunday, 22 October, 2023
          <br /> 12:00 pm to 1:00 pm IST <br />
        </span>
        <p className="text-gray text-base-bold max-w-md">
        <i className="bi bi-youtube fs-4"></i>{" "}YouTube
        </p>
        <Card />
      </section>


      <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
    <img src={thumb} className="w-full h-auto mb-8 rounded-lg shadow-md" alt="Event Thumbnail" />
  
  <div className="mb-4 text-gray-600">
    <span className="flex items-center justify-center lg:justify-start mt-2 space-x-6 font-medium">
      <Link 
        to="https://lu.ma/u/usr-Z3O3PbajvtSWrSA"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hosted by <p className='text-2xl text-black font-semibold'>SoarX</p>
      </Link>
        
      <img src={people} alt="People Icon"  />
      <Link
        to="https://twitter.com/LumaHQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-800 mr-4"
        >
        <i className="bi bi-twitter fs-4"></i>
      </Link>
      <Link
        to="https://www.instagram.com/luma_hq/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-800"
      >
        <i className="bi bi-instagram fs-4"></i>
      </Link>
    </span>
  </div>

  <ul className="list-none text-gray-600">
    <li className="mb-2 cursor-pointer hover:text-gray-800">Contact the Host</li>
    <li className="mb-2 cursor-pointer hover:text-gray-800">Report the Event</li>
  </ul>
</section>

    </div>
  );
};

export default Home;
