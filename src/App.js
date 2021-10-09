import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
export default class App extends Component {
  constructor() {
    super();
  this.state = {
    monsters: [
      {
        name:'aa',
        id: '1',
      },
      {
        name:'ba',
        id: '2',
      },
      {
        name:'ca',
        id: '3',
      }
    ]
  }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {console.log(users);this.setState({ monsters: users })})
    
  }
  render() {
    return (
      <div className="App">
  <CardList monsters={this.state.monsters}/>
    </div>
    )
  }
}

