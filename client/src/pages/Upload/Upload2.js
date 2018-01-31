import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import { CloudinaryContext, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'ddn00kubl'});


class UploadPage2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <h1>hi</h1>
    );
  }
}

export default UploadPage2;