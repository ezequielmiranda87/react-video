import React from 'react';
import './spinner.css';

function Spinner({active}){
    if(!active) return null
    
    return(
        <div className="Spinner">
            <span>Cargando</span>
        </div>
    )
}

export default Spinner 