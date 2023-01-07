
import React, {useState, useRef} from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InpustSample'
import './App.css'
import UserList from './UserList'
function App() {

  const users = [
    {
      id:1,
      username: 'v',
      email:'1@gmail.com'
    },
    {
      id:2,
      username: 't',
      email:'2@gmail.com'
    },
    {
      id:3,
      username: 'l',
      email:'3@gmail.com'
    }
  ]
  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;

  }
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding : '1rem'
  }
  return (
    <Wrapper>
    {/* 주석 사용하기 */}
        <Hello name="react" color="red" 
        isSpecial// 태그 내부에서 주석하용하기
      />
        <Hello color="pink"/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>

      <Counter></Counter>
      <InputSample></InputSample>
      <UserList users={users}></UserList>
    </Wrapper>
  );
}

export default App;
