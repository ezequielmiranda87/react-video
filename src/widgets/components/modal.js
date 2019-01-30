import React from 'react';
import './modal.css';

function Modal(props){
    return(
        <div className="Modal">
            Esto es un modal
            {props.children}
            {
            // Los componentes funcionales no deben manejar sus eventos, deben recibirlos por medio de props
            }
            <button onClick={props.handleClick}>Cerrar</button>
        </div>
    )
}

export default Modal;
