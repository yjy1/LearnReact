import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users:[
        //     { id: '001', name: 'tom', age: 18 },
        //     { id: '002', name: 'jack', age: 19 },
        //     { id: '003', name: 'ycj', age: 20 },
        // ]
        users:"abc"
    }
  render() {
    return (
      <div>
            <h2>我是Child组件</h2> 
            {
                this.state.users.map((userObj)=>{
                    const {id,name,age} = userObj
                    return <li key={id}>姓名：{name} -- 年龄{age}</li>
                })

            }
      </div>
    )
  }
}
