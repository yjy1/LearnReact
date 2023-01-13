import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Item from './components/Item'
import Footer from './components/Footer'
import './App.css'
/* 
    todoList案例相关知识点 
      1.拆分组件、实现静态组件，注意: className、style的写法
      2.动态初始化列表，如何确定将数据放在哪个组件的state中
        --某个组件使用:放在其自身的state中
        --某些组件使用: 放在他们共同的父组件state中 (官方称此操作为: 状态提升)
      3.关于父子之间通信:
        1.[父组件]给[子组件] 传递数据: 通过props传递
        2.[子组件] 给[父组件] 传递数据: 通过props传递，要求父提前给子传递一个函数
      4.注意defaultChecked 和 checked的区别，类似的还有: defaultValue 和 value
      5.状态在哪里，操作状态的方法就在哪里
*/
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
    const newTodos =  todos.filter((todoObj)=>{
      return todoObj.id != id //返回不是传入id的对象，即可将对应id的对象删除
    })
    console.log('newTodos',newTodos);
    // 重新设置状态
    this.setState({ todos: newTodos })
  }
  // 全选
  checkAllTodo=(isCheckAll)=>{
    console.log(isCheckAll);
    const {todos} = this.state
    if (isCheckAll){
      const newTodos = todos.map((todoObj) => {
          return { ...todoObj, isComplete: isCheckAll }  //注意：需返回
      })
      console.log('xxxxxxxxxxx',newTodos);
      this.setState({ todos: newTodos })
    }
  }
   // 清除已完成todo
   handleClear=()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.isComplete
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} handleClear={this.handleClear} />
        </div>
      </div>
    )
  }
}
