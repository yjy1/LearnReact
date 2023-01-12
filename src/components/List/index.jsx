import React, { Component } from 'react'
import Item from '../Item'
import  './index.css'
export default class List extends Component {
  render() {
    return (
      <ul className='todo-main'>
        <Item/>
        <Item/>
        <Item/>
        {/* <li>
          <label>
            <input type="checkbox" />
            <span>xxx</span>
            <button className='btn btn-danger' style={{display:'none'}}>删除</button>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>yyy</span>
            <button className='btn btn-danger' style={{display:'none'}}>删除</button>
          </label>
        </li> */}
      </ul>
       
    )
  }
}
