
import User from "./components/User";
import List from "./components/List";
import { useState } from "react";


const App=()=>{
  const [list,setList] = useState([])

  function newUser(newUser){
    const updatedList = [newUser,...list]
    setList(updatedList)
  }
  //console.log(list)
  return(
    <>
      <User newuser = {newUser}/>
      <List items={list}/>
    </>
  ) 
}

export default App;
