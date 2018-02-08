import React, { Component } from "react";
import superagent from 'superagent';
// import Comments from '../../components/Comments'

class ExplorePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            imagesData: []
        }
    }
    
    componentDidMount() { 
        console.log('componentDidMount');
        // var imagesData;

        let request = superagent.get('/api/images');
        console.log(request);

        request.end(function(err, res){
            console.log(err, res);

            const imagesData = res.body;
            console.log("in request imagesData: " + imagesData);

            this.setState({ imagesData: imagesData });
            console.log(this.state);

        }.bind(this));
    }
  
  render() {

     const list = this.state.imagesData.map((image, i) => {
      return (
        <div key={i}>
          <img style={{width:200}} src={image.secure_url} />
        </div>
      );
    });


    return (
    	<div>
          {list}
	    </div>
    );
  }
}

export default ExplorePage;

          // <button onClick={this.handleClick} >CLICK ME</button>