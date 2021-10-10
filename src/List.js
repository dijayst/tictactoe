import React from 'react'
import Tic from './TIC/Tic';

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
