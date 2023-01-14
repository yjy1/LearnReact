import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { users, isFirst, error, isLoading } = this.props

        return (
            <div className="row">
                {/* {
                    isFirst ? <h2>欢迎使用</h2> : ''
                }
                {
                    isLoading ? <h2>搜索中......</h2> : ''
                }
                {
                    error ? <h2>{error}</h2> : ''
                } */}
                {
                    isFirst ? <h2 style={{color:'skyblue'}}>欢迎使用</h2> : isLoading ? <h2>搜索中......</h2> : error ? <h2 style={{color:'red'}}>{error}</h2> :
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
