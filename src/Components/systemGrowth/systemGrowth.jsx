import { useEffect } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import "./systemGrowth.scss";
import WOW from "wow.js";
import "animate.css";
import CountUp from "react-countup";

const SystemGrowth = () => {
  useEffect(() => {
    new WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-full gap-4 mx-auto">
      <div className="wow animate__fadeInLeft">
        <span className="font-semibold text-9xl">
          Maximize <span className="text-primary-300">efficiency</span>
        </span>
        <br />
        <span className="font-semibold text-9xl">with our intuitive</span>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <button className="wow animate__zoomIn rounded-full p-4 bg-primary-100 text-secondary z-10 flex items-center justify-center px-4 rounded-full py-14 h-fit p">
            <hr className="w-10 border-dotted bg-secondary" />
            <div className="p-4 rounded-xl bg-secondary">
              <TbActivityHeartbeat className="text-3xl text-white" />
            </div>
            <hr className="w-10 border-dotted bg-secondary" />
          </button>
          <button className="wow animate__zoomIn rounded-full p-4 bg-tertiary text-primary flex flex-col items-center justify-center gap-2 px-[2.7rem] h-fit py-10 -ml-6 rounded-full">
            <CountUp
              className="wow animate__fadeIn text-4xl font-semibold"
              end={45}
              suffix="%"
              enableScrollSpy={true}
            />
            <span className="text-sm font-normal">
              System grow <br /> faster
            </span>
          </button>
        </div>
        <span className="wow animate__zoomIn rounded-4xl whitespace-nowrap bg-tertiary text-9xl w-[28rem] overflow-hidden flex items-center h-fit py-4 pb-8 px-2">
          <div className="news-ticker">
            <ul>
              <li>analytics</li>
              <li>services</li>
            </ul>
          </div>
        </span>
      </div>
      <hr className="w-full my-16"></hr>
      <div className="flex justify-between">
        <p className="font-semibold">
          Explore traffic sources, page behavior, conversations and more to gain
          deep insight <br /> into your audience. With us, your business doesn't
          just adapt - it evolves
        </p>

        <div className="flex gap-4">
          <button className="rounded-full p-4 bg-primary-100 text-secondary px-8 !text-primary rounded-xl">
            Request a demo
          </button>
          <button className="rounded-full p-4 bg-secondary text-white px-12 rounded-xl">
            Start for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemGrowth;
