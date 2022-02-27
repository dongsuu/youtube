import React from 'react';
import styles from './Details.module.css';
import {useState, useEffect} from "react";

const Details = (props) => {


  return (
    <div className={styles.item}>
      <ul className={styles.list}>
      <li className={styles.video}>
        <img className={styles.image}
             src={props.video.snippet.thumbnails.default.url}>
        </img>
        <h2 className={styles.title}>
          {props.video.snippet.title}</h2>
      </li>
      </ul>
    </div>
  );
};

export default Details;