import { useEffect } from "react";
import { FaChartLine } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";

import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import CountUp from "react-countup";

import WOW from "wow.js";
import "animate.css";

const CustomerService = () => {
  
  useEffect(() => {
    new WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);

  return (
    <div className="rounded-2xl p-6 border border-gray-200 !bg-primary-50 w-full relative pb-0 px-0 hover:drop-shadow-xl">
      <div className="flex flex-col items-center w-full min-h-[35rem] h-full relative">
        <div className="flex relative w-full">
          <div className="wow animate__slideInLeft bg-white left-[4.4rem] absolute rounded-2xl flex flex-col gap-4 items-center drop-shadow-lg p-8 w-64 justify-center h-72">
            <span>Conversion rate</span>
            <div className="relative bg-tertiary font-medium text-5xl rounded-2xl p-4">
              <div className="absolute -top-4 -left-4 p-2 bg-white rounded-full drop-shadow border-[5px] border-primary-100 text-primary-700">
                <MdAutoGraph size={12} />
              </div>
              <CountUp start={0} end={23} suffix="%" enableScrollSpy={true}/>
            </div>
            <span className="text-primary-400">
              Percentage of
              <br /> website visitors
            </span>
          </div>
          <div className="wow animate__slideInRight absolute left-[17.9rem] top-10 whitespace-nowrap bg-white rounded-2xl flex flex-col gap-4 p-6 drop-shadow-lg justify-end w-64 h-72">
            <span className="text-2xl">
              $ <CountUp start={70} end={132} suffix="K" enableScrollSpy={true} className="text-4xl"/>
            </span>

            <div className="flex gap-0.5">
              <div className="h-1.5 rounded bg-emerald-500 flex-[2]"></div>
              <div className="h-1.5 rounded bg-tertiary flex-[1.9]"></div>
              <div className="h-1.5 rounded bg-emerald-500 flex-[2]"></div>
            </div>

            <div className="flex justify-between items-center gap-8">
              <div className="flex items-center gap-2">
              <img className="rounded-full w-10 h-10" src={profile1} />
                <span className="text-primary-300">Min. price</span>
              </div>
              <span className="font-semibold">1,200 $</span>
            </div>

            <div className="flex justify-between items-center gap-8">
              <div className="flex items-center gap-2">
              <img className="rounded-full w-10 h-10" src={profile2} />
                <span className="text-primary-300">Min. price</span>
              </div>
              <span className="font-semibold">2,320 $</span>
            </div>

            <hr />
            <div className="flex justify-between items-center gap-8">
              <span className="text-primary-300">Engagement rate</span>
              <span>47,84%</span>
            </div>
          </div>
        </div>
        <div
          className="flex justify-end flex-col h-full w-full bg-[length:60px_60px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e7e7e7 1px, transparent 1px), linear-gradient(to bottom, #e7e7e7 1px, transparent 1px)",
          }}
        >
          <div className="flex flex-col h-fit gap-6 items-center p-4 bg-primary-50 w-full rounded-b-2xl drop-shadow-2xl">
            <span className="text-2xl font-medium">
              Improved customer service
            </span>
            <p className="px-[6.7rem] text-center">
              Analytics helps optimize service processes by providing
              information on how to improve interactions with customers and
              increase their satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerService;
