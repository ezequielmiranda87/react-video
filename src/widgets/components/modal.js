import React from 'react';
import './modal.css';

function Modal(props){
    return(
        <div className="Modal">
            {props.children}
            {
            // Los componentes funcionales no deben manejar sus eventos, deben recibirlos por medio de props
            }
            <button
                className="Modal-close"
                onClick={props.handleClick}/>
        </div>
    )
}

export default Modal;
