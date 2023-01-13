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
  addTodo = (todoObj)=>{ //注意：回调函数，可以接收调用方的数据
    const {todos} = this.state
    this.setState({ 
      todos: [
        todoObj,
        ...todos
      ] 
    })
  }
  // 更新对象
  updateTodo=(id,isComplete)=>{
   console.log(id,isComplete);
    const { todos } = this.state
    const newTodos = todos.map((todo)=>{
      if(id == todo.id){ //找到对应id的数据
        return { ...todo, isComplete }   //结构对象并修改元素的值
      }else{
        return todo //注意：必须返回元素，否则报错
      }
    })
    this.setState({
      todos:newTodos
    })
  }
  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo}/>
          <Footer />
        </div>
      </div>
    )
  }
}
