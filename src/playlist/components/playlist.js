import React, {Component} from 'react';
import Media from './media';
import  './playlist.css';
import Play from '../../icons/components/Play'

function Playlist(props){
    const playlist1 =  props.data.categories[0].playlist
    const playlist2 =  props.data.categories[1].playlist
    const playlist3 = props.data.categories[2].playlist
    return(
        <div className="Playlist">
        <Play size ={50} color="blue" ></Play>
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