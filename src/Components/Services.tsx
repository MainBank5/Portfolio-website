import {motion} from 'framer-motion'
import Cardservices from './UI/Cardservices'
import List from './List'



const Services = () => {
  const items = [
    'Responsive Web design',
    'Web Hosting',
    'Website SEO Optimization',
    'API Developement',
    'Server-side development',
  ];

  const databse = [
    'Schema Design',
    'Database Architecture Design',
    'Database Performance Tuning',
    'Data Documentation',
    'Query Optimiazation',
  ];

  const technical = [
    "API Documentation",
    'Content Management System',
    "Software Development Life Cycle",
    "Cloud Computing (AWS) ",
     
  ];

  const cardVariants = {
    initial: {
      opacity: 0,
      x: -300,
    }, 
  
    animate: {
      opacity: 1,
      x:0,
      transition: { duration: 1, staggerChildren:0.3, delay:0.2, },
    }}
 
  return (
    <motion.div data-name="services" variants={cardVariants} className='flex mx-auto flex-col' initial="initial" whileInView="animate">
      
      <motion.div variants={cardVariants} className='flex justify-center items-center'>
        <h1 className='text-3xl sm:text-4xl text-center font-bold border-b-4 border-blue-500 font-playfair'>Services</h1>
      </motion.div>
      <motion.div variants={cardVariants} className="flex flex-col w-full grow-1 flex-wrap justify-center items-center md:flex-row">
        <div className="px-10 py-10">
          <Cardservices>
            <List title={'Web Development'} items={items}></List>
          </Cardservices>
        </div>

        <div className="px-10 py-10">
          <Cardservices>
            <List title={'Database Design'} items={databse}></List>
          </Cardservices>
        </div>

        <div className="px-10 py-10">
          <Cardservices>
            <List title={'More services'} items={technical}></List>
          </Cardservices>
        </div>
      </motion.div>
    </motion.div>

    
  );
};

export default Services;