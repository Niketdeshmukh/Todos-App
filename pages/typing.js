import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Styles from "../styles/typing.module.css";
const typing = () => {
    // define the time limit
let TIME_LIMIT = 60;
 
// define quotes to be used
let quotes_array = [
  "Push yourself, because no one else is going to do it for you.",
  "Failure is the condiment that gives success its flavor.",
  "Wake up with determination. Go to bed with satisfaction.",
  "It's going to be hard, but hard does not mean impossible.",
  "Learning never exhausts the mind.",
  "The only way to do great work is to love what you do."
];
 
// selecting required elements
let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");
 
let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;
  return (
    
    <>
      <Head>
        <title>Typing Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="image__styling"></div>
      <div className={Styles.container}>
        <div className={Styles.heading}>Simple Speed Typing</div>
        <div className={Styles.header}>
          <div className={Styles.wpm}>
            <div className={Styles.header_text}>WPM</div>
            <div className={Styles.curr_wpm}>100</div>
          </div>
          <div className={Styles.cpm}>
            <div className={Styles.header_text}>CPM</div>
            <div className={Styles.curr_cpm}>100</div>
          </div>
          <div className={Styles.errors}>
            <div className={Styles.header_text}>Errors</div>
            <div className={Styles.curr_errors}>0</div>
          </div>
          <div className={Styles.timer}>
            <div className={Styles.header_text}>Time</div>
            <div className={Styles.curr_time}>60s</div>
          </div>
          <div className={Styles.accuracy}>
            <div className={Styles.header_text}>%Accuracy</div>
            <div className={Styles.curr_accuracy}>100</div>
          </div>
        </div>

        <div className={Styles.quote}>
          Click on the area below to start the game.
        </div>
        <textarea
          className={Styles.input_area}
          placeholder="start typing here..."
          oninput="processCurrentText()"
          onfocus="startGame()"
        ></textarea>
        <button className={Styles.restart_btn} onclick="resetValues()">
          Restart
        </button>
      </div>
    </>
  );
};

export default typing;
