import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import './video.css'

function Video(){
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
             src="https://media.istockphoto.com/videos/heads-speaking-video-id1193901766" ></video>
           < VideoFooter/>
            {/* VideoSidebar */}
        </div>
    )
}

export default Video 