import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="ft-bg bg-[#2d4567]">
      <section className="relative w-full">
        <div className="mx-auto w-full max-w-7xl px-8 md:w-[768px] lg:w-[970px] xl:w-[970px] 2xl:w-[1170px]">
          <div className="mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h1 className="mr-[140px] w-5 font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                Useful Links
              </h1>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Contact-Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="mr-[140px] w-5 font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                Business Hours
              </h1>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px] text-white"
                  >
                    Monday - Saturday{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px] text-white"
                  >
                    10:30 A.M. - 6.30 PM,
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px] text-white"
                  >
                    Sunday Close
                  </a>
                </li>
              </ul>
            </div>

            <div>
              {/* <h1 className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                Our Locations
              </h1> */}
              <ul className="space-y-1">
                {/* <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Gurgaon (Dlf Phase - 4)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Mumbai (Andheri West)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    South Delhi (Kailash Colony)
                  </a>
                </li> */}
                <li className="pt-[10px]">
                  <h1 className="mr-[140px] w-10 font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                    Business Information
                  </h1>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Business Category: Security, Service & Consultants
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Business Type: Service Provider
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Business Since: 1989
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Working Days: All 7 Days
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Timings[IST]: 24 Hours
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="mr-[140px] w-2 font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                Our Locations
              </h1>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    301, Vasant Vaibhav Residency,
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Nisarg Colony,
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Kashid Nagar,
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Pimple Gurav,
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Pune - 411061
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Maharashtra, India
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-col  justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography variant="small" className="mb-4 md:mb-0">
              <p className="nfothed mt-4 mt-sm-0 font-lexend font-black text-xl">
                New National Security Service
              </p>
              <p className="nfothed mt-4 mt-sm-0 font-lexend font-black text-xl">
                Connect with us
              </p>
              <p className="font-lexend text-[18px] leading-[23px]">
                <a href="tel:9555112200" target="_top">
                  +91-20-65290835
                </a>
                ,
                <a href="tel:9810130552" target="_top">
                  +91-7875644162
                </a>{" "}
              </p>
              <p className="font-lexend text-[18px] leading-[23px]">
                <a href="mailto: newnational_s@yahoo.com" target="_top">
                  newnational_s@yahoo.com
                </a>
              </p>
              <ul className="list-inline nfot-soclist flex mt-[25px] space-x-12 px-16">
                <li className="list-inline-item">
                  <a href="" target="_blank">
                    <FaFacebookF color="#2d4567" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" target="_blank">
                    <FaTwitter color="#2d4567" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" target="_blank">
                    <FaInstagram color="#2d4567" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com" target="_blank">
                    <FaYoutube color="#2d4567" />
                  </a>
                </li>
              </ul>
            </Typography>

            <div className="flex flex-col max-md:justify-start max-md:content-start max-md:grid mt-10">
              {/* <Download /> */}
              <div>
                <img className="w-20 m-auto" src="/img.jpeg" alt="" />
              </div>
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-black font-bold text-[11px] mt-[2rem] md:mb-0"
              >
                &copy; copyright {currentYear}{" "}
                <a href="#">New National Security Service</a>
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
