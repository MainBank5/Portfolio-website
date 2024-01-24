import { FaArrowRight} from "react-icons/fa6";
import hero from '../assets/hero.jpg'
import { motion } from "framer-motion";

const textvariants = {
  initial: {
    opacity: 0,
    x: -200,
  }, 

  animate: {
    opacity: 1,
    x:0,
    transition: { duration: 0.8, staggerChildren:0.3, delay:0.2, },
  },
}
const Hero = () => {
  return (
    <div data-name="hero" className="flex flex-col py-9  mx-auto">
      <motion.div variants={textvariants} className="max-w-screen-lg mx-auto flex flex-col items-center justify-center 
          h-full px-4 md:flex-row" initial="initial" animate="animate">
        <motion.div variants={textvariants} className="flex flex-col justify-center h-full" >
          <motion.h1 variants={textvariants} className="text-4xl sm:text-7xl font-bold text-blue-700">
            Hi there! 👋 I'm  <span className="text-white">Eliud.</span>{' '}
          </motion.h1>
          <motion.h2 variants={textvariants} className=" text-2xl pt-3 font-bold text-gray-500">A fullstack web developer.</motion.h2>
          <motion.p variants={textvariants} className="text-gray-400 py-2 mt-[10px]">
            I excel in turning design concepts into scalable,
            user-friendly websites and apps. My focus is on crafting
            user-centeric, responsive interfaces that marry stunning aesthetics
            with top-notch functionality. From concept to code, I'm here to
            bring your digital visions to life, creating immersive experiences
            that captivate and resonate with the audience.
          </motion.p>
          <motion.div>
            <motion.a href="../resume.pdf" download="Eliud_Karuga_Resume.pdf" variants={textvariants}
              className="group text-white w-fit px-6 py-3 my-2 text-xl mb-8
                flex items-center rounded-md bg-gradient-to-l from-blue-700 to-cyan-300 cursor-pointer"
            >
              Resume
              <span className="ml-2 group-hover:rotate-90 duration-200">
                <FaArrowRight size={20} />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div >
          <motion.img
            className="w-full object-cover h-full mx-auto rounded-3xl md:w-2/3 md:h-1/2"
            src={hero}
            alt="eliud"
          />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Hero;