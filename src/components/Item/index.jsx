import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Item extends Component {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
  state = { isEnter: false }
  // 鼠标事件的回调
  handleMouse = (isEnter) => {
    return () => {
      this.setState({ isEnter })
    }
  }
  // 复选框事件的回调
  handleCheck = (id) => {
    return (event) => {
      const { target } = event
      const { updateTodo } = this.props
      console.log('target.checked', target.checked);
      updateTodo(id, target.checked)
      // 注意：打印日志时的语句算一个参数
      // updateTodo('我是打印语句。。。', id, target.checked)
    }
  }
  // 删除数据
  // handleDelete=(id)=>{
  //   return ()=>{
  //     console.log('handleDelete');
  //     const { deleteTodo } = this.props
  //     // 传递要删除的id
  //     deleteTodo(id)
  //   }
  // }
  // 删除数据
  handleDelete = (id) => {
    if(!window.confirm('确定删除吗？')){
      return
    }
    const { deleteTodo } = this.props
    // 传递要删除的id
    deleteTodo(id)
  }
  render() {
    // 注意：此处可以获取对象的具体信息
    const { id, name, isComplete } = this.props
    const { isEnter } = this.state
    return (
      // 注意：style作为关键字使用
      <li style={{ backgroundColor: isEnter ? 'crimson' : '' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={isComplete} onChange={this.handleCheck(id)} />
          <span>{name}</span>
          {/* 不用高阶函数传递自定义参数的写法
              () => { this.handleDelete(id) }
          */}
          <button onClick={() => { this.handleDelete(id) }} className='btn btn-danger' style={{ display: isEnter ? 'block' : 'none' }}>删除</button>
        </label>
      </li>
    )
  }
}
