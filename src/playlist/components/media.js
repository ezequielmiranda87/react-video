import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends PureComponent{

    constructor(props){
        super(props)       
        /*
            this.state = {
                author: props.author,
            }
            this.handleClick = this.handleClick.bind(this) 
        */
    }

    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['video', 'audio'])
    }

    state = {

    }


    handleClick = (e)=>{
    this.props.openModal(this.props);
    // Using Arrow function, we don't need bind the context
    // ES7 Arrow function always inherit the parent context
    //console.log(this) // Media 
    //console.log(this.props.image)
    }

    render(){
        /*
        const styles = {
            container: {
                fontSize: '14px',
                backgroundColor: 'white',
                color:'#44546b',
                cursor: 'pointer',
                width: '260px',
                border: '1px solid red'
            }
        }
        */
        return(
            <div className="Media" onClick={this.handleClick}> 
                <div className="Media-cover">
                    <img className="Media-image"
                        src={this.props.image}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

export default Media;