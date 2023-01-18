import React, { Component, hook } from 'react'

/* 类式组件 */
/* 
export default class Demo extends Component {
   state = { count: 0 }
   add = ()=>{
       this.setState(state => ({ count: state.count + 1 }))
   }
   render() {
       return (
           <div>
               <h2>当前求和为：{this.state.count}</h2>
               <button onClick={this.add}>点我加一</button>
           </div>
       )
   }
} */

/* 函数式组件 */
export default function Demo() {
    console.log('Demo...');
    const [count, setCount] = React.useState(0) /* 数组的解构赋值 */
    const [name, setName] = React.useState('yangchengjie')

    // const [{ count, name }, { setCount, setName }] = React.useState({ count: 0, name: 'yangchengjie' }) /* 不能写多个更新方法 */


    // 加的回调
    function add() {
        // setCount(count + 1) 第一种写法    
        /*  type SetStateAction<S> = ((prevState: S) => S); */
        setCount(count => count + 1)
    }
    function changeName(){
        setName(name => 'tom')
    }
    return (
        <div>
            <h2>当前求和为：{count}</h2> <button onClick={add}>点我加一</button>
            <h2>我的名字是:{name}</h2><button onClick={changeName}>点我换名字</button>
           
        </div>
    )
}