import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';
export default class App extends Component {
  constructor() {
    super();
  this.state = {
    monsters: [],
    searchField: ''
  }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({ monsters: users })})
    
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
     
      <div className="App">
        <Search placeholder="search" handleChange={e=>this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
}

