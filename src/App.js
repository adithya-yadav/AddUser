import React from "react"
import User from "./components/User";
import List from "./components/List";
import { useState } from "react";


const App=()=>{
  const [list,setList] = useState([])

  function newUser(newUser){
    const updatedList = [newUser,...list]
    setList(updatedList)
  }

  return(
    <React.Fragment>
      <User newuser = {newUser}/>
      <List items={list}/>
    </React.Fragment>
  ) 
}

export default App;
