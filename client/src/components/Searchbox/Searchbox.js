import React, { Component } from 'react';
import './Searchbox.css';
import Searchbar from "../Searchbar"
import Searchresults from "../Searchresults"
import axios from "axios";

class Searchbox extends Component{
  constructor(props){
    super(props);
    this.state ={
      searchTerm : '',
      images : []
    }
    this.handleSearchEvent = this.handleSearchEvent.bind(this);
  }
  handleSearchEvent(e){
    const baseUrl = 'https://pixabay.com/api/';
    const kellogs = '4160246-1b8633e76b7538c764c98bc2b';
    let query = `${baseUrl}?key=${kellogs}&q=${e.searchTerm}`
    axios
      .get(query)
      .then(response =>{
        this.setState({
          searchTerm : e.searchTerm,
          images : response.data.hits
        })
      })
      .catch(err => {
        return err
      }
    )
  }
  render(){
    let {images} = this.state;
    this.state.images = [];
    return(
      <div>
        <Searchbar onSearch={this.handleSearchEvent}/>
        <Searchresults images={images}/>
      </div>
    )
  }
}

export default Searchbox