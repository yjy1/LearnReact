import React, { Component, hook } from 'react'
import ReactDOM from 'react-dom'

/* 类式组件 */
/* 
export default class Demo extends Component {
  state = { count: 0 }
  add = ()=>{
      this.setState(state => ({ count: state.count + 1 }))
  }
  componentDidMount(){
   this.timer = setInterval(() => {
       this.setState(state => ({ count: state.count + 1 }))
   }, 500);
  }
  unmount=()=>{
     ReactDOM.unmountComponentAtNode(document.getElementById('root'))  
  }
  componentWillUnmount(){
   clearInterval(this.timer)
  }
  render() {
      return (
          <div>
              <h2>当前求和为：{this.state.count}</h2>
              <button onClick={this.add}>点我加一</button>
              <button onClick={this.unmount}>卸载组件</button>
          </div>
      )
  }
} */



/* 函数式组件 */
export default function Demo() {
    console.log('start...');
    const [count, setCount] = React.useState(0) /* 数组的解构赋值 */
    const [name, setName] = React.useState('yangchengjie')
    // let timer=null;
    // const [{ count, name }, { setCount, setName }] = React.useState({ count: 0, name: 'yangchengjie' }) /* 不能写多个更新方法 */

    // 加的回调
    function add() {
        // setCount(count + 1) 第一种写法    
        /*  type SetStateAction<S> = ((prevState: S) => S); */
        setCount(count => count + 1)
    }
    function changeName() {
        setName(name => 'tom' + count)
    }
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    /* 相当于componentDidUpdate; 第二个参数：数组，传入要监听的值 */
    // React.useEffect(( )=>{
    //     console.log('useEffect');
    // },[count,name]) 

    /* 相当于componentDidMount */
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return () => { /* 加上此回调，相当于componentWillUnmount */
            console.log('componentWillUnmount');
            clearInterval(timer)
        }
    }, [])
    /* 相当于componentWillUnmount */
    // React.useEffect(( ) => {
    //     return ( ) => {
    //         clearInterval( timer)
    //     }
    // }, [])
    return (
        <div>
            <h2>当前求和为：{count}</h2> <button onClick={add}>点我加一</button>
            <h2>当前姓名为：{name}</h2> <button onClick={changeName}>点我换姓名</button>
            <button onClick={unmount}>卸载组件</button>
        </div>
    )
}