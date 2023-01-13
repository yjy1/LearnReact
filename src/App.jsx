import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Item from './components/Item'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', isComplete: true },
      { id: '002', name: '睡觉', isComplete: true },
      { id: '003', name: '打代码', isComplete: false },
      { id: '004', name: '逛街', isComplete: true },
    ]
  }
  // 负责接收一个对象
  addTodo = (todoObj) => { //注意：回调函数，可以接收调用方的数据
    const { todos } = this.state
    this.setState({
      todos: [
        todoObj,
        ...todos
      ]
    })
  }
  // 更新对象
  updateTodo = (id, isComplete) => {
    console.log(id, isComplete);
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (id == todo.id) { //找到对应id的数据
        return { ...todo, isComplete }   //结构对象并修改元素的值
      } else {
        return todo //注意：必须返回元素，否则报错
      }
    })
    this.setState({
      todos: newTodos
    })
  }
  // 删除对象,注意：不需要定义函数的 event事件时不用写高阶函数
  deleteTodo = (id) => {
    console.log('zzzzzzzz');
    console.log(id);
    // 根据id删除指定对象
    const { todos } = this.state
    /*
        Calls a defined callback function on each element of an array, and returns an array that contains the results.
     */
    // const newTodos = todos.map((todoObj,index) => {
    //   if (id == todoObj.id){
    //     todos.splice(0,index)
    //     return []
    //   }
    //   else
    //     return todoObj
    // })

    /* 
        Returns the elements of an array that meet the condition specified in a callback function.
    */
    const newTodos =  todos.filter((todoObj)=>{
      return todoObj.id != id //返回不是传入id的对象，即可将对应id的对象删除
    })
    console.log('newTodos',newTodos);
    // 重新设置状态
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer />
        </div>
      </div>
    )
  }
}
