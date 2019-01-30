import React, {Component} from 'react';
import Media from './media';
import  './playlist.css';
import Play from '../../icons/components/Play'
import Volume from '../../icons/components/Volume'
import Pause from '../../icons/components/Pause'
import FullScreen from '../../icons/components/FullScreen'

function Playlist(props){

    return(
        <div className="Playlist">
        {props.playlist.map((element, index)=>{
            return <Media 
                        handleClick = {props.handleOpenModal}
                        key={index}
                        title={element.title}
                        author= {element.author}
                        image= {element.cover}

                        //CHange for spread operator
                    />
        })}
        
    </div>
    )
}

export default Playlist;