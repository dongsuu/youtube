import React from 'react';
import Details from './Details.jsx';
import styles from './Search.module.css';
import {useState, useEffect} from "react";
import Video from './Video.jsx';
function Search({word}) {
  const [video,setVideo] = useState([]);
  const [myvideo, setMyvideo] = useState([]);
  const [detail, setDetail] = useState(true);
const search = () =>{
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${word}&type=video&key=AIzaSyCRf5XIDcK_xBh7glS1WV2aMAIhU0GDSl4`, requestOptions)
      .then(response => response.json())
      .then(result => setVideo(result.items))
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
}
useEffect(() =>{
  search();
},[])

const clickElement = (video) =>{
  console.log(video);
  setMyvideo(video);
  setDetail(false);
}
const previous = () =>{
  setDetail(true);
}

  return (
    <div className="search">
      <div className={styles.videos}>
      {!detail ? "": 
      <div>
      {video.map(video=><Video 
        video = {video}
        key = {video.id}
        id = {video.id}
        onclickElement = {clickElement}
        />)}</div>}</div>

      {detail ? "" :
        <div>
        <button onClick={previous}>Previous Page</button>
        <Details 
         key = {myvideo.id}
         myvideo = {myvideo} /></div>
      }
    </div>
  );
}

export default Search;