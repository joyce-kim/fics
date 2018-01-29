import React, { Component } from 'react';
import './Searchbox.css';
import Searchbar from "../Searchbar"
import Searchresults from "../Searchresults"

class Searchbox extends Component{
  constructor(props){
    super(props);
    this.state ={
      searchTerm : ''
    }
    this.handleSearchEvent = this.handleSearchEvent.bind(this);
  }
  handleSearchEvent(e){
    console.log(e)
    this.setState({
        searchTerm : e.searchTerm
      }
    )
  }
  render(){
    return(
      <div>
        <Searchbar onSearch={this.handleSearchEvent}/>
        <Searchresults />
      </div>
    )
  }
}

export default Searchbox