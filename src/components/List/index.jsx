import React, { Component } from 'react'
import Item from '../Item'
import  './index.css'
export default class List extends Component {
  render() {
    const {todos} = this.props
    return (
      <ul className='todo-main'>
        {
          todos.map((obj)=>{
            // console.log('aaaaaaaaa',obj);
            return  <Item  {...obj} key={obj.id}/>
            // return  <Item obj={obj} key={obj.id}/>
          })
        }
      </ul>
    )
  }
}
