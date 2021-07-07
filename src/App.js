import React, {Component} from 'react';
import './App.css';
import Main from'./Components/Main.js';



export default class App extends Component{
  render(){
    return <div className="App">
      <header className="App-header">
         <Main></Main>
      </header>
      
    </div>
  }
}
