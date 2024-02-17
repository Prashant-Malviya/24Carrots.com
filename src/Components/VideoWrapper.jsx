import React from 'react';
import video from '../assets/videos/24carrtos-home-banner.mp4';

const VideoWrapper = () => {
  return (
    <div className="video-wrapper relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full absolute top-0 left-0 object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <p className="text-4xl font-bold">Simply The Finest</p>
      </div>
    </div>
  );
};

export default VideoWrapper;
