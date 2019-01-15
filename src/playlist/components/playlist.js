import React, {Component} from 'react';
import Media from './media';
import  './playlist.css';

export default class Playlist extends Component {
    constructor(props){
        super(props)
        this.state = {data : this.props.data}
    }

    render(){
        const playlist =  this.state.data.categories[1].playlist
        console.log(this.state.data)
        return(
            <div className="Playlist">
                <h1>Title</h1>
                {playlist.map((element, index)=>{
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
}