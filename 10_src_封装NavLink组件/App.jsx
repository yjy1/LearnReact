import React, { Component } from 'react'
import { NavLink, Route, Router } from 'react-router-dom'
import Home from './pages/Home' //路由组件
import About from './pages/About' //路由组件
import Header from './components/Header' //一般组件
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header a={1}/>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中靠a标签跳转到不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在react中靠路由链接实现切换组件 */}
          
                {/* <NavLink activeClassName='demo' className="list-group-item" to={'/about'}> About</NavLink>
                <NavLink activeClassName='demo' className="list-group-item " to={'/home'}> Home </NavLink> */}
                <MyNavLink  to='/about' a={1} b={2} >About</MyNavLink>
                <MyNavLink  to='/home' >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            {/* 注册路由 */}
              <Route path={'/about'} component={About}/>  
              <Route path={'/home'} component={Home}/>  
          </div>
        </div>
      </div>
    )
  }
}
