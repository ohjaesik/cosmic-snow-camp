
import React from 'react'
import Hello from './Hello'
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
    <>
    {/* 주석 사용하기 */}
    
      <Hello // 태그 내부에서 주석하용하기
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
