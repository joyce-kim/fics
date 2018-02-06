import React, { Component } from 'react';
import Image from "../Image"
import './Searchresults.css';
import CommentBox from '../Comments/CommentBox';

class Searchresults extends Component {
  constructor(props){
    super(props);
    this.state = {
      images : this.props.images
    }
  }
  render() {
    const {images} = this.props;
    const imgList = images.map((image, index) => (
      <div>
        <Image id={image.id} src={image.previewURL} key={index} />
        <CommentBox pictureId={image.id} key={index} />
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