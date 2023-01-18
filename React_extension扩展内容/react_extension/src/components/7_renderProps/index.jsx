import React, { Component } from 'react'
import './index.css'
import C from '../1_setState写法'
export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <A render={(name) => <C name={name} />} />
            </div>
        )
    }
}

class A extends Component {
    state = { name: 'ycj' }
    render() {
        console.log('AAAA',this.props);
        const { name } = this.state
        return (
            <div className='child'>
                <h3>我是A组件</h3>
                 {this.props.render(name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='grandchild'>
                <h3>我是B组件</h3>
                <h3>我的名字是：{this.props.name}</h3>
            </div>
        )
    }
}
