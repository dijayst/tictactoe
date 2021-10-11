import React, { useState } from 'react'
import Listname from './Listname'

function Hooks() {
    const [list, setlist] = useState([{text:""},{text:""},{text:""},{text:""},{text:""},{text:""},{text:""},{text:""},{text:""}]);
 /* const handle=()=>{setlist(prevState=>({list:prevState.list + 2}))
console.log({list})
}*/


    return (
        <div className="Appdiv">
            <div>
                {list.map((item,index)=>{return<Listname item={item} key={index} set={setlist} sett={list}/>;})}
            </div>
            <p onClick={()=>{setlist({list})}}>Restart game</p>

        </div>
    )
}

export default Hooks
