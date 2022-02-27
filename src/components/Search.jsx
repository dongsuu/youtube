import React from 'react';
import Details from './Details.jsx';
import styles from './Search.module.css';
import {useState, useEffect} from "react";

function Search({word}) {
  const [video,setVideo] = useState([]);

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

  return (
    <div className="search">
      <div className={styles.videos}>
      {video.map(video=><Details 
        video = {video}
        key = {video.id}
        id = {video.id}
        />)}</div>
    </div>
  );
}

export default Search;