import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'
import './video.css'


function Video({url, channel, description, song, likes, shares, messages}){
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress=()=>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return(
        <div className='video' >
            <video
            ref={videoRef}
            onClick={handleVideoPress}
            className='video__player'
            loop
             src={url} ></video>
           < VideoFooter channel={channel} description={description} song={song}/>
            <VideoSideBar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video 