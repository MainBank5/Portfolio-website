import ecommerce from '../assets/ecommerce.jpg';
import car from '../assets/car.jpg';
import calories from '../assets/calories.jpg';
import expense from '../assets/expenses.jpg';

const Portfolio = () => {
  return (
    <div data-name="portfolio" className="flex flex-col mx-auto w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl text-center sm:font-4xl font-playfair border-blue-400 border-b-4">Portfolio</h1>
          <p className="py-3 text-center">Some of my Recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 px-4">
          {[
            { image: ecommerce, title: "E-Mart Website", description: "Got to work with React Redux, React Router, and Context API" },
            { image: car, title: "Ride Rental", description: "Got to work with React Redux, React Router, and Context API" },
            { image: calories, title: "Macro-Right", description: "Got to work with React Redux, React Router, and Context API" },
            { image: expense, title: "PennyWise", description: "Got to work with React Redux, React Router, and Context API" },
          ].map((project, index) => (
            <div key={index} className="relative group bg-cover bg-no-repeat mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-64 object-cover rounded-lg hover:shadow-lg hover:shadow-blue-600"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold py-2 font-playfair">{project.title}</h2>
                <p className="text-sm md:text-base lg:text-lg">{project.description}</p>
                <div className="flex flex-row justify-center items-center gap-5">
                 <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">See Demo</button>
                 <button className="mt-2 px-4 py-2 bg-transparent border-2 border-blue-600 hover:bg-gradient-to-b from-blue-500 to-blue-600 transition duration-700 text-white rounded">See Code</button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
