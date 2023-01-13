import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = { isEnter: false }

  handleMouse = (isEnter) => {
    return () => {
      this.setState({ isEnter })
    }
  }
  handleCheck = (id) => {
    return (event) => {
      const { target } = event
      const { updateTodo } = this.props
      console.log('target.checked',target.checked);
      updateTodo( id, target.checked)
      // 注意：打印日志时的语句算一个参数
      // updateTodo('我是打印语句。。。', id, target.checked)
    }
  }
  render() {
    // 注意：此处可以获取对象的具体信息
    const { id, name, isComplete } = this.props
    const { isEnter } = this.state
    return (
      // 注意：style作为关键字使用
      <li style={{ backgroundColor: isEnter ? 'crimson' : '' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={isComplete} onChange={this.handleCheck(id)} />
          <span>{name}</span>
          <button className='btn btn-danger' style={{ display: isEnter ? 'block' : 'none' }}>删除</button>
        </label>
      </li>
    )
  }
}
