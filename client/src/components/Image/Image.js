import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Image.css';

class Image extends Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render(){
    return(
      <div className='food'>
      <img src={this.props.src} data-id={this.props.id} onClick={this.handleOpenModal}/>
      <ReactModal
        isOpen={this.state.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.handleCloseModal}
        style={{
          overlay: {
            backgroundColor: 'papayawhip'
          },
          content: {
            color: 'lightsteelblue'
          }
        }}
      >
      <p>this is image #{this.props.id}</p>
      <button onClick={this.handleCloseModal}
      style = {{
        position: 'absolute',
        bottom: '5px',
        left: '50%',
        right: '0%',
        textAlign: 'center'
      }}
      >Save</button>
      </ReactModal>
      </div>
    )
  }
}

export default Image