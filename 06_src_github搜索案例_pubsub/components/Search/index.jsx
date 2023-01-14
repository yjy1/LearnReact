import axios from 'axios';
import React, { Component } from 'react'
import pubsub from 'pubsub-js';

export default class Search extends Component {
    handleSearch = () => {
        console.log('handleSearch==========');
        const { keyWordElement: { value: keyWord } } = this

        pubsub.publish('changeIsLoading', { isLoading: true })
        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                // 发布消息
                pubsub.publish('saveUsers', { users: response.data.items, isFirst: false, isLoading: false })
                // pubsub.publish('saveUsers', () => {
                //     return { users: response.data.items,isFirst:false, isLoading: false }
                // })
            },
            reject => {
                pubsub.publish('saveUsers', { error: reject.message, isFirst: false, isLoading: false })
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词" />&nbsp;
                    <button onClick={this.handleSearch}>搜索</button>
                </div>
            </section>
        )
    }
}
