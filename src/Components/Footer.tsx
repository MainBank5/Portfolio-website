


const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-[#0c0c1d] text-white py-6 border-t-2 w-full border-blue-600">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="text-center mx-20 md:text-left md:w-1/3">
          <h1 className="text-xl font-bold">Eliud Karuga</h1>
        </div>

        <div className="mt-4 md:mt-0 md:w-1/3">
          <h2 className="text-lg font-bold mb-2 text-center md:text-left">Let's Connect</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/eliud-karuga-6549ab250/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              LinkedIn
            </a>
            <a href="https://discord.com/users/931518276557758474" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              Discord
            </a>
            <a href="https://github.com/MainBank5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-center md:text-right md:w-1/3 mx-20">
          <p className="text-lg">&copy; {date.getFullYear()} Eliud Karuga.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

