import React, { Component } from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {term:''}
    }
    render() {
        return (
        <div>
        <input className="search-bar"
        value = {this.state.term}
        onChange={event => this.search(event.target.value)}/>
        </div>
    );
    }

    search(term){
        this.setState({term})
        this.props.onTextChange(this.state.term)
    }

}

export default SearchBar