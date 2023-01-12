import React from 'react'
import './Magagine.css'
function Magagine() {
  const items = [
    {
      id:1,
      picture:'img/다운로드1.png',
    },
    {
      id:2,
      picture:'img/다운로드2.png',
    },
    {
      id:3,
      picture:'img/다운로드3.png',
    },
    
  ]
  return(
    <div>
      <img src={items[0].picture}></img>
      <img src={items[1].picture}></img>
      <img src={items[2].picture}></img>
    </div>
  )
}

export default Magagine