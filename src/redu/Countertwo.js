import React, { useReducer } from 'react'
const initialState={firstname:0}
const reducer=(state,action)=>{
switch (action.type) {
    case 'increment':
        return {firstname:this.state.firstname + 1}
    case 'decrement':
        return {firstname:this.state.firstname-1}
    default:
        return this.state
}
}
function Countertwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button>count-{count.firstname}</button>
            <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
            <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
          
        </div>
    )
}

export default Countertwo
