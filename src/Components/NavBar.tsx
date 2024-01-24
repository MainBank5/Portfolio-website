import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavBar = () => {
  const navList = ['Home', 'Services', 'Skills', 'Portfolio', 'Contact'];
  const [bars, setBars] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setBars(!bars);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.3 },
    },
  };

  return (
    <div
      className={`fixed w-full z-50 h-[90px] flex justify-between px-4 items-center ${
        scrolling ? 'navbar-glass' : ''
      }`}>
        
      <div>
        <img src={logo} alt="mylogo" style={{ width: '90px' }} />
      </div>

      <div>
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex justify-center items-center w-full"
        >
          {navList.map((nav, index) => (
            <motion.li
              variants={variants}
              key={index}
              className="px-6 cursor-pointer font-medium transition hover:duration-75 hover:ease-in border-yellow-400 rounded-md hover:border-b-8"
            >
              <Link
                to={nav.toLowerCase()}
                smooth={true}
                duration={300}
                spy={true}
                offset={-70} 
                hashSpy={true}
              >
                {nav}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div onClick={handleNav} className="md:hidden block z-10 transition duration-100">
        {bars ? <FaTimes /> : <FaBars />}
      </div>

      {bars && (
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-[#0c0c1d]"
        >
          {navList.map((nav, index) => (
            <motion.li
              variants={variants}
              key={index}
              className="px-8 cursor-pointer text-4xl py-6"
            >
              <Link
                onClick={handleNav}
                to={nav.toLowerCase()}
                smooth={true}
                duration={300}
                spy={true}
                offset={-70} // Adjust this value based on your layout
                hashSpy={true}
              >
                {nav}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default NavBar;

