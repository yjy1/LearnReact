import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        return (
            <div className="row">
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank">
                        <img src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4" style={{ width: 100 ,height:100}} />
                      </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target=" blank">
                    <img src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4" style={{ width: 100 ,height:100}} />
                      </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target=" blank">
                    <img src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4" style={{ width: 100 ,height:100}} />
                      </a>
                    <p className="card-text">reactjs</p>
                </div>
            </div>
        )
    }
}
