import React, { Component } from 'react';
import './Searchresults.css';

class Searchresults extends Component {
  constructor(props){
    super(props);
    this.state = {
      images : this.props.images
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if(this.props != nextProps) {
  //     this.setState({
  //       images: nextProps.images
  //     });
  //   }
  // }
  render() {
    const {images} = this.props;
    const imgList = images.map((image, index) => (
      <div className='food' key={index} >
        <img src={image.previewURL} />
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