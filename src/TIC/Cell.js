import React, { Component } from 'react'

//let cells=new Array(9).fill();
const{current,setas}=this.props

 class Cell extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          player2:""
        }
      }

      
 /* handleclick(e){
this.state.player1=this.props.mpos.forEach((cell)=>{ 
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
console.log(this.state.player1)})
  
    }*/
    
    handleclick(){
     if(current==="O"&& setas==="X"){
       this.setState({player2=})
     }
      console.log(this.setState)
    }
  

    render() {
        return (
       <div className="button" onClick={()=>{this.handleclick()}}>{this.state.player2}</div>
        )
    }
}

export default Cell
