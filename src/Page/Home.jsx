
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import me from "../../Img/Home/me.png";
import sign from "../../Img/Home/sign.png";
import icon from "../../Img/Home/icon.svg";
import work from "../../Img/Home/my-works.png";
import gFont from "../../Img/Home/gfonts.png";
import icon2 from "../../Img/Home/icon2.png";

import { FiCamera } from "react-icons/fi";
import { PiPencilCircle } from "react-icons/pi";
import { TbColorFilter } from "react-icons/tb";
import { MdOutlineDeveloperMode } from "react-icons/md";

import { AiOutlineDribbble } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../Context/StateContext";
import Loader from "./Loader";
const Home = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  const name = "David Henderson.".split("");

  const nav = useNavigate()

  return (
    <>
      {loader && <Loader />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="xl:container xl:mx-auto min-h-screen px-[1rem] md:px-[2rem]  xl:px-[4.5rem]  pb-20"
      >
        <section className="slg:flex items-stretch justify-between slg:gap-4 lg:gap-6 mt-20">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: loader ? 0.5 : 0,
            }}
            className="slg:basis-1/2  bg-card-bg flex flex-col xsm:flex-row items-stretch justify-start gap-8 md:gap-8 lg:gap-8 px-6 lg:px-12 py-7 xl:py-10 2xl:py-[14] rounded-[2rem] cursor-pointer group z-20 relative after:pointer-events-none after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]"
          >
            <div className=" sm:basis-1/3  slg:basis-1/2  w-3/5 sm:w-full mx-auto sm:mx-0  bg-home-gradient rounded-br-3xl overflow-hidden rounded-tl-3xl z-50">

              <img src={me} className="block  sm:w-full sm:h-full" alt="" />
            </div>
            <div className=" slg:basis-1/2 sm:basis-2/3  z-50 flex xsm:flex-col flex-row justify-between ">
              <div className="">

              <h4 className="text-card-para uppercase text-[10px] md:text-[12px] slg:text-[12px] lg:text-[14px] tracking-wide opacity-70  font-medium">
                A React Developer
              </h4>

              <h1 className="text-white text-[36px] sm:text-[30px]  xl:text-[32px] 2xl:text-[36px] leading-[1.1] mb-3 mt-[1px] font-medium">
                {name.map((letter, i) => (
                  <span key={i}>{letter}</span>
                ))}
              </h1>
              <p className="text-card-para opacity-70 text-md font-normal tra tracking-wide xl:w-[90%]">
                I'm a react developer based in Yangon
              </p>
              </div>

              <Link to={'/about'} className="">
                <img
                  src={icon}
                  className="ml-auto opacity-50 group-hover:opacity-100 duration-[.4s] translate-y-[16px]"
                  alt=""
                />
              </Link>
            </div>
          </motion.div>




          

          <div className="slg:basis-1/2 mt-10 slg:mt-0  overflow-hidden">
            <motion.div
              initial={{ scale: 0.7 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: loader ? 0.5 : 0,
              }}
              className="bg-card-bg px-4 py-4 rounded-full relative "
            >
              <div className="overflow-hidden flex items-center">
                <motion.span
                  initial={{ x: "30%" }}
                  animate={{ x: "-90%" }}
                  transition={{
                    duration: 8,
                    delay: 0.4,
                    repeat: "infinite",
                    ease: "linear",
                  }}
                  className=" text-card-para text-sm overflow-hidden w whitespace-nowrap"
                >
                  * Latest work and feature * Latest work and feature * Latest
                  work and feature
                </motion.span>
              </div>
            </motion.div>
            <div className="flex items-start justify-between gap-4 mt-5 md:flex-nowrap flex-wrap">
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className="md:basis-1/2 basis-full border cursor-pointer border-[rgba(255,255,255,0.1)] bg-card-bg px-8 py-6 rounded-3xl group relative after:pointer-events-none after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-3xl after:opacity-[.25]"
              >
                <div className="">
                  <img src={sign} alt="" className="block" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="">
                    <h4 className="text-card-para opacity-70 text-[.8rem] mb-2 font-medium uppercase">
                      more about me
                    </h4>
                    <h1 className="text-white font-medium text-xl capitalize">
                      credentials
                    </h1>
                  </div>
                  <Link to={'/credential'}>
                    <img
                      src={icon}
                      alt=""
                      className="opacity-50 group-hover:opacity-100 duration-500 translate-y-2"
                    />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className="md:basis-1/2 basis-full cursor-pointer border border-[rgba(255,255,255,0.1)] bg-card-bg px-8 py-6 rounded-3xl group relative after:pointer-events-none after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-3xl after:opacity-[.25]"
              >
                <div className="">
                  <img src={work} alt="" className="block" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="">
                    <h4 className="text-card-para opacity-70 text-[.8rem] mb-2 font-medium uppercase">
                      showcase
                    </h4>
                    <h1 className="text-white font-medium text-xl capitalize">
                      projects
                    </h1>
                  </div>
                  <Link to={'/work'}>
                    <img
                      src={icon}
                      alt=""
                      className="opacity-50 group-hover:opacity-100 duration-[.4s] translate-y-2"
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

























        <section className="flex items-stretch md:items-start lg:items-stretch justify-between lg:gap-6 gap-4  mt-4 flex-wrap lg:flex-nowrap">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: loader ? 0.5 : 0,
            }}
            className="lg:basis-1/4 md:basis-[48%] basis-full border border-[rgba(255,255,255,0.1)] bg-card-bg group flex flex-col justify-between cursor-pointer  rounded-[1.75rem] p-8 relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[1.75rem] after:opacity-[.25]"
          >
            <div className="">
              <img src={gFont} alt="" />
            </div>
            <div className="flex items-end justify-between">
              <div className="">
                <h4 className="uppercase text-[.8rem] text-card-para font-medium opacity-50">
                  blog
                </h4>
                <h1 className="text-white text-xl font-medium">GFonts</h1>
              </div>
              <div className="">
                <img
                  src={icon}
                  className="opacity-50 group-hover:opacity-100 duration-[.4s]"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: loader ? 0.5 : 0,
            }}
            className="lg:basis-2/4 cursor-pointer border border-[rgba(255,255,255,0.1)] md:basis-[48%] basis-full bg-card-bg group flex flex-col justify-end p-8 group rounded-[1.75rem] relative after:pointer-events-none after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[1.75rem] after:opacity-[.25]"
          >
            <div className="flex items-center justify-between text-center flex-1 mb-8">
              <span className="basis-1/4">
                <FiCamera className="text-white text-[2.45rem] font-thin  mx-auto" />
              </span>
              <span className="basis-1/4">
                <PiPencilCircle className="text-white text-[2.45rem] font-thin  mx-auto" />
              </span>
              <span className="basis-1/4">
                <TbColorFilter className="text-white text-[2.45rem] font-thin  mx-auto" />
              </span>
              <span className="basis-1/4">
                <MdOutlineDeveloperMode className="text-white text-[2.45rem] font-thin  mx-auto" />
              </span>
            </div>
            <div className="flex items-end justify-between mt-auto ">
              <div className="">
                <h4 className="uppercase text-[.8rem] text-card-para font-medium opacity-50">
                  specialization
                </h4>
                <h1 className="text-white text-xl font-medium capitalize">services offering</h1>
              </div>
              <div className="">
               <Link to={'/offering'}>
               <img
                  src={icon}
                  className="opacity-50 group-hover:opacity-100 duration-[.4s]"
                  alt=""
                />
               </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: loader ? 0.5 : 0,
            }}
            className="lg:basis-1/4 border border-[rgba(255,255,255,0.1)] cursor-pointer group basis-full bg-card-bg p-6 flex flex-col justify-end  z-10  rounded-[1.75rem] relative after:pointer-events-none after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[1.75rem] after:opacity-[.25]"
          >
            <div className="bg-card-bg border border-[rgba(255,255,255,0.1)] rounded-3xl flex items-center justify-center gap-4 px-4 py-4 relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-3xl after:opacity-[.1]">
              <span className=" border border-[rgba(255,255,255,0.1)] px-5 py-5 rounded-full relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-full after:opacity-[.1]">
                <AiOutlineDribbble className="text-white text-3xl mx-auto " />
              </span>
              <span className="border border-[rgba(255,255,255,0.1)] px-5 py-5 rounded-full relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-full after:opacity-[.1]">
                <CiTwitter className="text-white text-3xl mx-auto" />
              </span>
            </div>
            <div className="flex items-end justify-between mt-auto">
              <div className="mt-4">
                <h4 className="uppercase text-[.8rem] text-card-para font-medium opacity-50">
                  stay with me
                </h4>
                <h1 className="text-white text-xl font-medium mt-1">Profile</h1>
              </div>
              <Link to={'/contact'} className="">
                <img
                  src={icon}
                  className="opacity-50 group-hover:opacity-100 duration-[.4s]"
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="flex items-stretch justify-between gap-6 mt-4 flex-wrap lg:flex-nowrap">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: loader ? 0.5 : 0,
            }}
            className="lg:basis-1/2 cursor-pointer basis-full border border-[rgba(255,255,255,0.1)] bg-card-bg flex items-center justify-center sm:justify-between flex-wrap xsm:flex-nowrap gap-8 p-8  rounded-[2rem] relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]"
          >
            <div className="basis-full uxsm:basis-[44.5%] xsm:basis-1/3 bg-card-bg  py-10 relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-3xl after:opacity-[.1]">
              <h1 className="text-white text-4xl font-medium text-center ">
                07
              </h1>
              <p className="uppercase text-[.8rem] text-card-para font-normal  tracking-normal  mx-auto text-center opacity-50 w-1/2 mt-4">
                years experience
              </p>
            </div>
            <div className="basis-full uxsm:basis-[44.5%] xsm:basis-1/3 bg-card-bg  py-10 relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-3xl after:opacity-[.1]">
              <h1 className="text-white text-4xl font-medium text-center ">
                +125
              </h1>
              <p className="uppercase text-[.8rem] text-card-para font-normal  tracking-normal  mx-auto text-center opacity-50 w-1/2 mt-4">
                clients worldwide
              </p>
            </div>
            <div className="basis-full uxsm:basis-[44.5%] xsm:basis-1/3 bg-card-bg  py-10 relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-3xl after:opacity-[.1]">
              <h1 className="text-white text-4xl font-medium text-center ">
                +210
              </h1>
              <p className="uppercase text-[.8rem] text-card-para font-normal  tracking-normal  mx-auto text-center opacity-50 w-1/2 mt-4">
                total projects
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: loader ? 0.5 : 0,
            }}
            className="lg:basis-1/2 cursor-pointer border border-[rgba(255,255,255,0.1)] basis-full bg-card-bg group  px-8 flex flex-col justify-between pb-12 rounded-[2rem] relative after:pointer-events-none after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]"
          >
            <div className="">
              <img src={icon2} alt="" />
            </div>
            <div className="flex items-end justify-between">
              <h1 className="text-white text-[2.8rem] font-medium">
                Let's <br /> work{" "}
                <span className="text-[#5b78f6]">together.</span>{" "}
              </h1>
              <Link to="/contact">
                <img
                  src={icon}
                  alt=""
                  className="opacity-50 group-hover:opacity-100 duration-[.4s] "
                />
              </Link>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};


export default Home;
