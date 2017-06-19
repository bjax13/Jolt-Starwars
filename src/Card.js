import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: true,
      planetOptions: this.props.homeWorld,
      name: this.props.name,
      birthday : this.props.birthday ,
      homeWorld : this.props.homeWorld,
    }
  }

  onEdit(){
    this.setState({
      editMode: !this.state.editMode
    })

  }
  onSave(element){
    element.preventDefault();
    console.log('card');

    this.props.onSaveEdit(this.props.id, this.refs.characterName.value, this.refs.characterBirthday.value, this.refs.characterHomeWorld.value)

  }

  onPlanetEditSelect(event){
    this.setState({planetOptions:event.target.value})

    console.log(event.target.value);
  }


  render() {
    let findHomeWorld = (planetID) => {
      for (var i = 0; i < this.props.planetList.length; i++) {
        if (this.props.planetList[i].id === planetID) {
          return this.props.planetList[i].name
        }
      }
      return 'planet not found'
    }

    let imageURL = this.props.imageURL;

    let editForm;

    if (this.state.editMode === true) {
      editForm = <form
        onSubmit={this.onSave.bind(this)}>
        <input type="text" ref="characterName"/> <span>:Name</span>
        <input type="text" ref="characterBirthday"/> <span>:Birthday</span>
        <select
          value={this.state.planetOptions}
          ref="characterHomeWorld"
          onChange={this.onPlanetEditSelect.bind(this)}>
          {this.props.planetList.map((planet)=>{
            return <option key={planet.id} value={planet.id}>{planet.name}</option>
          })}
        </select>

        <span>:Planet</span>
        <hr/>
        <button>Save</button>
      </form>
    }else {
      editForm = <div></div>
    }

    return (
      <div className='card'>
        <div className='card-content'>
          	<div className='card-name'>{this.state.name}</div>
          	<img src={imageURL} alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span>{this.state.birthday}</span>
            </p>
            <p>
                <span>Homeworld:</span>
                <span>{findHomeWorld(this.state.homeWorld)}</span>
            </p>
            <button type="button" onClick={this.onEdit.bind(this)}>edit</button>
            {editForm}
        </div>
    </div>

    );
  }
}

export default Card;
