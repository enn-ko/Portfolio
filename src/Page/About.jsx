import React, { useEffect,useState } from 'react'
import  me2 from '../../Img/About/me2.png'
import bg from '../../Img/About/bg1.png'
import star from '../../Img/About/star-2.png'
import icon from '../../Img/Home/icon.svg'
import icon2 from '../../Img/About/icon2.png'
import sign from '../../Img/About/sign.png'
import {ImGithub,ImLinkedin} from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import Loader from './Loader'

const About = () => {
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
      {loader && <Loader/>}
    
      <section className="about pt-20 m-0 bg-black font-Inter">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 0.8,
          delay: 0.5
        }}
        className="container mx-auto">
        <div className="">
          <section className="p-2.5 grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-10">
            <motion.div 
              initial={{scale: 0.7}}
              animate={{scale: 1}}
              viewport={{once: true}}
              transition={{
                duration: 0.8,
                delay: loader ? 0.3 : 0,
              }}
            className="mx-auto md:w-1/2 lg:w-full ">
              <div className='box relative p-6 rounded-4xl h-full bg-card-bg z-10'>
                <img src={bg} alt="background image" className='absolute top-0 left-0 object-cover h-full w-full opacity-10'/>
                <div className="h-full rounded-4xl bg-gradient-to-r from-[#3c58e3] from-[-15%] via-[#c2ebff] via-58% to-[#5ab5e2] to-97%">
                  <img src={me2} className='h-full rounded-4xl' alt="My profile" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{scale : 0.7}}
              animate={{scale: 1}}
              viewport={{once : true}}
              transition={{
                duration: 0.8,
                delay: loader ? 0.3 : 0,
              }}
              className=" col-span-1 md:col-span-2 mt-10 lg:mt-0">
              <h1 className='mb-10 lg:mb-4 text-3xl lg:text-5xl xl:text-7xl uppercase font-medium flex items-center justify-center gap-1.5 text-white  '>
                <img src={star} alt="" className="w-6 xl:w-16" aria-hidden="true" /> {" "}
                selt-summery {" "}
                <img src={star} alt="" className='w-6 xl:w-16' aria-hidden="true" />
              </h1>
              <div className="box pt-33 pr-15 pl-7 pb-7 bg-card-bg relative rounded-4xl">
                <img src={icon2} alt="gridx icon2"  className='absolute top-0'/>
                <h1 className='mb-2 text-4xl font-medium text-white'>David Henderson</h1>
                <p className='text-white opacity-[0.8]'>
                I am a San francisco-based product designer with a focus on web design, 
                illustration, a visual development. I have a diverse range of experience
                having worked across various fields and industries.
                </p>
              </div>
            </motion.div>
          </section>

          <section className='p-2.5 grid grid-cols-1 md:grid-cols-2 gap-5'>
              <motion.div
                initial={{scale: 0.7}}
                whileInView={{scale: 1}}
                viewport={{once : true}}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className="box p-7 rounded-4xl bg-card-bg">
                <img src={bg} alt="background image" className='absolute top-0 left-0 w-full h-full object-cover opacity-10' />
                <h3 className='mb-8 uppercase text-white font-medium text-base '>Experience</h3>
                <ul className='text-base font-medium'>
                  <li>
                    <p className='text-card-para opacity-60 mb-3'>2007 - 2017</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>Framer Designer & Developer</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm '>Bluebase Designs</p>
                  </li>
                  <li className='pt-8'>
                    <p className='text-card-para opacity-60 mb-3'>2017 - 2023</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>Front-End Developer</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm'>Larsen & Toubro</p>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{scale : 0.7}}
                whileInView={{scale : 1}}
                viewport={{once : true}}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0
                }}
                className="box p-7 rounded-4xl bg-card-bg">
                <img src={bg} alt="background image" className='absolute top-0 left-0 w-full h-full object-cover opacity-10' />
                <h3 className='mb-8 uppercase text-white font-medium text-base '>Education</h3>
                <ul className='text-base font-medium'>
                  <li>
                    <p className='text-card-para opacity-60 mb-3'>2004 - 2007</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>Bachelor Degreen in Psychology</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm'>University of California</p>
                  </li>
                  <li className='pt-8'>
                    <p className='text-card-para opacity-60 mb-3'>2007 - 2009</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>Master Degreen in Designing</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm'>University of Texas</p>
                  </li>
                </ul>
              </motion.div>
          </section>
          <section className='p-2.5 lg:items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
              <motion.div
                initial={{scale : 0.7}}
                whileInView={{scale:  1}}
                viewport={{once : true}}
                transition={{
                  duration  : 0.8,
                  delay : loader ? 0.5 : 0
                }}
                className=" box bg-card-bg p-5 rounded-4xl ">
                  <img src={bg} alt="background image" className='absolute top-0 left-0 object-cover mb-4 opacity-10' />
                  <div className="box bg-card-bg p-4 mb-4 flex justify-center items-center gap-5 border border-dark rounded-4xl shadow">
                    <a href="https://github.com/enn-ko?tab=repositories" target='_blank' className='h-16 w-16 rounded-full transition duration-500 border text-white hover:text-black hover:bg-white border-dark flex justify-center items-center shadow'>
                      <ImGithub className="text-2xl "/>
                    </a>
                    <a href="https://www.linkedin.com/in/enn-ko-300843248/" target='_blank' className='h-16 w-16 rounded-full border border-dark text-white hover:text-black hover:bg-white transition duration-500 flex justify-center items-center shadow'>
                      <ImLinkedin className="text-2xl "/>
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=''>
                      <h4 className=' uppercase text-xs text-card-para opacity-50 mb-3 font-medium'>Stay with me</h4>
                      <h1 className='text-lg font-medium text-white mb-2'>Profile</h1>   
                    </div>
                    <Link to={'/contact'} className='transition duration-300 text-card-para linkicon opacity-20'>
                        <img src={icon} alt="" className=''/>
                    </Link>
                  </div>
              </motion.div>
              <motion.div
                initial={{scale: 0.7}}
                whileInView={{scale: 1}}
                viewport={{once : true}}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0
                }}
                className="box pt-25 pb-10.5 px-5 col-span-1 lg:col-span-2 bg-card-bg rounded-4xl">
              <img src={bg} alt="background image" className='absolute top-0 w-full left-0 object-cover mb-4 opacity-10' />
              <img src={icon2} alt="" className='absolute top-0' />
              <div className='flex justify-between items-end'>
                <h1 className='font-medium text-white text-3xl lg:text-4xl '>
                    Let's 
                    <br />
                    Work {" "}
                    <span className='text-primary'>together.</span>
                  </h1>

                  <Link to={'/contact'} className='transition duration-300 linkicon text-card-para opacity-20 cursor-pointer'>
                    <img src={icon} alt="" />
                  </Link>
              </div>
              </motion.div>
              <motion.div 
                initial={{scale : 0.7}}
                whileInView={{scale : 1}}
                viewport={{once : true}}
                transition={{
                  duration:  0.8,
                  delay: loader ? 0.5 : 0
                }}
                className="box p-5 rounded-4xl bg-card-bg md:col-span-3 lg:col-span-1">
              <img src={bg} alt="background image" className='absolute top-0 left-0 w-full object-cover mb-4 opacity-10' />
              <img src={sign} alt="sign image" className='mb-4 object-cover w-[75%] lg:max-w-none px-5' />
              <div className="flex justify-between items-center">
                    <div className=''>
                      <h4 className=' uppercase text-xs text-card-para opacity-50 mb-3 font-medium'>More about me</h4>
                      <h1 className='text-lg font-medium text-white mb-2'>Credentials</h1>   
                    </div>
                    <div>
                    <Link to={'/credential'} className='linkicon transition duration-300 text-card-para opacity-20'>
                        <img src={icon} alt="" className=''/>
                    </Link>
                    </div>
                  </div>
              </motion.div>
          </section>
        </div>
      </motion.div>
      </section>
      {/* </motion.div> */}
   </>
  )
}

export default About