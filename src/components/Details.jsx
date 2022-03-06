import React from 'react';
import styles from './Details.module.css';
import {useState, useEffect} from 'react';
document.cookie = "safeCookie1=foo; SameSite=Lax"; document.cookie = "safeCookie2=foo"; document.cookie = "crossCookie=bar; SameSite=None; Secure";

const Details = (props) => {
console.log(props.myvideo.id);
console.log(props.myvideo.id.videoId);
if(typeof(props.myvideo.id) =="string"){
 var str=`https://www.youtube.com/embed/${props.myvideo.id}`
}
else{
  var str=`https://www.youtube.com/embed/${props.myvideo.id.videoId}`
}
console.log(str);
  return (
    <div className={styles.item}>
      <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={str}
  frameBorder="0"></iframe>
      <h1>{props.myvideo.snippet.title}</h1>
      
    </div>
  );
};

export default Details;