import javascript from '../assets/javascript.png'
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import nextjs from '../assets/nextjs.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import github from '../assets/github.png'
import graphql from '../assets/graphql.png'

const Skills = () => {
  return (
    <div data-name="skills" className="text-white flex flex-col mx-auto w-full py-4">
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <h1 className="text-3xl text-center sm:text-4xl font-bold border-blue-500 border-b-4 font-playfair">
            Skills
          </h1>
          
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 py-10 w-full px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          <img
            className="w-24 mx-auto shadow-lg shadow-yellow-500 hover:scale-105"
            src={javascript}
            alt="js"
          />

          <img className="w-24 mx-auto shadow-lg shadow-blue-500 hover:scale-105" src={react} alt="react" />

          <img className="w-24 mx-auto shadow-lg shadow-white hover:scale-105" src={nextjs} alt="next" />

          <img className="w-24 mx-auto shadow-lg shadow-teal-500 hover:scale-105" src={tailwind} alt="tailwind" />

          <img className="w-24 mx-auto shadow-lg shadow-lime-600 hover:scale-105" src={node} alt="node" />

          <img className="w-24 mx-auto shadow-lg shadow-green-500 hover:scale-105" src={mongo} alt="mongo" />
          <img className="w-24 mx-auto shadow-lg shadow-white hover:scale-105" src={github} alt="git" />
          <img className="w-24 mx-auto shadow-lg shadow-pink-500 hover:scale-105" src={graphql} alt="git" />
        </div>
      </div>
    </div>
  );
};

export default Skills;