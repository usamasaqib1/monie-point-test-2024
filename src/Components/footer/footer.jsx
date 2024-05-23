import { useEffect } from "react";
import { BsQrCode } from "react-icons/bs";
import WOW from "wow.js";
import "animate.css";

const Footer =()=>{
  
  useEffect(() => {
    new WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);

    return (
      <div className="flex flex-col gap-16 px-20 py-32 pb-10 bg-primary text-primary-50">
        <div className="flex items-center justify-between">
          <div className="flex gap-10 wow animate__fadeInUp">
            <a className="text-x cursor-pointer text-primary-400 hover:text-primary-50">
              About
            </a>
            <a
              href="#"
              className="text-x cursor-pointer text-primary-400 hover:text-primary-50"
            >
              Why Us
            </a>
            <a
              href="#"
              className="text-x cursor-pointer text-primary-400 hover:text-primary-50"
            >
              Platform
            </a>
            <a
              href="#"
              className="text-x cursor-pointer text-primary-400 hover:text-primary-50"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-x cursor-pointer text-primary-400 hover:text-primary-50"
            >
              Contact
            </a>
          </div>
          <span className="text-7xl">hello@ramos.com</span>
        </div>
        <hr className="border-primary-400" />
        <div className="flex justify-between">
          <div className="flex gap-32 wow animate__fadeInUp">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">
                Warrensville Heights
              </span>
              <span className="text-lg font-semibold text-primary-400">
                14418 Vineyard Drive, NC
              </span>
              <span className="text-lg font-semibold text-primary-400">
                44128
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Saint Louis</span>
              <span className="text-lg font-semibold text-primary-400">
                1366 Penn Street
              </span>
              <span className="text-lg font-semibold text-primary-400">
                63101
              </span>
            </div>
          </div>
          <div className="wow animate__fadeInUp flex flex-col gap-8 text-2xl">
            <a href="#" className="cursor-pointer">
              Linkedin
            </a>
            <a href="#" className="cursor-pointer">
              Instagram
            </a>
            <a href="#" className="cursor-pointer">
              Facebook
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div
            className="wow animate__fadeInRight flex relative font-semibold text-10xl leading-[10rem]"
          >
            Ramos
        </div>
          <span className="wow animate__fadeInRight ml-[-120px] mb-14 text-7xl align-super">&#174;</span>

          <a
            href="#"
            className="cursor-pointer text-primary-400 hover:text-primary-50"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="cursor-pointer text-primary-400 hover:text-primary-50"
          >
            License agreement
          </a>

          <div className="wow animate__fadeInLeft p-10 rounded-4xl bg-primary-50 text-primary">
            <BsQrCode className="w-40 h-40" />
          </div>
        </div>
      </div>
    );
}
export default Footer;