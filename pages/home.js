import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/Navbar";
const home = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="image__styling"></div>
      <p>Hi There ✋ </p>
      <p style={{ color: "#252829a8", marginLeft: "2rem" }}>
        Here you can make the todos list and also write some blogs{" "}
      </p>
      <p style={{ color: "#2d2f3082" }}>
        Just navigate to todo page{" "}
        <Link href="/todo" target="_blank">
          <a class="arrow-link"> </a>
        </Link>
      </p>
      <p style={{ color: "#393e405e" }}>
        Just navigate to blog page{" "}
        <Link href="/blog" target="_blank">
          <a class="arrow-link"> </a>
        </Link>
      </p>
    </>
  );
};

export default home;
