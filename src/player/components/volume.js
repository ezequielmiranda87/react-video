import React from 'react';
import  './volume.css'
import VolumeIcon from '../../icons/components/Volume';


function Volume(props){
    return(
        <button
            className="Volume"
        >
            <VolumeIcon
                color ="white"
                size  ="25"
            />
            <div className="Volume-range">
                <input
                    type ="range"
                    step={.05}
                    min = {0}
                    max = {1}
                    onChange = { props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volume;