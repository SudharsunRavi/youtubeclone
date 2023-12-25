import React from 'react'

const VideoCard = ({info}) => {
    //console.log(info)

    if (!info) return null;
    const{statistics, snippet}=info
    const {title, channelTitle, thumbnails}=snippet
    const {viewCount}=statistics

  return (
    <div className='ml-5 my-4 w-[340px] h-[300px]'>
        <div>
            <img src={thumbnails.medium.url} alt="thumbanil" className='rounded-xl'/>
        </div>
        
        <div className='ml-2'>
            <h4 className='font-semibold mt-2'>{title}</h4>
            <p className='text-gray-500'>{channelTitle}</p>
            <p className='text-gray-500'>{viewCount}</p>
        </div>
    </div>
  )
}

export default VideoCard