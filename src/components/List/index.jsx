import React, { Component } from 'react'
import pubsub from 'pubsub-js';

import './index.css'
export default class List extends Component {
    state = {
        users: [],
        isFirst: true, // 是否为第一次打开页面
        isLoading: false,
        error: '' // 存储请求相关的错误信息
    }
 
    // 组件挂载后执行
    componentDidMount() {
        // 订阅消息
        this.token = pubsub.subscribe('saveUsers', (_, data) => {
            console.log('subscribe... ttttttttttttt');
            this.setState(data)
        })
        this.token2 = pubsub.subscribe('changeIsLoading', (_, data) => {
            this.setState(data)
        })
    }
    // 组件将要卸载时执行
    componentWillUnmount(){
        console.log('unsubscribe...........');
        pubsub.unsubscribe(this.token)
        pubsub.unsubscribe(this.token2)
    }
    render() { /* 注意：此处不要调用方法，否则会执行多次 */
        console.log('render...');

        const { users, isFirst, error, isLoading } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2 style={{ color: 'skyblue' }}>欢迎使用</h2> : isLoading ? <h2>搜索中......</h2> : error ? <h2 style={{ color: 'red' }}>{error}</h2> :
                        users.map((userObj) => {
                            return (
                                <div key={userObj.id} className="card">
                                    <a href={userObj.html_url} target="_blank">
                                        <img src={userObj.avatar_url} style={{ width: 100, height: 100 }} />
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}
