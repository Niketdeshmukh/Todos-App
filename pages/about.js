import Head from 'next/head'
import Navbar from "./components/Navbar"
const about = () => {
  return (
    <><Navbar/>
    <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className="image__styling"></div>
    <p>Welcome to About us!</p></>
  )
}

export default about