import Head from "next/head";
import Image from "next/image"
import { useEffect } from "react";
import "../styles/404.module.css";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
const ErrorPage = () => {
  const router = useRouter();

  // useEffect(()=>{
  //     setTimeout(()=>{
  //       router.push("/");
  //     },15000)
  // },[])
  const handleInput = () => {
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Oops! 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <style jsx>{`
        .container {
          padding: 4rem;
          padding-left: auto;
        }
        .grid-row {
          display: flex;
          flex-direction: row;
        }
        .right-shape {
          width: 12rem;
        }
        .left-shape {
          width: 8rem;
        }
        .colmun {
          padding-right: 2rem;
        }
        @media only screen and (min-width: 1px) and (max-width: 767px) {
          .colmun-right {
            display: none;
          }
          span {
            line-height: 25px;
            padding-bottom: 12px;
          }
          .left-shape {
            margin-bottom: 3rem;
          }
          h1 {
            margin-bottom: 2rem;
          }
        }
      `}</style>
      <style jsx global>{`
        .wrapper {
          background: #00000042;
          height: 100vh;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 15rem;
        }
        .go-home {
          padding: 5px 20px;
          background: #ffa000;
          border: transparent;
          border-radius: 2px;
          box-shadow: 0 0 2px rgb(0 0 0 / 30%);
          cursor: pointer;
          margin: 20px 0;
          color: #fff;
        }
        .go-home i {
          color: #fff;
        }
        span {
          display: block;
          font-size: 18px;
          line-height: 60px;
        }
      `}</style>
      <div className="wrapper">
        <Navbar />
        <div className="container">
          <div className="grid-row">
            <div className="colmun colmun-left">
              <Image
                src="/image-left.png"
                className="left-shape"
                alt="image-left"
                height={100}
                width={200}
                
              />
              <h1 className="px-spc-b-20">
                We can&#39;t find the page you are looking for.
              </h1>
              <span className="px-spc-b-20">
                This page has been relocated or removed.
              </span>
              {/* <a onClick={()=>router.push("/")} className="go-home">Go Home</a> */}
              <a onClick={handleInput} className="go-home">
                Go Home
              </a>
            </div>
            <div className="colmun colmun-right">
              <Image
                src="/right-shape.png"
                className="right-shape"
                alt="right-shape"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
