import React, { Component, hook } from 'react'
import ReactDOM from 'react-dom'

/* 类式组件 */
// export default class Demo extends Component {
//     state = { count: 0 }
//     myRef = React.createRef()
    
//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }
//     show = () => {
//         alert(this.myRef.current.value )
//     }
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 500);
//     }
//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我加一</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         )
//     }
// }



/* 函数式组件 */
export default function Demo() {
    console.log('start...');
    const [count, setCount] = React.useState(0) /* 数组的解构赋值 */
    const [name, setName] = React.useState('yangchengjie')
    const myRef = React.useRef()
    console.log(myRef); 
    
    // 加的回调
    function add() {
        setCount(count => count + 1)
    }
    function changeName() {
        setName(name => 'tom' + count)
    }
    function show(){
        alert(myRef.current.value)
    }
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
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
    return (
        <div>
            <h2>当前求和为：{count}</h2> <button onClick={add}>点我加一</button>
            <h2>当前姓名为：{name}</h2> <button onClick={changeName}>点我换姓名</button>
            <button onClick={unmount}>卸载组件</button>
            <input type="text"  ref={myRef}/>
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}