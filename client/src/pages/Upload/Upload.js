import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

// import Imagefeed from '../../components/Imagefeed';

class UploadPage extends Component {
  //   constructor(props){
  //     super(props);

  //       this.state = {
  //     imagesData: []
  //   }

  // }
  

  // componentWillMount() { 
  //   console.log('componentdidmount');

  //   let request = superagent.get('/api/images');
  //   console.log(request);

  //   request.end(function(err, res){
  //     console.log(err, res);

  //     const imagesData = res.body;

  //     this.setState({ imagesData: imagesData});
  //     console.log(this.state);

  //   }.bind(this));
  // }
  
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
      'Content Type' : 'text/html',
      'api_key': '714671874936964',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    };

    // initialize the post request to cloudinary
    let uploadRequest = superagent.post(url);
    uploadRequest.attach('file', image);

    // packaging params into the post request
    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    });
    
    // make the request to cloudinary; 
    // then send our server the json response to push into our local storage
    uploadRequest.end((err, res) => {
      if (err) {
        alert(err);
        return;
      }

      console.log("UPLOAD COMPLETE: " + JSON.stringify(res.body));
      const uploaded = res.body;

      superagent.post('/api/images').send(uploaded).end((err, res) => {
        if (err) {
          alert(err);
          return;
        }

        console.log(res);
      });

      alert("Upload Complete!");
    });
  }   

  render() {

    // const list = this.imagesData.map((image, i) => {
    //   return (
    //     <li key={i}>
    //       <img style={{width:200}} src={image.url} />
    //     </li>
    //   );
    // });


    return (
      <div>
        <h1>This is where you upload food photos and their review</h1>
        <Dropzone 
          onDrop={this.uploadFile.bind(this)}
        />

      </div>
    );
  }
}

export default UploadPage;

// <button onClick={this.getFiles.bind(this)}>click me!</button>
//           {this.state.images}