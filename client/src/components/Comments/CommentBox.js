import React, { Component } from 'react';
import axios from "axios";


class CommentBox extends Component {
	constructor(){
		super();
		this.state = {commentText: ''};
	}

	submitComment(event){
		let pictureId = this.props.pictureId;
		console.log("text");
		axios.post('/api/images/' + pictureId + '/comment', {
			"commentText" : this.state.commentText
		});
	}
	textChange(event){
		this.setState({commentText: event.target.value});
		console.log(event.target.value);
	}
	render(){
		return (
			<div id="comment-box">
				<textarea onChange={this.textChange.bind(this)}></textarea>
				<button onClick={this.submitComment.bind(this)}></button>
			</div>

		)
		
	}
}

export default CommentBox