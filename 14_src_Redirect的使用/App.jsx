import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home' //路由组件
import About from './pages/About' //路由组件
import Header from './components/Header' //一般组件
import MyNavLink from './components/MyNavLink'
 
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header  />
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to='/about' >About</MyNavLink>
              <MyNavLink to='/home' >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <Switch>
              <Route path={'/about'} component={About} />
              <Route path={'/home'} component={Home}  />
              <Redirect  to={'/about'} /> {/* 重定向，设置默认路由 */}
              {/* <Redirect path='/' to={'/about'} /> 重定向，设置默认路由 */}
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
