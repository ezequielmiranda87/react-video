import React from  'react';
import Playlist from '../../playlist/components/playlist'
function Category(props){
    return(
        <div>
            <p>{props.decription}</p>
            <h2></h2>
                <Playlist
                    playlist={props.playlist}
                />
        </div>
    )
}

export default Category;