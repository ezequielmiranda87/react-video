import React, {Component} from 'react';

class Video extends Component{
    render(){
        return(
            <div className="Video">
                <video
                    autoPlay ={this.props.autoplay}
                    controls
                    src = {this.props.src}
                    />
                    
            </div>

        )
    }
}

export default Video;