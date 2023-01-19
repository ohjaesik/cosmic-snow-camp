import React, {useState} from 'react'
import Main from './main'

function Header () {
  const [foodInput, setFoodInput] = useState('');
  const onChange = (e) => {
    e.preventDefault();
    setFoodInput(e.target.value);
  }
  const onClick = (e) => {
    e.preventDefault();

    
  }
  
  
  return(
    <React.Fragment>
      <h1>음식 영양 성분 검색기</h1>
      <input type="text" onChange={onChange}></input><button type='submit' onClick={onClick}>button</button>
      <Main foods={foodInput}/>
    </React.Fragment>
  )
}
export default Header;