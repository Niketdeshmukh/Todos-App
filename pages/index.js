import Head from "next/head";
import Navbar from "./components/Navbar";
import styles from "../styles/index.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="image__styling"></div>
      <Navbar />
      <p>hello</p>
      {data.slice(0, 5).map((curElem) => {
        return (
          <div key={curElem.id} className={styles.ssr_styles}>
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}>
              <h2>{curElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default index;
