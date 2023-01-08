
import React, {useState, useRef, useMemo, useCallback} from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InpustSample'
import CreateUser from './CreateUser'
import './App.css'
import UserList from './UserList'
function counterActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}
function App() {
  
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
  const {username, email} = inputs;
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    }, []);
  });
  const [users, setUsers] = useState([
    {
      id:1,
      username: 'v',
      email:'1@gmail.com',
      active: true
    },
    {
      id:2,
      username: 't',
      email:'2@gmail.com',
      active: true
    },
    {
      id:3,
      username: 'l',
      email:'3@gmail.com',
      active: false
    }
  ])
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email
    };
    setUsers([users => user.concat(user)]);
    setInputs({
      username: '',
      email:'',});
      nextId.current += 1;
    }, [username,email])
    
  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, [])
  const onToggle = useCallback(id => {
    setUsers( users =>
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user)
    )
  }, [])
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding : '1rem'
  }
  const count = useMemo(() => counterActiveUsers(users), [users]);
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
      <UserList users={users} onRemove = {onRemove} onToggle={onToggle}></UserList>
      <div>활성 사용자 수 : {count}</div>
    </Wrapper>
  );
}

export default App;
