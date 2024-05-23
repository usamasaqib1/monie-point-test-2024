import { useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { TbHexagonLetterI } from "react-icons/tb";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import yellowGraph2 from "../../assets/yellow-graph-2.svg";
import CountUp from "react-countup";

import WOW from "wow.js";
import "animate.css";

const Statistics = () => {
  
  useEffect(() => {
    new WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);

  return (
    <div className="w-full bg-primary-50 rounded-4xl py-20 -mt-28">
      <div className="grid grid-cols-5 items-center mx-auto max-w-full mb-20">
        <div className="text-6xl font-medium col-span-3">
          <div>Your key to strategic</div>
          <div>success through analytics</div>
        </div>
        <div className="text-xl text-center col-span-2 wow animate__fadeInUp">
          Ready for exciting, instantaneous,
          <br /> all-accessible insights in real time?
        </div>
      </div>

      <div className="max-w-full mx-auto flex gap-4">
        <div className="flex flex-[3] flex-col gap-4">
          <div className="p-6 bg-white border border-gray-200 rounded-3xl pb-0 pr-0 pt-12 pl-12">
            <div className="flex gap-4">
              <div className="wow animate__fadeInLeft flex flex-col gap-14 justify-between " data-wow-offset="0" >
                <button
                  className={`rounded-full p-4 bg-tertiary text-primary w-fit h-fit px-4 py-2 shadow-tertiary shadow rounded-lg`}
                >
                  Setting up reports
                </button>
                <div className="flex flex-col gap-4 py-10">
                  <span className="font-medium text-2xl">
                    Fast and easy access to analytics
                  </span>
                  <span className="text-primary-500">
                    One platform is a comprehensive system of solutions that
                    will be the first step towards digitalization of your
                    business!
                  </span>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-gray-200 rounded-tr-none rounded-bl-none p-3 py-2">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">Sales statistic</span>
                  <div className="flex gap-2">
                    <div className="flex gap-2 items-center">
                      <div className="rounded-full p-4 bg-secondary text-white w-fit h-fit}">
                        <GoStack className="text-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-primary-400">Total profit</span>
                        <div className="font-semibold flex text-xl items-end gap-1">
                          $ <CountUp className="text-3xl w-20" start={400} end={453} enableScrollSpy={true} suffix="K" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary-50 rounded-2xl flex flex-col gap-2 flex-1 p-4">
                      <span>Visitors</span>

                      <div className="flex">
                        <div className="h-1 rounded-l bg-emerald-500 flex-[3]"></div>
                        <div className="h-1 rounded-r bg-primary-200 flex-[7]"></div>
                      </div>

                      <div className="font-semibold flex gap-1">
                        <CountUp className="text-3xl" end={234} start={200} enableScrollSpy={true} suffix="K"/>
                        <div className="text-emerald-500 flex items-start">
                          <FaArrowCircleUp size={14} />
                          <span className=" text-xs leading-3">+14%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="text-sm font-medium">
                      Visit Statistics
                    </span>

                    <div className="flex gap-2">
                      <img
                        className="min-w-0 flex-[2]"
                        src={yellowGraph2}
                        alt=""
                      />
                      <div className="bg-secondary text-white rounded-2xl p-4 self-end flex-1 mt-10">
                        <div className="flex justify-between items-center">
                          <span>Rate</span>
                          <TbHexagonLetterI className="rotate-90" />
                        </div>
                        &nbsp;
                        <CountUp start={0} end={37} prefix="+" suffix="%" enableScrollSpy={true} className="font-semibold text-2xl"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[2]">
          <div className="rounded-2xl p-6 bg-primary border border-primary-700 text-white flex flex-col justify-center gap-6 rounded-3xl p-10 px-20">
            <div className="flex gap-2 justify-center">
              <div className="wow animate__slideInRight rounded-2xl p-6 bg-primary border border-primary-700 text-white flex flex-col gap-2 rounded-3xl min-w-36 justify-between shadow-[-1px_-1px_3px_rgba(255,255,255,0.4)] bg-primary-900 border-0 border-primary-400 h-full">
                <div className="flex flex-col justify-center items-center gap-4">
                  <GoStack className="text-tertiary text-3xl" />

                  <div className="flex">
                    <img
                      className="rounded-full w-10 h-10 border-2 border-primary-900"
                      src={profile1}
                    />
                    <img
                      className="rounded-full w-10 h-10 -ml-2 border-primary-900 border-2"
                      src={profile2}
                    />
                  </div>
                </div>
              </div>
              <div className="wow animate__slideInLeft rounded-2xl p-6 bg-primary border border-primary-700 text-white flex flex-col gap-2 rounded-3xl min-w-36 justify-between shadow-[-1px_-1px_3px_rgba(255,255,255,0.4)] bg-primary-900 border-0 border-primary-400">
                <span className="text-sm">Transactions</span>
                <div className="text-emerald-500 flex self-end">
                  <FaArrowCircleUp size={14} />
                  <span className="text-xs leading-3">+14%</span>
                </div>
                <CountUp start={100} end={150} suffix="K" enableScrollSpy={true} className="font-semibold text-4xl"/>
              </div>
            </div>

            <span className="text-center text-xl">Widget Control</span>
            <span className="text-center text-primary-400 text-sm">
              Reports provide a comprehensive overview of important aspects of
              web analytics
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-[15%] mt-20 flex items-center gap-8">
        <div>
          <span className="text-xl font-medium text-nowrap">Up to</span>
          &nbsp;
          <CountUp className="text-8xl font-semibold" end={45} suffix="%" enableScrollSpy={true} />
        </div>
        <p className="wow animate__fadeInUp">
          Increase your analytics efficiency by up to 45%. Unique algorithms
          provide insights from data, reduce time for analysis and save time for
          making imporant, informed decisions
        </p>
      </div>
    </div>
  );
};

export default Statistics;
