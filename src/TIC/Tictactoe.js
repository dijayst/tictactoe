import { Component } from "react";
import './Tictactoes.css';
// import{Contextment,Menuitem,ContextMenuTrigger}from "react-contextmenu ";


class Tictactoe extends Component {
 constructor(props){

   super(props);
   this.state={
     player1:"+",
     player2:'+',
     player3:"+",
     player4:'+',
     player5:"+",
     player6:'+',
     player7:"+",
     player8:'+',
     player9:"+"
   }

 }

 /*changebutton1(){
   if(this.state.player1==="+"){
     this.setState({
      player1:"X"
      })
   }
   else{
    this.setState({
      player1:"O"
      })
   }
 }
*/
 
/*
 clickhandle=(e)=> {
   if(player1== "+"){
document.getElementById(e).innerHTML="X";
   }
   else{document.getElementById(e).innerHTML="O"

 }
*//*
changebutton1(){
  this.setState({
    player1:'X'
  })
}*/

changebutton1=()=>{
  this.setState({
    player1:"X"
    })
}

/*
changebutton1=(e)=>{e.preventDefault();
  if(e.which===1){
    return(this.setState({player:'X'}))
  }
  else{
     return(this.setState({play:'O'}))
  

  }
}
*/
changebutton2(){
  this.setState({
    player2:'X'
  })
}

changebutton3(){
  this.setState({
    player3:'O'
  })
}

/*
handleClick: function(e) {
  if (e.type === 'click') {
    console.log('Left click');
  } else if (e.type === 'contextmenu') {
    console.log('Right click');
  }
}*/

  

changebutton4(){
  this.setState({
    player4:'O'
  })
}

changebutton5(){
  this.setState({
    player5:'X'
  })
}

changebutton6(){
  this.setState({
    player6:'O'
  })
}

changebutton7(){
  this.setState({
    player7:'O'
  })
}

changebutton8(){
  this.setState({
    player8:'O'
  })
}

changebutton9(){
  this.setState({
    player9:'X'
  })
}


/*
 let button1 = document.querySelector("button1");
  button1.addEventListener("mousedown", event => {
    if (event.button1 == 0) {
      return("changebutton1");
    } else if (event.button == 1) {
      console.log("Middle button");
    } else if (event.button == 2) {
      console.log("Right button");
    }
  });
*/


 /*if right is clicke print X a   (switch case)
     then if statement inside switch case,
*/


    render(){

      
/*
function right(e){
		if(e.button = 0) {// fake left button press
			this.onClick(e)}
		}
changebutton1=()=>{

}

*/
/*
$(document).ready(function() {
$('#button1').mousedown(function(event){
    switch (event.which) {
        case 1:
            return(
            <button  oncontextmenu="event.preventDefault()" onClick={this.changebutton1} ></button>
           );
            break;
        case 2:
            alert('Middle mouse button pressed');
            break;
        case 3:
            alert('Right mouse button pressed');
            break;
        default:
           break;
    }
});
});
     */
     /*
      function (event){
    if (event.button=== 3){
        //Do something here
         <button oncontextmenu="event.preventDefault()" onClick={this.changebutton1} ></button>
            
    }
}
*/
/*
var button1 =(ev)=>{
      if(ev.which === 1)
      {
            return(
             //   <button oncontextmenu="event.preventDefault()" onClick={this.changebutton1} ></button>
          <button >{this.changebutton1}</button>
            )
      }
      else{
        return(<button>{()=>this.changebutton2()}</button>)
      }
}*/

/*
 let status;
    let winPos;
    if (winner) {
      status = "Winner: " + winner.winner;
      winPos = winner.winPos;
    } else if (!current.squares.includes(null) && !winner) {
      // if all squares are filled and there's no winner, it's a draw
      status = "It's a draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }*/


        return(
            <div className="Appdiv">
   <button  className="button1" oncontextmenu="event.preventDefault()"onClick={this.changebutton1}>{this.state.player1}</button>
            <button  oncontextmenu="event.preventDefault()" onClick={()=>this.changebutton2()}>{this.state.player2}</button>
            <button  oncontextmenu="event.preventDefault()" onClick={()=>this.changebutton3()} >{this.state.player3}</button>
            <br/>
            <br/>
            <button  oncontextmenu="event.preventDefault()" onClick={()=>this.changebutton4()} >{this.state.player4}</button>
            <button  oncontextmenu="event.preventDefault()" onClick={()=>this.changebutton5()}>{this.state.player5}</button>
            <button  oncontextmenu="event.preventDefault()" onClick={()=>this.changebutton6()}>{this.state.player6}</button>
            <br/>
            <br/>
            <button  oncontextmenu="event.preventDefault()" onClick={()=>this.changebutton7()}>{this.state.player7}</button>
            <button  oncontextmenu="event.preventDefault()" onClick={()=>this.changebutton8()}>{this.state.player8}</button>
            <button  oncontextmenu="event.preventDefault()" onClick={()=>this.changebutton9()}>{this.state.player9}</button>
           
            </div>
        );
    }
  }


 export default Tictactoe;


/*if i right click do this and if i left click do this///// then if this three button isx  do this
//// now question can i put two if statement inside each other


/*

        document.onmousedown=clic
        function clic(event){
            if(event.button==2){
                //right2
                alert('event')
            }
        }

*/

/*

 import React, {Component} from 'react';
import About from './About';
import './App.css';
import but from './but';



/*

class App extends Component{
  render(){
    onclick=()=>{
      
    }
    return(
      <div className="App" >
        <input></input>
        <div> 
          <About text="my props finnally worked"/>
        <button className="buttonapp">1</button>
        <button className="buttonapp">2</button>
        <button className="buttonapp">4</button>
        <button className="buttonapp">5</button>
        <button className="buttonapp">6</button>
        <button className="buttonapp">7</button>
        <button className="buttonapp">8</button>
        <button className="buttonapp">9</button>
        <button className="buttonapp">0</button>
        </div>
       
      </div>
    );
    }
  }

  export default App;
  */
/*
 class App extends Component {
   render(){
     return(
       <div>
        
         
         <ul>
           <li className='button'>1</li>
           <li className='button'>2</li>
           <li className='button'>3</li>
           <li className='button'>4</li>
           <li className='button'>5</li>
           <li className='button'>6</li>
           <li className='button'>7</li>
           <li className='button'>8</li>
           <li className='button'>9</li>
           <li className='button'>0</li>
         </ul>
       </div>
     );

   }
 }

 export default App;*/

 /*
  <ul className='Container' >
                <li className='frow1'>{this.onclick}+</li>
                <li className='frow2'>+</li>
                <li className='frow3'>+</li>
                <br/>
                <li className='srow'>+</li>
                <li className='srow'>+</li>
                <li className='srow'>+</li>
                <br/>
                <li className='Trow'>+</li>
                <li className='Trow'>+</li>
                <li className='Trow'>+</li>
               
            </ul>*/
            /*help i can add y variable now*/




//left click will be x while right click will be Y
//pick my win





 /*


 changebtn=()=>{this.setState({player1:"X"})
}
change=()=>{this.setState({player2:"Y"})
}
//(fname1)=>{}
*/



/*




this.setstate.player1=document.querySelector("#fname1");
this.setstate.player1.addEventListener('click',(e)=>{if (e.fname1 === 0) {
  return <button>{this.change}</button> 
  }
}); */

