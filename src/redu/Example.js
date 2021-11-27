import React,{useReducer} from 'react'

function reducer(state,action) {
    switch (action.type) {
        case 'incriment':
            return state + 2
            case 'decriment':
                return state -2
        default:
         return   state
    }
}
const Example = () => {
    const [count, dispatch] = useReducer(reducer, 0)
   //const ini
    return (
        <div>
            <p>count={count}</p>
            <p onMouseOver={()=>{dispatch({type:"incriment"})}}>incriment</p>  
            <p onMouseOver={()=>{dispatch({type:"decriment"})}}>decriment</p>  
        </div>
    )
}

export default Example
