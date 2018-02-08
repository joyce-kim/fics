import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

// import Imagefeed from '../../components/Imagefeed';

class UploadPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      restaurantValue: '',
      dishValue: '',
      typeValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleChange = (name, event) => {
    this.setState({...this.state, [name]: event.target.value});
  };
  
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
    // then send our server the json response to push into mongo db
    uploadRequest.end((err, res) => {
      if (err) {
        alert(err);
        return;
      }

      console.log("UPLOAD COMPLETE: " + JSON.stringify(res.body));

      const uploaded = {
        public_id: res.body.public_id,
        secure_url: res.body.secure_url,
        timestamp: res.body.created_at,
        restaurantname: this.state.restaurantValue,
        dishname: this.state.dishValue,
        foodtype: this.state.typeValue
      }

      console.log(uploaded);

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

    return (
      <div>
        <h1>Upload Your Food Image Here!</h1>
        <form>
          <label>
            Restaurant Name:
              <input type="text" value={this.state.restaurantValue} onChange={this.handleChange.bind(this,'restaurantValue')} />
          </label>
           <label>
            Name of Dish:
              <input type="text" value={this.state.dishValue} onChange={this.handleChange.bind(this,'dishValue')} />
          </label>
          <label>
            Food Type:
              <input type="text" value={this.state.typeValue} onChange={this.handleChange.bind(this,'typeValue')}  />
          </label>
        </form>
        <label>Click or Drag & Drop Photo Here to Complete Submit</label>
        <Dropzone 
          onDrop={this.uploadFile.bind(this)}
        />
        
      </div>
    );
  }
}

export default UploadPage;