import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStuData = () => {
    axios.get('http://localhost:3000/index').then(
      // axios.get('http://123.207.32.32:8000/home/multidata').then(
      (response) => { console.log('成功了',response.data);},
      (err) => {console.log('失败了',err); }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStuData}>获取学生数据</button>
      </div>
    )
  }
}
