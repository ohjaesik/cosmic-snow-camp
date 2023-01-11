import React from 'react'
function Article({article}) {
  return (
    <>
      <img src= {article.picture}></img>
      <h4>{article.title}</h4>
      <p>{article.body}</p>
    </>
  )
}
function Articles({items}) {
  return (
    <>
    <Article article={items[0]}/>
    <Article article={items[1]}/>
    </>
  )
}

export default Articles