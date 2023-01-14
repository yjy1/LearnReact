import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  state = {
    users: [],
    isFirst: true, // 是否为第一次打开页面
    isLoding: false,
    error: '' // 存储请求相关的错误信息
  }
  //  保存用户数据
  // saveUsers = (users) => {
  //   this.setState({ users })
  // }
  //  保存错误信息
  // saveError = (error) => {
  //   this.setState({ error })
  // }
  updateAppState=(stateObj)=>{
    console.log('stateObj,,,,,',stateObj);
    this.setState(stateObj)
  }
  // changeIsFirst = (isFirst) => {
  //   this.setState({ isFirst })
  // }
  // changeIsLoading = (isLoading) => {
  //   this.setState({ isLoading })
  // }
  render() {
    /* 注意:解构要写好this.state  */
    const { users, isFirst, error,isLoading } = this.state
    return (
      <div>
        <Search isFirst={isFirst} updateAppState={this.updateAppState} />
        {/* <List users={users} isFirst={isFirst} error={error}  isLoading={isLoading}/> */}
        <List  {...this.state} />
      </div>
    )
  }
}
