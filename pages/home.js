import Head from 'next/head'
import Navbar from "./components/Navbar"
const home = () => {
  return (
    <><Navbar/>
    <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className="image__styling"></div>
    <p>Welcome to Home page </p>
    </>
  )
}

export default home