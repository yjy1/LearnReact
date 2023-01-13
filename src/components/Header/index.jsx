import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import  './index.css'


// console.log(nanoid()); //注意：全球唯一标识
export default class Header extends Component {
  // 对传递进来的方法进行限制
  static propTypes ={
    addTodo:PropTypes.func.isRequired
  }
  // 键盘事件的回调
  handleEnter = (event)=>{
    const {code,target} = event
    const {addTodo } = this.props
    
    const todoObj = { id: nanoid(), name:target.value , isComplete: false }
    if( code!='Enter' || (target.value.trim() =='')){
      return
    }
    // 负责传递一个对象
    addTodo(todoObj) //注意：通过回调函数传递数据给父组件
    target.value = ''
  }
  
  render() {
   
    return (
      <div className='todo-header'>
        <input type="text" onKeyUp={this.handleEnter} placeholder='请输入你的任务名称，按回车键确认' />
      </div>
    )
  }
}
