import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';
import useGetVideos from '../utils/hooks/useGetVideos';

const VideoContainer = () => {
  const videos=useGetVideos();
  if (!videos) return null;

  return (
    <div className='flex flex-wrap justify-start'>
      {videos.map((video)=>{
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer