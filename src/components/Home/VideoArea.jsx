import React from 'react';
import ReactPlayer from 'react-player';

const VideoArea = () => {
  return (
    <div className="video-area">
      <img className="imageParallax" src="/assets/images/video/vide-bg.jpg" alt="Video Background" />
      <div className="video-play-btn">
        <a className="play_btn" onClick={() => window.open('https://www.youtube.com/watch?v=B-ytMSuwbf8', '_blank')}>
          <i className="icon-arrow-right video-play-icon"></i>
          <span>Play</span>
        </a>
      </div>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=B-ytMSuwbf8'
        className='react-player'
        width='100%'
        height='100%'
        controls
      />
    </div>
  );
};

export default VideoArea;