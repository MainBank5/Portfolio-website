

const Contact = () => {
  

  
  return (
    <div data-name="contact" className="flex flex-col mx-auto py-6 w-full h-full">
      <div className="flex flex-col mx-auto justify-center items-center w-full">
        <div className="pb-6">
          <h1 className="text-3xl text-center sm:font-4xl font-playfair border-blue-400 border-b-4">Contact</h1>
          <p className="text-center">Let's Chat</p>
        </div>

        <form method="POST" className="flex flex-col w-3/5 h-1/2" action="https://getform.io/f/24139a13-3c0b-448f-86ea-6e60b5be9775" >
          <input name="name" className=" text-black shadow-cyan-500 shadow-sm p-3 rounded-md mt-4" type="text" required placeholder="First Name.." /> <br />
          <input name="email" className=" text-black shadow-cyan-500 shadow-sm  rounded-md  p-3 mt-4 " type="email" required placeholder="email address.." />  <br />
          <textarea name="message" className=" shadow-sm shadow-cyan-400 p-3 mt-4 w-full h-[150px] rounded-md resize-none" placeholder="Message.."  ></textarea><br />
          <button className="bg-blue-500 mt-5 text-center text-2xl font-bold rounded-lg">Submit</button>
        </form>
      </div>
      
      <div>

      </div>

    </div>
  )
}

export default Contact;