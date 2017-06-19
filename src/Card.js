import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: false,
    }
  }

  onEdit(){
    this.setState({
      editMode: !this.state.editMode
    })
    
  }
  onSaveEdit(element){
    console.log('saved');
    element.preventDefault();
  }


  render() {
    let name = this.props.name || "test";
    let imageURL = this.props.imageURL || "http://localhost:3008/darth_vader.jpg";
    let birthday = this.props.birthday || "test";
    let homeWorld = this.props.homeWorld || "test";

    let editForm;

    if (this.state.editMode === true) {
      editForm = <form
        onSubmit={this.onSaveEdit.bind(this)}>
        <input type="text" ref="characterName"/> <span>:Name</span>
        <input type="text" ref="characterBirthday"/> <span>:Birthday</span>
        <input type="text" ref="cha"/> <span>:Planet</span>
        <hr/>
        <button>Save</button>
      </form>
    }else {
      editForm = <div></div>
    }

    return (
      <div className='card'>
        <div className='card-content'>
          	<div className='card-name'>{name}</div>
          	<img src={imageURL} alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span>{birthday}</span>
            </p>
            <p>
                {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
                <span>Homeworld:</span>
                <span>{homeWorld}</span>
            </p>
            <button type="button" onClick={this.onEdit.bind(this)}>edit</button>
            {editForm}
        </div>
    </div>

    );
  }
}

export default Card;
