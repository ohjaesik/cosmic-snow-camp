import React from 'react'
import './NavBar.scss'
export const NavBar = (props) => {
  return (
    <>
      <div className="naviBar">
        <div className="menu">
          <a href='/articles'>article</a>
        </div>
        <div className="menu">
          <a href="/info">info</a>
        </div>
        <div className="menu">
          <a href="/magagine">magagine</a>
        </div>
      </div>
    </>
  )
}