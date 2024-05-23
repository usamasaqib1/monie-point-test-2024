import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import WebDemo from "../../assets/web_demo.png"
import MobileDemo from "../../assets/mobile_demo.png"
import "./screenDemo.scss"
import WOW from "wow.js";
import "animate.css";
const ScreenDemo = () => {

  useEffect(() => {
    new WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);

  return (
    <div className="w-full bg-primary-50 rounded-4xl pt-24">
      <div className="flex gap-10 ml-[160px] relative">
        <div className="flex flex-col gap-10">
          <p className="font-medium text-6xl">Turning data into real</p>
          <p className="font-medium text-6xl">actions and ideas.</p>
          <div className="flex flex-col gap-4 pr-52">
            <div className="wow animate__fadeInUp flex justify-between items-center hover:drop-shadow-xl drop-shadow bg-white rounded-3xl px-6 py-2">
              <span className="text-lg">Instant Insights</span>
              <div className="rounded-full p-4 bg-primary-100 text-secondary !text-black">
                <AiOutlinePlus />
              </div>
            </div>

            <div className="wow animate__fadeInUp flex justify-between items-center hover:drop-shadow-xl drop-shadow bg-white rounded-3xl px-6 py-2">
              <span className="text-lg">AI Technology</span>
              <div className="rounded-full p-4 bg-primary-100 text-secondary !text-black">
                <AiOutlinePlus />
              </div>
            </div>

            <div className="wow animate__fadeInUp flex justify-between items-center hover:drop-shadow-xl drop-shadow bg-white rounded-3xl px-6 py-2">
              <span className="text-lg">Easy Integration</span>
              <div className="rounded-full p-4 bg-primary-100 text-secondary !text-black">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
        <img src={WebDemo} alt="" className="wow animate__slideInUp" data-wow-duration="2s"/>
        <img
          className="absolute left-[38%] top-[30%] z-50 wow animate__slideInUp"
          src={MobileDemo}
          alt=""
        />
      </div>
        <div className="-z-10 flex pl-40 pb-24 text-center text-secondary font-semibold text-[25vw] leading-[22vw] bg-[length:120px_120px] CustomRamos">
          <span data-wow-duration="2s" className="wow animate__fadeInBottomLeft" >Ramos</span>
        </div>
    </div>
  );
};

export default ScreenDemo;
