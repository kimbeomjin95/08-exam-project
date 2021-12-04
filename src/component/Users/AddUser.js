import React, { Fragment, useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = e => {
    e.preventDefault();

    // 이름, 나이 벨리데이션 체크
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: '입력값을 다시 확인해주세요.',
        message: '이름과 나이를 입력해주세요.',
      });
      return; // 함수 종료
    }

    // string -> int 변환
    if (+age < 1) {
      setError({
        title: '나이를 다시 입력하세요',
        message: '나이는 0보다 작을 수 없습니다.',
      });
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

  // 조건부 모달 렌더링 state 비우기
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
