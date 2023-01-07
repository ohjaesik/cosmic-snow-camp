
import React, {useState} from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import './App.css'
function App() {
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
    </Wrapper>
  );
}

export default App;
