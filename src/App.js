import React,  {Component} from 'react';
import './App.css';
import './Tictactoes.css';
import Hooks from './Hooks';
import Tictactoe from './TIC/Tictactoe';


class App extends Component{
  render(){
    
      return(
      <div>
        <Tictactoe/>
        <br/>
        <Hooks/>
      </div>
    );
  }
}

export default App;
