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
  let square=this.state.checked;
if(this.state.cells){
  square[i]="X";
  this.setState((state)=>{const cells=state.cells.map(item=>"X")
  return{cells}})
  console.log(this.state.cells)
}
else{ square[i]="O";
this.setState((state)=>{const cells=state.cells.map(item=>"O")
return{cells}})
console.log(this.state.cells)
}
this.setState({checked:square})
console.log(square)

}*/
/*
handleclick=(i)=>{
  let square=this.state.cells;
if(this.state.checked==="X"){
square[i]="X";
this.setState({checked:"O"})
}else{
 square[i]="O";
this.setState({checked:"X"})
}
this.setState({cells:square})
console.log(square)
return(square)
}
*/
handleclick=(i)=>{
  let square=this.state.checked;
if(this.state.checked==="X"){
  this.setState((state)=>{const cells=state.cells.map(item=>"X")
  this.setState({checked:"O"})
  return{cells}})
  console.log(this.state.cells)
}
else{ 
this.setState((state)=>{const cells=state.cells.map(item=>"O")
this.setState({checked:"X"})
return{cells}})
console.log(this.state.cells)
}
this.setState({checked:square})
console.log(square)

}
/*
handleclick=(e)=>{
  const newcells=this.state.cells.slice()
  newcells[0]="p";
  newcells[1]="y";
  newcells[2]="y"
  newcells[3]="y"
  newcells[4]="y"
  newcells[5]="y"
  newcells[6]="y"
  newcells[7]="y"
  newcells[8]="y"
 }
/*
handleclick=(new,i)=>{
  mas=this.state.cells;
 mas[i]=new;
 setstate({cells:mas})
}
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
      
      return<li  onClick={this.handleclick} key={i} index={i}>{item}</li>
    
     })} 
   <ul>{this.state.cells}</ul>
   </div>
    );
   }}

export default Tictactoe;