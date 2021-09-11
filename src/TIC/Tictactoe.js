/*  handleclick(e){
if (this.state.player1===""){
  this.setState({
    player1:"O"
  })
}
if(this.state.player1==='O'){
  this.setState({
    player1: "X"
  })
}
else{
  this.setState({
    player1: "O"
  })
}
console.log(this.state.player1)
  
    }
/*
handleclick(){
this.setState((prevState)=>({
  player1:prevState.player1 + "Y"
}))
}


  render() {
    return (
}

export default Tictactoe
*/
import React, { Component } from 'react'
import Cell from './Cell'


            /*fill read through the pattern array since it [1,1,2]  and read as 0,1,2 because we have 3digit in an array*/
           
          

 class Tictactoe extends Component {

  
  constructor(props) {
    super(props)
  
    this.state = {
      player1:"O"
    }
  }
  
/*
 handle(){
   this.setState({player1=>player1==="X" ? "O":"X"})
 }*/
 
 handle(){
   if(this.state.player1==="O"){
     this.setState({player1:"X"})
   }
 }

 /*
  
  handle(){
    this.setState(()=>{
      if(this.state.player1==="X"){
        this.setState({player1:"O"})
      }
      else
      {this.setState({player1:"y"})}

    })
    }
    /*
  componentDidUpdate(){this.handle()
  }*/
  /*
  handle(){
    this.setState((prevstate) =>this.state.player1==="X"?"O":"X");
  }*/


  render() {
    return (
      <div className="Appdiv">
        
        <div className="row">
        <Cell   current={this.state.player1} setas={this.handle()} />
        <Cell   current={this.state.player1} setas={this.handle()}/>
        <Cell   current={this.state.player1} setas={this.handle()}/>
        </div>

        <div className="row">
        <Cell  current={this.state.player1} setas={this.handle()}/>
        <Cell  current={this.state.player1} setas={this.handle()}/>
        <Cell  current={this.state.player1} setas={this.handle()}/>
        </div>

        <div className="row">
        <Cell  current={this.state.player1} setas={this.handle()}/>
        <Cell  current={this.state.player1} setas={this.handle()}/>
        <Cell  current={this.state.player1} setas={this.handle()}/>
        </div>  
      </div>
    )
  }
}

export default Tictactoe
