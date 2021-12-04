import React, { useRef, useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';

const AddUser = props => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    // 이름, 나이 벨리데이션 체크
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: '입력값을 다시 확인해주세요.',
        message: '이름과 나이를 입력해주세요.',
      });
      return; // 함수 종료
    }

    // string -> int 변환
    if (+enteredAge < 1) {
      setError({
        title: '나이를 다시 입력하세요',
        message: '나이는 0보다 작을 수 없습니다.',
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // 조건부 모달 렌더링 state 비우기
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
