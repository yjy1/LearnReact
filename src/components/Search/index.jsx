import axios from 'axios';
import React, { Component } from 'react'
import pubsub from 'pubsub-js';

export default class Search extends Component {
    handleSearch = async () => {
        console.log('handleSearch==========');
        const { keyWordElement: { value: keyWord } } = this

        pubsub.publish('changeIsLoading', { isLoading: true })
        //#region 发送网络请求 --使用axios发送
        // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => {
        //         // 发布消息
        //         pubsub.publish('saveUsers', { users: response.data.items, isFirst: false, isLoading: false })
        //     },
        //     reject => {
        //         pubsub.publish('saveUsers', { error: reject.message, isFirst: false, isLoading: false })
        //     }
        // )
        //#endregion

        // 发送网络请求 --使用fetch发送 未优化
        // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => {
        //         console.log('联系服务器成功了',response );
        //         return  response.json()
        //     }
        //     , error => {
        //         console.log('联系服务器失败了',error);
        //         return new Promise(() => { }) 
        //     }
        // ).then(
        //     response => { console.log('请求数据成功',response); },
        //     error => { console.log('请求数据失败',error); }
        // ) 
        
        // 发送网络请求 --使用fetch发送 优化
        try {
            const response = await fetch(`https://localhost:3000/api1/search/users?q=${keyWord}`)
            const result = await response.json()
            console.log('rrrrrr', result);
            pubsub.publish('saveUsers', { users: result.items, isFirst: false, isLoading: false })
        } catch (error) {
            console.log('出错了',error);
            pubsub.publish('saveUsers', { error: error, isFirst: false, isLoading: false })
        }
     
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
