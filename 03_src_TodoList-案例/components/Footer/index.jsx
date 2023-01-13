import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheck=(event)=>{
    const {checkAllTodo} = this.props
    checkAllTodo(event.target.checked)
  }
  handleClear=()=>{
    const {handleClear} = this.props
    handleClear()
  }
  render() {
    const {todos} = this.props
    const completeCount = todos.reduce((preVal, currentObj) => {
      return (preVal += currentObj.isComplete == true ? 1 : 0)
    },0)
    console.log('completeCount',completeCount);
    return (
      <div className='todo-footer'>
        <label>
          <input type="checkbox" onChange={this.handleCheck} 
            checked={(todos.length === completeCount && todos.length > 0) ? true : false} />
        </label>
        <span>
          <span>已完成{completeCount}</span> / 全部{todos.length}
        </span>
        <button onClick={this.handleClear} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
