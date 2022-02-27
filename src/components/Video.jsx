import React from 'react';
import styles from './Video.module.css';


function Video(props){
  return (
      <ul className={styles.list}>
      <li className={styles.video}>
        <img className={styles.image}
             src={props.video.snippet.thumbnails.default.url}>
        </img>
        <h2 className={styles.title}>
          {props.video.snippet.title}</h2>
      </li>
      </ul>
  )
};
export default Video;