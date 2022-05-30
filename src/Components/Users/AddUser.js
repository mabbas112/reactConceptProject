import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
// import UserList from "./UserList";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid inputs",
        message: "Please enter a valid name and age (non empty values)."
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (Age can't negtive)."
      });
      return;
    };
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>

{error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}

      {/* //   Here we are passing styles */}
      <Card className={classes.input}>
        {/* //Function: We can't add parenthesis here because it imediately excute when this
      line will parse. */}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
