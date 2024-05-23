import { useEffect } from "react";
import { SlGraph } from "react-icons/sl";
import { FaCircleNodes } from "react-icons/fa6"
import yellowGraph from "../../assets/yellow-graph.svg"
import CountUp from "react-countup";
import WOW from "wow.js";
import "animate.css";
const MonitorKeyIndicators = () => {

  useEffect(() => {
    new WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);

  return (
    <div className="rounded-2xl p-6 border border-gray-200 !bg-primary-50 relative pb-0 px-0 hover:drop-shadow-xl">
      <div className="relative h-full flex flex-col justify-end items-center gap-6 bg-[length:120px_120px]">
        <div className="wow animate__fadeInUp rounded-2xl p-6 bg-white border border-gray-200 absolute top-10 w-[55%] z-0 h-60"></div>

        <div data-wow-duration="1.5s" className="wow animate__fadeInUp rounded-2xl p-6 bg-white border border-gray-200 absolute top-16 w-[70%] z-10 h-60 py-3 px-3">
          <div className="relative flex items-center gap-3">
            <div className="bg-primary-50 rounded-lg flex items-center justify-center p-2">
              <FaCircleNodes />
            </div>
            <span className="text-sm font-semibold">Finance reports</span>
          </div>
        </div>

        <div data-wow-duration="2s"  className="wow animate__fadeInUp rounded-2xl p-6 bg-white border border-gray-200 absolute top-28 w-[80%] z-20 h-60 py-3 px-3 drop-shadow-lg">
          <div className="flex h-full relative justify-between">
            <div className="flex flex-col justify-between h-full relative">
              <div className="relative flex items-center gap-3">
                <div className="bg-primary-50 rounded-lg flex items-center justify-center p-2">
                  <SlGraph />
                </div>
                <span className="text-sm font-semibold">Insights</span>
              </div>
              <div className="flex flex-col gap-2 whitespace-nowrap bottom-0 absolute">
                <span className="text-primary-400 font-semibold">
                  Total profit
                </span>
                <span className="font-semibold text-xl">
                  $ <CountUp start={700} end={786} suffix="K" enableScrollSpy={true} className="text-4xl"/>
                </span>
                <button className="rounded-full p-4 bg-tertiary text-primary rounded-xl py-3 shadow-tertiary shadow mt-4">
                  Data Visualization
                </button>
              </div>
            </div>
            <img src={yellowGraph} />
          </div>
        </div>
        <div
          className="flex justify-end flex-col h-full w-full bg-[length:60px_60px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e7e7e7 1px, transparent 1px), linear-gradient(to bottom, #e7e7e7 1px, transparent 1px)",
          }}
        >
        <div className="flex flex-col gap-6 items-center bg-primary-50 rounded-b-2xl p-4 drop-shadow-2xl">
          <span className="text-2xl font-medium">
            Monitoring Key Indicators
          </span>
          <p className="px-[7.8rem] text-center">
            Analytics platforms allow businesses to track KPIs, an important
            tool for measuring success and achieving goals
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};
export default MonitorKeyIndicators;
