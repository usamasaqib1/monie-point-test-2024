import { useEffect } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdGraphicEq } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import LaptopHero from "../../assets/LaptopHero.jpg";
import WOW from "wow.js";
import "animate.css";

const Hero = () => {
  useEffect(() => {
    new WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);
  return (
    <div className="text-8xl flex flex-col max-w-full mx-auto h-screen pt-28">
      <div className="grid grid-cols-3">
        <div className="flex col-span-2">
          <div className="flex flex-col">
            <div className="flex">
              <span>&emsp;</span>
              <button className="rounded-full p-4 bg-primary-100 text-secondary p-8 w-fit h-fit wow animate__rotateInDownLeft">
                <AiFillThunderbolt size={36} />
              </button>
              <button className="rounded-full p-4 bg-secondary text-white p-7 relative right-6 w-fit h-fit wow animate__zoomIn">
                <SlGraph size={40} />
              </button>
              <span className="col-span-2 text-[7.6rem] pr-8">Analytics </span>
            </div>
            <div className="pt-10">
              that <span className="wow animate__flipInX text-primary-200">helps</span> you
            </div>
          </div>
        </div>
        <div className="relative">
          <div data-wow-delay="1s" className="absolute -top-7 -left-7 wow animate__rollIn">
            <button className="rounded-full p-4 bg-secondary text-white flex items-center justify-center w-fit h-fit p-5">
              <FaPlay className="text-white text-base" />
            </button>
          </div>
          <img className="rounded-3xl w-96 h-72 wow animate__rotateIn" src={LaptopHero} />
        </div>
      </div>
      <span className="flex justify-end w-full text-[7.6rem] gap-5">
        shape
        <button className="rounded-full p-4 bg-tertiary text-primary w-fit h-fit p-8 wow animate__flipInY">
          <MdGraphicEq className="text-black h-fit w-fit text-6xl" />
        </button>
        the future
      </span>
    </div>
  );
};

export default Hero;