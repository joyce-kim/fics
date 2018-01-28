import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastSearch : ''
    }
  }
  render() {
    return (
      <div>
      <form className="example" style={{margin:'auto',maxWidth:'300px'}}>
  <input type="text" placeholder="Search.." name="search2"/>
  <button type="submit"><i className="fa fa-search"/></button>
</form>

      </div>
    );
  }
}

export default Searchbar;