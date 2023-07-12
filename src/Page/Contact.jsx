import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsDribbble, BsInstagram } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { SlSocialTwitter } from "react-icons/sl";
import Loader from "./Loader";

const Contact = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      console.log("loader");
    }, 1000);
  }, []);
  const animateVariants = {
    open: { scale: 1, transition: { duration: 0.8, delay: loader ? 0.5 : 0 } },
    closed: {
      scale: 1,
      transition: { duration: 0.8, delay: loader ? 0.5 : 0 },
    },
  };
  return (
    <>
      {loader && <Loader />}
      <section className="w-full h-screen flex justify-center bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="w-3/4 flex justify-center mt-32"
        >
          <div className="w-1/3 flex flex-col gap-10 bg-black text-white">
            <div className="flex flex-col gap-10">
              <motion.h3
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                className="text-lg font-semibold"
              >
                CONTACT INFO
              </motion.h3>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="flex gap-5"
              >
                <div className=" w-[4.5rem] h-[4.5rem] flex items-center justify-center text-2xl bg-card-background rounded-lg p-5">
                  <AiOutlineMail />
                </div>
                <div>
                  <h4 className="opacity-50">MAIL US</h4>
                  <p>info@bluebase.com</p>
                  <p>info@bluebase2.com</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="flex gap-5"
              >
                <div className=" w-[4.5rem] h-[4.5rem] flex items-center justify-center text-2xl bg-card-background rounded-lg p-5">
                  <BsTelephone />
                </div>
                <div>
                  <h4 className="opacity-50">CONTACT US</h4>
                  <p>+1 504-899-8221</p>
                  <p>+1 504-749-5456</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="flex gap-5"
              >
                <div className=" w-[4.5rem] h-[4.5rem] flex items-center justify-center text-2xl bg-card-background rounded-lg p-5">
                  <GoLocation />
                </div>
                <div>
                  <h4 className="opacity-50">LOCATION</h4>
                  <p>22 Baker Street, Texas</p>
                  <p>United States</p>
                  <p>W1U 3BW</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="flex flex-col gap-5"
            >
              <h3 className="text-lg font-semibold">SOCIAL INFO</h3>
              <div className="flex items-center gap-5">
                <div className=" w-[4.5rem] h-[4.5rem] flex justify-center items-center text-2xl bg-dark hover:bg-light hover:text-dark rounded-full p-5">
                  <BsDribbble />
                </div>
                <div className=" w-[4.5rem] h-[4.5rem] flex justify-center items-center text-2xl bg-dark hover:bg-light hover:text-dark rounded-full p-5">
                  <SlSocialTwitter />
                </div>
                <div className=" w-[4.5rem] h-[4.5rem] flex justify-center items-center text-2xl bg-dark hover:bg-light hover:text-dark rounded-full p-5">
                  <BsInstagram />
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="relative w-2/3 h-[38rem] bg-dark rounded-3xl p-10"
          >
            <img
              className="h-20 absolute top-0 right-10"
              src="Img\Contact\icon2.png"
              alt=""
            />
            <h1 className="text-4xl font-semibold text-light py-5">
              Let's work <span className="text-primary">together.</span>
            </h1>
            <form className="flex flex-col gap-4">
              <input
                className="w-full bg-gray-dark placeholder-card-para rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Name *"
              />
              <input
                className="w-full bg-gray-dark placeholder-card-para rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Email *"
              />
              <input
                className="w-full bg-gray-dark placeholder-card-para rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Your Subject *"
              />
              <textarea
                className="w-full bg-gray-dark placeholder-card-para rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Your Message *"
                rows="5"
              />
              <button className="w-full bg-gray-dark text-light hover:bg-light hover:text-dark rounded-lg py-4">
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
