import React from  'react';
import Playlist from '../../playlist/components/playlist'
import './category.css'

function Category(props){
    return(
        <div className="Category">
            <h2 className="Category-title">{props.title}</h2>
            <p className="Cagtegory-description">{props.decription}</p>
            <Playlist
                playlist={props.playlist}
                handleOpenModal = {props.handleOpenModal}
            />
        </div>
    )
}

export default Category;