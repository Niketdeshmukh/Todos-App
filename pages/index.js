import Head from "next/head";
import Navbar from "./components/Navbar";
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
      <p>hello there</p>
      <p style={{color:"#252829a8"}}>Please navigate to home page <Link href="/home" target="_blank" ><a class="arrow-link"> </a></Link></p>
    <p style={{color:"#2d2f3082"}}>Please navigate to todo page <Link href="/todo" target="_blank" ><a class="arrow-link"> </a></Link></p>
    <p style={{color:"#393e405e"}}>Please navigate to blog page <Link href="/blog" target="_blank" ><a class="arrow-link"> </a></Link></p>
      {/* {data.slice(0, 5).map((curElem) => {
        return (
          <div key={curElem.id} className={styles.ssr_styles}>
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}>
              <h2>{curElem.title}</h2>
            </Link>
          </div>
        );
      })} */}
    </>
  );
};

export default index;
