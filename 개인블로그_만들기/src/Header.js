import React from "react";
import './Header.scss'
function HeaderDiv({title, number}) {
  return (
    <>
      <div className="headerDiv">
        <p>{title} <br></br> {number}</p>
        
      </div>
    </>
  )
}
function Header({user}) {
  return (
    <>
      <h2>{user}</h2>
      <p>코스믹 회원</p>
      <br></br>
      <HeaderDiv title='구독자' number='1270'/>
      <HeaderDiv title='관심작가' number='26'/>
      <button className="Button">구독하기</button>
    </>
  )
}
export default Header