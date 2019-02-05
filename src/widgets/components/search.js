import React from 'react';
import './search.css'

const Search = (props) => (
    <form 
        action=""
        className="Search"
        onSubmit={props.handleSubmit}
        >
        <input
            type="text"
            className="Search-input"
            placeholder="Buscá tu video favorito"
            // Esta propiedad de react se utiliza para crear referencias a elementos html y evey eventos.
            // Cuando el componente se renderiza se setea una referencia dentro de esta propiedad
            ref = {props.setRef} 
            onChange = {props.handleChange}
            value = {props.value}
        />
    </form>
)

export default Search;