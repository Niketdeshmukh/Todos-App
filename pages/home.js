import Image from "next/image";
import Navbar from "./components/Navbar"
const home = () => {
  return (
    <><Navbar/>
    <div className="image__styling"></div>
    <p>Welcome to Home page </p>
    </>
  )
}

export default home