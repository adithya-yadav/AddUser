import "./AddUser.css";
import "./Button.css";
import React, { useState, useRef} from "react";
import ErrorModel from "./Error";

function Note(props) {
  const nameInputRef = useRef()
  const collegeInputRef = useRef()
  const ageInputRef = useRef()
  const [error, setError] = useState();

  function onClickAddNote() {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollege = collegeInputRef.current.value;
    if (enteredName.length === 0 || enteredAge.length === 0 || enteredCollege.length === 0) {
      setError({
        title: "Invalid Input",
        message: "please Enter the valid Name & age (non-empty-values)",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter valid age (> 0) ",
      });
      return;
    }
    const objUser = {
      id: Math.random().toString(),
      user: enteredName,
      age: enteredAge,
      college:enteredCollege
    };

    props.newuser(objUser);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
  }
  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="input">
        <label>User Name :</label>
        <input
          type="text"
          placeholder="User Name"
          ref={nameInputRef}
        />
        <label>Age :</label>
        <input
          type="number"
          placeholder="User Age"
          ref={ageInputRef}
        />
        <label>College :</label>
        <input
          type="text"
          placeholder="College Name"
          ref={collegeInputRef}
        />
        <button className="button" onClick={onClickAddNote}>
          Add User
        </button>
      </div>
    </React.Fragment>
  );
}

export default Note;
