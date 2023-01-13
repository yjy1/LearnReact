import React, { Component } from 'react'
import Item from '../Item'
import  './index.css'
export default class List extends Component {
  render() {
    const {todos,updateTodo} = this.props
    return (
      <ul className='todo-main'>
        {
          todos.map((obj)=>{
            // {...obj} 结构并传递给子组件
            return  <Item updateTodo={updateTodo} {...obj} key={obj.id}/>
          })
        }
      </ul>
    )
  }
}
