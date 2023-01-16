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

    replaceShow = (id, title) => {
        // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
        return () => {
            console.log(this.props);
            // replace跳转+携带params参数
            // this.props.history.replace(`/home/message/detail/${id}/${title}`)

            // replace跳转+携带search参数
            // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

            // replace跳转+携带state参数
            this.props.history.replace("/home/message/detail", { id, title }) 
            // this.props.history.replace({ pathname: "/home/message/detail", state: { id, title } })
        }
    }
    pushShow = (id, title) => {
        return () => {
            // push跳转+携带params参数
            // this.props.history.push(`/home/message/detail/${id}/${title}`)

            // push跳转+携带search参数
            // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

            // push跳转+携带state参数
            this.props.history.push("/home/message/detail", { id, title }) 
            // this.props.history.push({ pathname: "/home/message/detail", state: { id, title } })
        }
    }
    goBack=()=>{
        console.log('back////',this);
        this.props.history.goBack()
    }
    goForward=()=>{
        this.props.history.goForward()
    }
    goTo = ()=>{
        return () => {
            this.props.history.go(0)
        }
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
                                {/* <Link to={`/home/message/detail/${id}/${title}`}>{title}</Link> */}

                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/message/detail/?id=${id}&title=${title}`}>{title}</Link> */}

                                {/* 向路由组件传递state参数 */}
                                <Link   to={{ pathname: "/home/message/detail", state: { id, title } }}>
                                    {title}
                                </Link>

                                <button onClick={this.pushShow(id, title)}>push查看</button>
                                <button onClick={this.replaceShow(id, title)}>replace查看</button>
                            </li>
                        })
                    }
                </ul>
                <Switch>
                    {/* 声明接收params参数 */}
                    {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                    {/* search参数无需声明接收 */}
                    {/* <Route path='/home/message/detail' component={Detail} /> */}

                    {/* 声明接收state参数 */}
                    <Route path='/home/message/detail' component={Detail} />
                    <Redirect to={'/home/message/detail'}/>
                    <hr />
                </Switch>
                    <button onClick={this.goBack}>回退</button>
                    <button onClick={this.goForward}>前进</button>
                    <button onClick={this.goTo(0)}>前进到</button>
            </div>
        )
    }
}
