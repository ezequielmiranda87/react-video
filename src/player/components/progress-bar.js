import React from 'react';
import './progress-bar.css'
import HandleError from '../../error/containers/handle-error';

function ProgressBar({duration, value, handleProgressChange}){

    return(
        <div className="ProgressBar"> 
            <input 
                type="range"
                min={0}
                max={duration}
                value={value}
                onChange={handleProgressChange}
            />
        </div>
    )
}

export default ProgressBar