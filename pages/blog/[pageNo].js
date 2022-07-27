import {useRouter} from 'next/router'
import Navbar from "../components/Navbar";
import styles from "../../styles/index.module.css";

export const getStaticPaths= async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map((curElem)=>{
    return {
      params:{pageNo:curElem.id.toString(),
      }
    }
  })
  return {
    paths,
    fallback:false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
    <div className='image__styling'></div>
      <Navbar />
      <div className={`${styles.ssr_styles} ssr_styles_inside`}>
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};

export default pageNo