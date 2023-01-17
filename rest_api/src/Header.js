import React, {useState} from 'react'
import axios from 'axios'
function Header () {
  const [foodInput, setFoodInput] = useState('');

  const onChange = (e) => {
    setFoodInput(e.target.value);
  }

  async function getFood() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    )
  }
  const onClick = (e) => {
    e.preventDefault();
    setFoodInput('');
    getFood();
  }
  return(
    <React.Fragment>
      <h1>음식 영양 성분 검색기</h1>
      <input onChange={onChange}></input><button onClick={onClick}>button</button>
    </React.Fragment>
  )
}
export default Header;