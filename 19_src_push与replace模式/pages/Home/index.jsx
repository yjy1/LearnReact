import React, { Component } from 'react'
import { Link,Redirect,Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-body">
                    <h3>我是Home的内容</h3>
                    <div>
                        <ul className="nav nav-tabs">
                            <li>
                                <MyNavLink replace to={'/home/news'}>News</MyNavLink>
                            </li>
                            <li>
                                <MyNavLink replace to={'/home/message'}>Message</MyNavLink>
                            </li>
                        </ul>
                        {/* 注册路由 */}
                        <Switch>
                            <Route path="/home/news" component={News}></Route>
                            <Route path="/home/message" component={Message}></Route>
                            <Redirect to="/home/message"/>
                        </Switch>
                       
                    </div>
                </div >
            </div >
        )
    }
}
