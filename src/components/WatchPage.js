import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/redux/appSlice'
import { useSearchParams } from 'react-router-dom'
import { YT_API_KEY } from '../utils/constants'
import CommentsContainer from './commentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const [videoData, setVideoData] = useState([])
    const[videoId]=useSearchParams()
    //console.log(videoId.get('v'))

    const dispatch=useDispatch()

    const particularVideoData=async()=>{
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+YT_API_KEY+"&id="+videoId.get('v'))
        const jsonData=await data.json()
        //console.log(jsonData.items)
        setVideoData(jsonData.items)
        
    }

    useEffect(()=>{
        dispatch(closeMenu())
        particularVideoData()
    },[])

    //console.log(videoData[0])
    if (!videoData[0]) return null
    const{statistics, snippet}=videoData[0]
    const {title, channelTitle, thumbnails}=snippet
    const {viewCount}=statistics

  return (
    <div className='ml-16 mt-16 w-full'>
        <div className='flex'>
            <div>
                <iframe
                    className='rounded-xl shadow-lg'
                    width="900" 
                    height="475" 
                    src={"https://www.youtube.com/embed/"+videoId.get('v')} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                />
            </div>

            <div className='w-full'>
                <LiveChat/>
            </div>
            
        </div>

        <div>
            <h1>{title}</h1>
        </div>

        <div>
            <CommentsContainer/>
        </div>
        
    </div>
  )
}

export default WatchPage