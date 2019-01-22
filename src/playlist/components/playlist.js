import React, {Component} from 'react';
import Media from './media';
import  './playlist.css';
import Play from '../../icons/components/Play'
import Volume from '../../icons/components/Volume'
import Pause from '../../icons/components/Pause'
import FullScreen from '../../icons/components/FullScreen'

function Playlist(props){
    
    const playlist1 =  props.data.categories[0].playlist
    const playlist2 =  props.data.categories[1].playlist
    const playlist3 = props.data.categories[2].playlist

    return(
        <div className="Playlist">
            <Play size ={50} color="black" ></Play>
            <Volume size = {50} color="black"></Volume>
            <Pause size = {50} color="black"></Pause>
            <FullScreen size = {50} color="black"></FullScreen>

        <h1>Title</h1>

        {playlist1.map((element, index)=>{
            return <Media 
                        key={index}
                        title={element.title}
                        author= {element.author}
                        image= {element.cover}
                    />
        })}
        
    </div>
    )
}

export default Playlist;