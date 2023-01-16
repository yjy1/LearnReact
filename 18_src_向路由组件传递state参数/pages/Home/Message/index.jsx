import React, { Component } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
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
                                {/* <Link to={`/home/message/message001/${id}/${title}`}>{title}</Link> */}

                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/message/message001/?id=${id}&title=${title}`}>{title}</Link> */}

                                {/* 向路由组件传递state参数 */}
                                <Link to={{ pathname: "/home/message/message001", state: { id, title } }}>
                                    {title}
                                </Link>
                            </li>
                        })
                    }
                </ul>
                <Switch>
                    {/* 声明接收params参数 */}
                    {/* <Route path='/home/message/message001/:id/:title' component={Detail} /> */}

                    {/* search参数无需声明接收 */}
                    {/* <Route path='/home/message/message001' component={Detail} /> */}

                    {/* 声明接收state参数 */}
                    <Route path='/home/message/message001' component={Detail} />
                    <Redirect to={'/home/message/message001'}/>
                </Switch>

            </div>
        )
    }
}
