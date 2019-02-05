import React from 'react';

import './video-player-layout.css'

const VideoPlayerLayout = (props) => 
(
    <div clasName="VideoPlayer">
        {props.children}
    </div>
)
export default VideoPlayerLayout;