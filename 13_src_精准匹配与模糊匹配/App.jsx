import React, { Component } from 'react'
import {   Route, Switch } from 'react-router-dom'
import Home from './pages/Home' //路由组件
import About from './pages/About' //路由组件
import Header from './components/Header' //一般组件
import MyNavLink from './components/MyNavLink'
 
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header a={1} />
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to='/about' a={1} b={2} >About</MyNavLink>
              <MyNavLink to='/home/a/b' >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <Switch>
              <Route path={'/about'} component={About} />
              {/* exact 精准匹配路由 */}
              <Route path={'/home'} component={Home}  exact={false}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
