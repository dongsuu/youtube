import React from 'react';
import Details from './Details.jsx';
import styles from './Video.module.css';
import {useState, useEffect} from 'react';

function Video(props){
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(props.video);
  },[]);

  const clickElement = ()=>{
    props.onclickElement(props.video);
  }
  return (
    <>
      <ul className={styles.list}>
      <li className={styles.video}
          onClick={clickElement}>
        <img className={styles.image}
             src={props.video.snippet.thumbnails.default.url}>
        </img>
        <h2 className={styles.title}>
          {props.video.snippet.title}</h2>
      </li>
      </ul>
      
    </>
  )
};
export default Video;