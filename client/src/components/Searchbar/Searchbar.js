import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  static defaultProps = {
    onSearch() {}
  }
  constructor(props){
    super(props);
    this.state = {
      searchTerm : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch({...this.state});
    this.setState({
      searchTerm : ''
    })
  }
  render() {
    const {searchTerm} = this.state;
    return (
      <div style={{marginBottom: '20px'}}>
        <form className="example" style={{margin:'auto',maxWidth:'300px'}} onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search.." name="searchTerm" onChange={this.handleChange} value={searchTerm} />
          <button type="submit"><i className="fa fa-search"/></button>
        </form>
      </div>
    );
  }
}

export default Searchbar;