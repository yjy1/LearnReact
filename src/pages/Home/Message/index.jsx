import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../../components/MyNavLink'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((messageObj) => {
                            const { id, title } = messageObj
                            return <li key={id}>
                                {/* 向路由组件传递params参数 */}
                                <MyNavLink to={`/home/message/message001/${id}/${title}`}>{title}</MyNavLink>
                            </li>
                        })
                    }
                </ul>
                <Switch>
                    {/* 声明接收params参数 */}
                    <Route path='/home/message/message001/:id/:title' component={Detail} />
                   
                </Switch>

            </div>
        )
    }
}
