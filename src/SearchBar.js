import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
      <input
        type="text"
        value={this.props.searchText}
        placeholder='Search Your Destiny' />
      </div>
    );
  }
}

export default SearchBar;
