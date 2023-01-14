import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentsData = () => {
    // axios.get('http://localhost:5000/students').then( //注意：直接请求5000服务器，报跨域问题；使用代理解决
    axios.get('http://localhost:3000/api1/students').then(
      //若3000无/api1/students此请求资源，则请求'http://localhost:5000' 
      (response) => { console.log('成功了', response.data); },
      (err) => { console.log('失败了', err); }
    )
  }
  getFloorData = () => {
    axios.get('http://localhost:3000/api2/chartDataOne').then(
      (response) => { console.log('成功了',response.data);},
      (err) => {console.log('失败了',err); }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>获取学生数据</button>
        <button onClick={this.getFloorData}>获取楼层数据</button>
      </div>
    )
  }
}
