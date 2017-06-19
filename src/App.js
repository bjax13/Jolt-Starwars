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
    let findHomeWorld = (planetID) => {
      for (var i = 0; i < this.state.planets.length; i++) {
        if (this.state.planets[i].id === planetID) {
          return this.state.planets[i].name
        }
      }
      return 'planet not found'
    }

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
            name={person.name}
            imageURL={("http://localhost:3008/" + person.image) }
            birthday={person.birth_year}
            homeWorld={findHomeWorld(person.homeworld)}/>
        })}

      </div>
    );
  }
}

export default App;
