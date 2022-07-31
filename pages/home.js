import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Styles from "../styles/home.module.css";
const home = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="image__styling"></div>
      <div className="container__style">
      <p>Hi There ✋ </p>
      <p style={{ color: "#252829e8", marginLeft: "2rem" }}>
        Here you can make the todos list and also write some blogs{" "}
      </p>
      <p
        style={{
          color: "#2d2f30bf",
          display: "flex",
          marginLeft: "12px",
          alignItems: "baseline",
        }}
      >
        Just navigate to todo page{" "}
        <Link href="/todo" target="_blank">
          <a className={Styles.arrow__link}> </a>
        </Link>
      </p>
      <p
        style={{
          color: "#393e409e",
          display: "flex",
          marginLeft: "12px",
          alignItems: "baseline",
        }}
      >
        Just navigate to blog page{" "}
        <Link href="/blog" target="_blank">
          <a className={Styles.arrow__link}> </a>
        </Link>
      </p>
      </div>
    </>
  );
};

export default home;
