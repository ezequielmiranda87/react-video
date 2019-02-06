import React, {Component} from 'react';
import Search from '../components/search';

class SearchContainer extends Component{
    state={
        value : "default"
    }

    // set referencias de elementos html del componente presentacional en el componente container
    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = event =>{
        this.setState({
            value: event.target.value.replace(" ", "-")
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input, "Submit")
    }
    
    render(){
        return(
            <Search
                handleSubmit={this.handleSubmit}
                setRef = {this.setInputRef}
                handleChange = {this.handleInputChange}
                value={this.state.value}
            >
            </Search>
        )
    }
}

export default SearchContainer;