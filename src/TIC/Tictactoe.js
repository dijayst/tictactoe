import React, { Component } from 'react';

 class Tictactoe extends Component {

constructor(props) {
  super(props)
  
  this.state = {
    cells:["","","","","","","","",""],
    checked:"X"
  }
     
console.log(this.state.cells)
}
/*
handleclick=(i)=>{
  let square=this.state.cells;
if(this.state.checked==="X"){
square[1]="X";
this.setState({checked:"O"})
}else{
 square[1]="O";
this.setState({checked:"X"})
}
this.setState({cells:square})
console.log(square)
return(square)
}*/
/*
handleclick=(i)=>{
 let square=this.state.cells[i];
  switch (square) {
    case this.state.cells[i]:
      if(this.state.checked==="X"){
        this.setState((stat)=>{const cells=stat.cells.map(item=>"X")
        return{cells}})
        console.log(this.state.cells[1])
      }
      else{ 
      this.setState((stat)=>{const cells=stat.cells.map(item=>"O")
      return{cells}})
      console.log(this.state.cells)
      }
      break;
      case this.state.cells[1]:
        if(this.state.checked==="X"){
          this.setState((stat)=>{const cells=stat.cells.map(item=>"Y")
          return{cells}})
          console.log(this.state.cells)
        }
        else{ 
        this.setState((stat)=>{const cells=stat.cells.map(item=>"M")
        return{cells}})
        console.log(this.state.cells)
        }
      break;
    
      case this.state.cells[2]:
        if(this.state.checked==="X"){
          this.setState((stat)=>{const cells=stat.cells.map(item=>"V")
          return{cells}})
          console.log(this.state.cells)
        }
        else{ 
        this.setState((stat)=>{const cells=stat.cells.map(item=>"W")
        return{cells}})
        console.log(this.state.cells)
        }
      break;
    default:
     this.setState({checked:"y"})
      break;
  }
  
}
*/
handleclick=()=>{
  let square=this.state.checked;
if(this.state.checked==="X"){
  this.setState((stat)=>{const cells=stat.cells.map(item=>"X")
  this.setState({checked:"O"})
  return{cells}})
  console.log(this.state.cells)
}
else{ 
this.setState((stat)=>{const cells=stat.cells.map(item=>"O")
this.setState({checked:"X"})
return{cells}})
console.log(this.state.cells)
}
this.setState({checked:square})
console.log(square)
}

/*
handleclick=(i)=>{
let squ=this.state.cells;
squ[1]="yess";
this.setState({cells:squ})

squ[2]="no";
this.setState({cells:squ})
console.log(this.setState.cells)
console.log(this.state.cells)
}
*//*
handleclick=(i)=>{
  let squ=this.state.cells;
  switch (squ) {
    case squ[1]:
  if(this.state.checked==="X"){
    squ[1]="X";
    this.setState({checked:"O"})
  }  else{
    squ[1]="O";
  this.setState({checked:"X"})  }
      break;

        case squ[2]:
      if(this.state.checked==="X"){
        squ[2]="X";
        this.setState({checked:"O"})
      }  else{
        squ[2]="O";
      this.setState({checked:"X"})  }
     
          break;
      
    default:
     this.setState({
       cells:"y",
       checked:"z"
     })
  }
}
*//*
handleclick=(event,index)=>{event.preventDefault()
  this.setState({cells:"yes"})}
*/
// increment index
// cant use switch because it will be speific so we using if statement
//switch inside if
//if om if
  //this.setState({cells:newcells})
 // console.log(newcells)
 // }
   
   render() {
    return (
      <div className="Appdiv">
        
   {this.state.cells.map((item,i)=>{
      
      return<button  onClick={this.handleclick} key={i} index={i}>{item}</button>
    
     })} 

   </div>
    );
   }}

export default Tictactoe;