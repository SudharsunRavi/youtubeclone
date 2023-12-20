import { useEffect, useState } from 'react'
import { YT_VIDEO_API } from '../constants';

const useGetVideos = () => {
    const [videos,setVideos]=useState([]);

  const getVideos=async()=>{
    const data=await fetch(YT_VIDEO_API)
    const jsonData=await data.json()
    //console.log(jsonData)
    setVideos(jsonData.items)
  }

  useEffect(()=>{
    getVideos()
  }, []);

    return videos;
}


export default useGetVideos