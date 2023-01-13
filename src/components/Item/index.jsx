import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  render() {
    // const {obj} =this.props
    const {name,isComplete} =this.props 
    // console.log('bbbbbbbb',this );
    return (
      <li>
        <label>
          {/* 注意使用checked需要写上onChange,否则为只读；使用defaultChecked则无以上两个问题 */}
          <input type="checkbox" defaultChecked={isComplete} />
          {/* <span>{obj.name}</span> */}
          <span>{name}</span>
          <button className='btn btn-danger' style={{ display: 'none' }}>删除</button>
        </label>
      </li>
    )
  }
}
