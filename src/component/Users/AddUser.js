import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = props => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = e => {
    e.preventDefault();
    // console.log(userName, age);
  };

  const userNameChangeHandler = e => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = e => {
    setAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
