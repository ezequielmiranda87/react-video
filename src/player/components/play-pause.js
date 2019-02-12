import React from 'react';
import Play from '../../icons/components/Play';
import Pause from '../../icons/components/Pause';
import './play-pause.css';



const PlayPause = ({handleClick, pause}) =>
    <div className="PlayPause">
        {
            //IF ternario => pause === true
            pause ?
                <button
                    onClick={handleClick}
                >
                    <Play size={25} color="white"/>
                </button>
            :
                <button
                    onClick={handleClick}
                >
                    <Pause size={25} color="white"/> 
                </button>
        }

    </div>

export default PlayPause;