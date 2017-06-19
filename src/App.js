import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import SearchBar from "./SearchBar.js"
import star from './images/star.svg';
import wars from './images/wars.svg';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      planets: [],
    }
  }



  componentDidMount(){
    axios.get('http://localhost:3008/people').then((response)=>{
      console.log("people");
      console.log(response.data);

      this.setState({
        characters: response.data
      })
    })

    axios.get('http://localhost:3008/planets').then((response)=>{

      console.log("planets");
      console.log(response.data);

      this.setState({
        planets: response.data
      })
    })
  }



  render() {
    return (
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo" />
          <span className='interview-text'>The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <SearchBar />


        {this.state.characters.map((person) =>{
           return <Card
            name="darth Pork"
            imageURL="http://68.media.tumblr.com/df7d6121a453c11a415fb1d5866bbf08/tumblr_mw9j7dJ1ZM1rha1xmo1_500.jpg"
            birthday="pigDay"
            homeWorld="earth"/>
        })}
        <Card
          name="darth Pork"
          imageURL="http://68.media.tumblr.com/df7d6121a453c11a415fb1d5866bbf08/tumblr_mw9j7dJ1ZM1rha1xmo1_500.jpg"
          birthday="pigDay"
          homeWorld="earth"/>
      </div>
    );
  }
}

export default App;
