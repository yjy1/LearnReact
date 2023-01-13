import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = { isEnter: false }
  handleMouse = (isEnter) => {
    return ()=>{
       this.setState({isEnter})
    }
  }
  render() {
    const {name,isComplete} =this.props 
    const {isEnter} = this.state
    return (
      // 注意：style作为关键字使用
      <li style={{ backgroundColor: isEnter ? 'crimson' : '' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={isComplete} />
          <span>{name}</span>
          <button className='btn btn-danger' style={{ display: isEnter?'block':'none'  }}>删除</button>
        </label>
      </li>
    )
  }
}
