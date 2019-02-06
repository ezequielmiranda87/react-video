import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';

class VideoPlayer extends Component{
    state = {

    }

    render(){
        return(
            <VideoPlayerLayout>
                <Title
                title="Esto Es un titulo"
                >
                </Title>
                    <Video
                        autoplay = {false}
                        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    />
            </VideoPlayerLayout>
        )
    }

}

export default VideoPlayer;