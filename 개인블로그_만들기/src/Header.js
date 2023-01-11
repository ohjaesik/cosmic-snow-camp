import React from "react";
function HeaderDiv({title, number}) {
  return (
    <>
      <div>
        <p>{title}</p>
        <p>{number}</p>
      </div>
    </>
  )
}
function Header({user}) {
  return (
    <>
      <h2>{user}</h2>
      <p>코스믹 회원</p>
      <HeaderDiv title='구독자' number='1270'/>
      <HeaderDiv title='관심작가' number='26'/>
      <button>구독하기</button>
    </>
  )
}
export default Header