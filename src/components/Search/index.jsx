import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {
    handleSearch = () => {
        // 获取用户的输入（连续解构赋值+重命名）
        const { keyWordElement:{value:keyWord} } = this
        console.log(keyWord);
  
        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                 
            },
            reject => {

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
