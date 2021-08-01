import { Component } from 'react';
import './App.css';
import Tictactoe from './TIC/Tictactoe';



//import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
/*
class App extends Component{
  componentDidMount(){
    console.log('mounted')
  }
  consolelog(){
    console.log('hurray');
  }
  render(){
   var man="tosin";
   var animal="cat";
   var array=["i","offer","serval courses"];
   return(
     <div className="fa fa-search searchIcon">
       <p style={{fontsize:"30px"}}>{man} say's his indifferent </p>
       <img src={logo} alt="logo" className="App-logo"/>
       <p>(man)</p>
     
       <span className="searchinput"> search</span>
       <input type="text" placeholder="search'.." className="" />
     </div>
   )
  }
 
}
export default App;
*/

class App extends Component{
  render(){
    
      return(
      <div>
        
         <Tictactoe />

        
      </div>
    );
  }
}

export default App;


