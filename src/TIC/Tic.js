import { useState } from "react";


const  cells=["","","","","","","b","",""];


/*const AddIcon = "X"
const RemoveIcon = "O";*/




export default function ListItem({ item }) {
  
  const [checked, setChecked] = useState(false);


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

}
*/
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




  return (<div>
    <li
      onClick={() => {
        setChecked(!checked);
        console.log(checked)
      }}
    >{checked ? "x" : "o" }
      
    </li>


<ul className="Appdiv">
{cells.map((item,index) => {
  return <ListItem item={item}key={item} />;
})}
</ul>
<button>{cells}</button>
</div>
  );
}





