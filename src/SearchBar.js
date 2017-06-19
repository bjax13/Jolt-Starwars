import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  handleChange(text) {
    this.props.onSearch(text.target.value)
  }

  render() {
    return (
      <div className='search-bar'>
      <input
        type="text"
        value={this.props.searchText}
        placeholder='Search Your Destiny'
        onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default SearchBar;
