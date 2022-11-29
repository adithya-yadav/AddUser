import "./AddUser.css";
import "./Button.css"
import React, { useState } from "react";
import ErrorModel from "./Error";


function Note(props) {
  const [enterUser, setEnterUser] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error , setError] = useState()

  function onChangeUser(e) {
    setEnterUser(e.target.value);
  }
  function onChangeAge(e){
    setEnterAge(e.target.value)
  }

  function onClickAddNote() {
    if (enterUser.length === 0 && enterAge.length === 0) {
      setError({
        title:"Invalid Input",
        message:"please Enter the valid Name & age (non-empty-values)"
      })
      return;
    }
    if(enterAge < 1){
      setError({
        title:"Invalid Age",
        message:"please enter valid age (> 0) "
      })
      return
    }
      const objUser = {
        id: Math.random().toString(),
        user: enterUser,
        age:enterAge
      };
      //console.log(enterUser);
      props.newuser(objUser);
      setEnterUser("");
      setEnterAge('')
   
  }
  const errorHandler = ()=>{
    setError(null);
  }
  
  return (
  <div>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
      <div className="input">
          <label>User Name :</label>
            <input
              onChange={onChangeUser}
              type="text"
              placeholder="User Name"
              value={enterUser}
              />
            <label>Age :</label>
            <input type="number" placeholder="User Age" value={enterAge} onChange={onChangeAge}/>
            <button className="button" onClick={onClickAddNote}>Add User</button>
      </div>
   </div>
  );
}

export default Note;
