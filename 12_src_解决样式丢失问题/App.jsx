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
              <MyNavLink to='/yangchengjie/about' a={1} b={2} >About</MyNavLink>
              <MyNavLink to='/yangchengjie/home' >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <Switch>
              <Route path={'/yangchengjie/about'} component={About} />
              <Route path={'/yangchengjie/home'} component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
