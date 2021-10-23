import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';
export default class App extends Component {
  constructor() {
    super();
  this.state = {
    monsters: [],
    searchField: '',
    darkMode:false
  }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({ monsters: users })})
    
  }

  handleSearch = (e) =>{
    this.setState({ searchField: e.target.value })
  }
  toggleDarkMode = () => {
    this.setState({darkMode: !this.state.darkMode})
  }

  render() {
    const { monsters, searchField, darkMode } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
     
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <div className="header">
        <div>
    <input type="checkbox" className="checkbox" id="checkbox" onChange={this.toggleDarkMode}/>
  <label htmlFor="checkbox" className="label">
    <i className='fas fa-sun'></i>
    <i className="fas fa-moon"></i>
    <div className='ball'>
</div>
  </label>
  </div>
        <h1 className="heading">Monsters Rolodex</h1>
        <span className="dark-mode-toggle" onClick={this.toggleDarkMode}></span>
        </div>
        <Search placeholder="search" handleChange={this.handleSearch} />
        <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
}

