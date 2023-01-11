import React from 'react'

function Tag({tagName}) {
  return(
    <div>
      {tagName}
    </div>
  )
}

function Info() {
  return(
    <>
      <p>소개</p>
      <p>충북대학교 컴퓨터 공학과에 재학중이다.</p>
      <Tag tagName='IT'></Tag>
      <Tag tagName='충북대'></Tag>
      <Tag tagName='개발 지망생'></Tag>
      <br></br>
      <p>웹사이트</p>
      <Tag tagName='F'></Tag>
    </>
  )
}

export default Info