import React, { Fragment, useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = e => {
    e.preventDefault();

    // 이름, 나이 벨리데이션 체크
    if (userName.trim().length === 0 || age.trim().length === 0) {
      return; // 함수 종료
    }

    // string -> int 변환
    if (+age < 1) {
      return;
    }

    props.onAddUser(userName, age);
    console.log(userName, age);
    setUserName('');
    setAge('');
  };

  const userNameChangeHandler = e => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = e => {
    setAge(e.target.value);
  };

  return (
    <Fragment>
      <ErrorModal title="제목" message="내용" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
