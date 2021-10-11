import React, { useState } from 'react'


function Listname({item,set,sett,key}) {
   const [check, setcheck] = useState(true);
   /*  const handleclick=(e)=>{
     e.preventDefault();
     if(!set)return;
     console.log("hhh")
     sett({set})
    }
  */

    return (
        <div>
            
            <button onClick={()=>{setcheck(!check)}}  className="button" >{item.text}{check ? "x" : "o" } </button>
        </div>
    )
}

export default Listname
