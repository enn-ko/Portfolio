import { useEffect, useState } from "react";
import me from "../../Img/Home/me.png";
import Loader from "./Loader";
import { motion } from "framer-motion";

import { AiOutlineDribbble } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";

const Credential = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  const name = "David Henderson".split("");
  console.log(name);

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
        className="xl:container xl:mx-auto min-h-screen px-[1rem] md:px-[2rem]  xl:px-[4.5rem]  pb-20 flex flex-col md:flex-row items-start justify-between gap-12 mt-14"
      >
        
        <div className="basis-1/3 bg-card-bg rounded-3xl px-6 py-6 relative mx-auto md:mx-0 md:sticky md:top-[10%]  after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25] z-10">
          <div className="   bg-home-gradient rounded-3xl overflow-hidden z-50">
            <img src={me} className="block  sm:w-full sm:h-full" alt="" />
          </div>
          <div className="text-center py-6">
            <h1 className="text-white text-2xl font-semibold">
              {name.map((letter, i) => (
                <span key={i}>{letter}</span>
              ))}
            </h1>
            <p className="text-card-para opacity-50">@davidhanderson</p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-6">
            <span className="w-10 h-10 z-50 group duration-150 grid place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  hover:bg-white relative cursor-pointer after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <AiOutlineDribbble className="text-white duration-150 group-hover:text-gray text-xl" />
            </span>
            <span className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <CiTwitter className="text-white text-xl group-hover:text-gray duration-150" />
            </span>
            <span className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <BiLogoInstagram className="text-white text-xl group-hover:text-gray duration-150" />
            </span>
            <span className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <FaFacebookF className="text-white text-xl group-hover:text-gray duration-150" />
            </span>
          </div>
          <div className=" z-50 relative">
            <button className="w-full py-2 rounded-xl bg-btn-bg hover:bg-white cursor-pointer hover:text-btn-bg text-white text-lg leading-normal tracking-wider">
              Contact me
            </button>
          </div>
        </div>

        <div className="basis-2/3">
          <div className="about">
            <h1 className="c uppercase text-white text-xl font-medium">
              about me
            </h1>
            <p className="text-white text-[1.1rem]  leading-normal tracking-wide opacity-80 mt-6 mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus
              velit omnis.
            </p>
            <p className="text-white text-[1.1rem] leading-normal tracking-wide opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              earum fuga sequi inventore facere voluptas dignissimos eaque nemo,
              rerum quo numquam iure aut dolor debitis corporis iste rem, ullam
              cumque?
            </p>
          </div>

          <div className="experience mt-10">
            <h1 className="text-white text-xl font-medium">Experience</h1>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">react js developer</h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sapiente accusamus! Perspiciatis quasi debitis assumenda culpa, voluptatibus, vero doloribus neque reprehenderit impedit, fugiat laudantium odio non beatae amet voluptas maxime?</p>
          </div>

          <div className="education mt-10">
            <h1 className="text-white text-xl font-medium ">Education</h1>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">first year student of  computer university mandalay</h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sapiente accusamus! Perspiciatis quasi debitis assumenda culpa, voluptatibus, vero doloribus neque reprehenderit impedit, fugiat laudantium odio non beatae amet voluptas maxime?</p>
          </div>

          <div className="skills mt-10">
          <h1 className="c uppercase text-white text-xl font-medium">
              skills
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-y-6 mt-8">
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">html</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">css</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">javascript</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">react</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">tailwind</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">bootstrap</h4>
                </div>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Credential;
