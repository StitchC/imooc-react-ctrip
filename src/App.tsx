import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Detail from './pages/Detail'
import style from './App.module.css'


function App() {

  return (
    <div className={style.App}>
      <BrowserRouter>
        {/* Switch 组件可以让路由系统每次匹配到路由路径的时候 按照声明的顺序 只渲染第一个匹配的路由页面 */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/register" component={Register} />
          <Route path="/detail/:id" component={Detail}/>
          <Route render={() => <h1>oops 页面去火星了！</h1>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
