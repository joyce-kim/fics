import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

class UploadPage extends Component {

  constructor() {
    super();
    this.state = {
      images: []
    };
  }
  
  uploadFile(files) {
    console.log('uploadFile: ');
    const image = files[0];

    const cloudName = 'ddn00kubl';
    const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

    const timestamp = Date.now()/1000
    const uploadPreset = 'qbs7mxp8';

    const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'dgK4gcLQX_6AupWSB7csv5R4U68';

    const signature = sha1(paramsStr);

    const params = {
      'api_key': '714671874936964',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    };

    let uploadRequest = superagent.post(url);
    uploadRequest.attach('file', image);

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    });

    uploadRequest.end((err, res) => {
      if (err){
        alert(err);
        return;
      }

      console.log("UPLOAD COMPLETE: " + JSON.stringify(res.body));
      const uploaded = res.body;

      let updatedImages = Object.assign([], this.state.images);
      updatedImages.push(uploaded);

      this.setState({
        images: updatedImages
      })
    })
  };

  // showImages() {
  //   var fetchURL = "https://res.cloudinary.com/" + cloudName + "/image/list/.json" + ;

  // }

  render() {

    const list = this.state.images.map((image, i) => {
      return (
        <li key={i}>
          <img style={{width:72}} src={image.secure_url} /> 
        </li>
      )
    })

    return (
      <div>
        <h1>This is where you upload food photos and their review</h1>
        <Dropzone 
          onDrop={this.uploadFile.bind(this)}
        />
        <ol>
          {list}
        </ol>
      </div>
    );
  }
}

export default UploadPage;