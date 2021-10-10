import React,  {Component} from 'react';
import './App.css';
import List from './List';
import Tictactoe from './TIC/Tictactoe';
import './Tictactoes.css';
import Tic from './TIC/Tic';


class App extends Component{
  render(){
    
      return(
      <div>
         <List/>
<Tic/>
         <br/>
         <br/>
         <Tictactoe/>
      </div>
    );
  }
}

export default App;
