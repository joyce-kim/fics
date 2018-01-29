import React, { Component } from 'react';
import './Searchresults.css';

class Searchresults extends Component {
  constructor(props){
    super(props);
    this.state = {
      images : [

      ]
    }
  }
  render() {
    const {images} = this.state;
    const imgList = images.map((image, index) => (
      <div className='food' key={index} >
        <img src={image} />
      </div>
      ));
    return (
      <div className='food-list'>
        {imgList}
      </div>
    );
  }
}

export default Searchresults;