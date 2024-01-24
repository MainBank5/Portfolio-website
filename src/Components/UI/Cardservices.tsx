import { ReactNode } from "react"


type Cardprops = {
    children:ReactNode

}

const Cardservices = ({children}: Cardprops) => {
  return (
    <div className="bg-gradient-to-t from-blue-800 to-cyan-600 px-3 text-gray-100 w-72 h-80 transition duration-300
    hover:shadow-lg rounded-lg hover:opacity-85">
        {children}
    </div>
  )
}

export default Cardservices