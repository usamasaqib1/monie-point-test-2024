import { useEffect } from "react";
import logoWhite from "../../assets/logo_white.png";
import WOW from "wow.js";
import "animate.css";

const GetStarted = () => {
  
  useEffect(() => {
    new WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="wow animate__zoomIn drop-shadow-[1px_25px_15px_rgb(194,7,7,0.3)] bg-secondary rounded-3xl p-6">
        <img src={logoWhite} className="w-14 h-14"></img>
      </div>

      <div text="Get" className="wow animate__flipInX flex text-[6rem] mr-5">
        Get Started
      </div>

      <div className="flex flex-col items-center text-primary-light mb-7">
        <div>Turn information into advantage! Start using </div>
        <div> Ramos today. Sign up for free trail.</div>
      </div>
      <div className="wow animate__flipInX flex gap-4 mb-20 mt-10">
        <button className="rounded-full p-4 bg-primary-100 text-secondary px-10 !text-black rounded-xl">
          Request a demo
        </button>

        <button className="rounded-full p-4 bg-secondary text-white px-12 rounded-xl">
          Start for free
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
