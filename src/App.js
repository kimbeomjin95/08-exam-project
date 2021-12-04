import React, { useState } from 'react';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (name, age) => {
    // 함수형업데이트
    setUserList(prevState => {
      return [
        ...prevState,
        { id: Math.random().toString(), name: name, age: age },
      ];
    });
  };

  console.log('users', userList);

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
