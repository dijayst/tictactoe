import React ,{useState,useEffect} from "react";

function Tic({ item }) {
  
  const [Checked, setChecked] = useState(false);
  const  cells=["","","","","","","","",""];

  /*
useEffect(() => {
const winner= checkwinner();
if(winner){alert(`you won!${winner}`)
cells
}
  return () => {
    cleanup
  }
}, [cells])

const refresh=()=>{

}*/

  const checkwinner=()=>{
    const pattern=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
    ];
     for(let i=0; i<pattern.length;i++){
       console.log(pattern[i]);
      const[a,b,c]=pattern[i];
      if(cells[a]===cells[b]===cells[c]){
        return cells[a];
      }
    }
    return null;
  }

  return (
   

<li
onClick={() => {
  setChecked(!Checked);
  console.log(Checked)
}}
>{Checked ? "x" : "o" }


</li>
);
}
//export default Tic


export default function List() {
  const  cells=["","","","","","","","",""];

  return (
      <div>
          <ul className="Appdiv">
  {cells.map((item,index) => {
  return <Tic item={item}key={item} />;
  })}
  </ul>
      </div>
  )
}
