import React,  {Component} from 'react';
import './App.css';
import Tic from './TIC/Tic';
import Tictactoe from './TIC/Tictactoe';
import './Tictactoes.css';

class App extends Component{
  render(){
    
      return(
      <div>
         <Tic/>

         <br/>
         <br/>
         <Tictactoe/>
      </div>
    );
  }
}

export default App;
