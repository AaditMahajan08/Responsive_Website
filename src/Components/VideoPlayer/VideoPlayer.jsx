import React from 'react';
import './VideoPlayer.css';
import college_video from '../../assets/college-video.mp4';
import { useRef } from 'react';

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      {playState && <video src={college_video} autoPlay muted controls></video>}
    </div>
  );
};

export default VideoPlayer;