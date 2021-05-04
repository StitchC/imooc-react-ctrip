import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import style from './App.module.css'


function App() {

  return (
    <div className={style.App}>
      <BrowserRouter>
        <Route path="/" component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
