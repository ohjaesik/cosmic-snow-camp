
import React, {useState, useRef} from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InpustSample'
import CreateUser from './CreateUser'
import './App.css'
import UserList from './UserList'
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
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
  ])
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    };
    setUsers([...users,user]);
    setInputs({
      username: '',
      email:'',
    })
    nextId.current += 1;

  }
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
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
      <CreateUser
        username= {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}/>
      <UserList users={users} onRemove = {onRemove}></UserList>
    </Wrapper>
  );
}

export default App;
