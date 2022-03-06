import React, { useRef } from 'react';
import {useState, useEffect} from "react";
import Details from './Details.jsx';
import styles from "./Home.module.css";
import Search from './Search';
import Video from "./Video.jsx";


const Home = ({youtube}) => {
  const [check,setCheck] = useState(false);
  const [detail,setDetail] = useState(true);
  const [word, setWord] = useState("");
  const [videos, setVideos] = useState([]);
  const [myvideo, setMyvideo] = useState([]);
  
  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  },[])

  const inputValue = (event) =>{
    setCheck(false);
    const value = event.target.value;
    setWord(value);
  }
  const enterSearch = () =>{
    setCheck(true);
  }
  const search = () =>{
    setCheck(true);
  }

  const clickElement = (video) =>{
    console.log(video);
    setMyvideo(video);
    setCheck(false);
    setDetail(false);
  }
  const reset = () =>{
    setDetail(true);
  }

  return (
    <div className={styles.Home}>
      <div className={styles.navbar}> 
      <div className={styles.logo}>
        <img className={styles.img} src = "../../images\logo.png"
          onClick={reset}></img>
        <h1 className={styles.hi} onClick={reset}>Youtube</h1>
      </div>
      <input className={styles.text}
             type="search"
             placeholder = "Search..."
             onChange = {inputValue}
             onKeyPress = {enterSearch}
      ></input>
      <button className={styles.button}>
        <img className={styles.img2}
             src="../../images\search.png"
             onClick={search}></img>
      </button>
      </div>
      <div className={styles.body}>
      {!detail ? "" :
        <div>
      {check ? <Search word = {word}/> : 
        <div className={styles.vid}>
        {videos.map((video) => <Video 
        video = {video}
        key = {video.id}
        id = {video.id}
        onclickElement = {clickElement}
        />)}
        </div>
      }</div>}


      {detail ? "" :
        <div>
        <Details 
         key = {myvideo.id}
         myvideo = {myvideo} /></div>
      }
      
      </div>

    </div>
  );
};

export default Home;