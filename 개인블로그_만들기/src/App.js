
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Articles from './Articles'
import Header from './Header'
import {Routes} from 'react-router-dom'
import {NavBar} from './NavBar'
import Info from './Info'
import Magagine from './Magagine' 
function App() {
  const user= '오재식'
  const items = [
    {
      id:1,
      picture:'img/다운로드.png',
      title:'a',
      body:'a'
    },
    {
      id:2,
      picture:'b',
      title:'b',
      body:'b'
    },
    {
      id:3,
      picture:'c',
      title:'c',
      body:'c'
    },
  ]
  return (
    
    <BrowserRouter>
      <Header user={user}/>
        <main class="mainArc">
          <NavBar/>
        <nav>
          <Link to='/articles'></Link>
          <Link to='/info'></Link>
          <Link to='/magagine'></Link>
          <Link to='/*'></Link>
        </nav>
        <Routes>
          <Route path='/articles' element={<Articles items={items}/>}></Route>
          <Route path='/info' element={<Info user={user}/>}></Route>
          <Route path='/magagine' element={<Magagine/>}></Route>
          <Route path='/*' element={<h1>Not Found</h1>}></Route>
        </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
