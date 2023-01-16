import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('About 收到的props是：',this.props);
    return (
        <div className="panel">
            <div className="panel-body">
                <h3>我是About的内容</h3>
            </div>
        </div>
    )
  }
}
