import React from 'react';

function Icon(props){
    const {
        color,
        size, 
    } = props
    
    return(
        <svg
            height = {size}
            width = {size}
            fill= {color}
            viewBox="0 0 32 32"
        >
            {console.log("HI")}
            {console.log(props.children)}
            {props.children}
        </svg>
    )
}

export default Icon;