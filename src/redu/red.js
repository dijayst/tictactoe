import React from 'react';
import './App.css';
import './Tictactoes.css';
//import Hooks from './Hooks';
//import Tictactoe from './TIC/Tictactoe';
import ComponentC from './hooks/ComponentC';
import Countone from './redu/Countone';
import Countertwo from './redu/Countertwo';
import Example from './redu/Example';
import Redutodo from './redu/Redutodo';


export const UserContext=React.createContext()
export const ChannelContext= React.createContext()
function Red() {
  return (
    <div>
      <Redutodo/>
      <Example/>
      <Countone/>
      <Countertwo/>
      <UserContext.Provider value={"esther"}>
        <ChannelContext.Provider value={"code evolution"}>
      <ComponentC/>
      </ChannelContext.Provider>
      </UserContext.Provider>
     </div>
  )
}

export default Red
