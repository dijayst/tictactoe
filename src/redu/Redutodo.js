import React,{useReducer, useState} from 'react'
 const initialstate={todos:[]};
function reducer(state,action) {
    switch (action.type) {
        case 'add-todo':
            return{todos:[...state.todos,{text:action.text,completed:false}]}
            case 'toogle-todo':
                return{todos:state.todos.map((item,index)=>
                    {index=== action.index ?
                    {...item,completed:!item.completed}
                    :item})};
            default:
         return   state;
         
    }
}

const Example = () => {
    const [{todos}, dispatch] = useReducer(reducer,initialstate)
   const [text, settext] = useState();
   console.log({todos})
    return (
        <div>
         <form onSubmit={(e)=>{e.preventDefault(); dispatch({type:"add-todo",text});settext("");}}>
             <input value={text} onChange={(e)=>{settext(e.target.value)}}/>
         </form>   
        
         {todos.map((item,index)=>{return <div onClick={()=>{dispatch({type:"toogle-todo",index})}} style={{textDecoration:item.completed?"strike-through":""}} key={index.text}>{item.text}</div>})}
        </div>
    )
}

export default Example
/* <pre>
{JSON.stringify(todos,null,2)}
</pre>
*/