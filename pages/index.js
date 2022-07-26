import Head from 'next/head'
import Navbar from "./components/Navbar";
const index = () => {
  return (
    <>
    <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className="image__styling"></div>
      <Navbar />
      <p>hello</p>
    </>
  );
};

export default index;
