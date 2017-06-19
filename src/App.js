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
      searchText: "",
      viewPage:1,
      favCount: 0
    }
  }



  componentDidMount(){
    this.getPeople(this.state.viewPage,this.state.searchText)

    this.getPlanets()
  }

  onSearch(text){
    this.setState({
      searchText: text,
      viewPage: 1,
    })
    this.getPeople(this.state.viewPage,this.state.searchText)
  }

  getPeople(page, search){
    axios.get('http://localhost:3008/people?_page='+ page +'&q=' + search).then((response)=>{
      this.setState({
        characters: response.data
      })
    })
  }
  getPlanets(){
    axios.get('http://localhost:3008/planets').then((response)=>{
      this.setState({
        planets: response.data
      })
    })
  }

  onSaveEdit(id, name, birthday, world){
    axios.patch("http://localhost:3008/people/"+ id , {
      name: name,
      birth_year: birthday,
      homeworld: world,
    }).then((response)=>{

      this.getPeople(1,'')
    })


  }



  render() {

    return (

      <div className='content'>
        <div className= "favCount">
          Count of Favs
          {" "+this.state.favCount}
        </div>
        <div className='logo'>
          <img src={star} alt="star-logo" />
          <span className='interview-text'>The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <SearchBar
          searchText={this.state.searchText}
          onSearch={this.onSearch.bind(this)}/>


        {this.state.characters.map((person) =>{
           return <Card
            key={person.id}
            id={person.id}
            onSaveEdit={this.onSaveEdit.bind(this)}
            name={person.name}
            fav={false}
            imageURL={("http://localhost:3008/" + person.image) }
            birthday={person.birth_year}
            planetList={this.state.planets}
            homeWorld={person.homeworld}/>
        })}

      </div>
    );
  }
}

export default App;
