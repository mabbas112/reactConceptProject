import React from "react";
import classes from "./UserList.module.css";
import Card  from "../UI/Card";
const UserList = (props) => {
  return (
      <Card className={classes.users}>
    <ul>
      {/* I am expecting here users props property */}
      {/* map method here is used to map users into JSX elements */}
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
