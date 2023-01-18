import React, { Component } from 'react'
import './index.css'
// 创建容器对象
const MyContext = React.createContext()
export default class A extends Component {
    state = { username: 'tom', age: 18 }
    render() {
        const { username, age } = this.state
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是：{username}</h4>
                {/* 此种只适合类式组件使用 */}
                <MyContext.Provider value={{ username, age }} >
                    <B />
                </MyContext.Provider>

            </div>
        )
    }
}

class B extends Component {
    static contextType = MyContext
    render() {
        console.log(this);
        return (
            <div className='son'>
                <h3>我是B组件</h3>
                <h4>我从A组件接收到用户名是:{'???'}</h4>
                <C />
            </div>
        )
    }
}

// class C extends Component {
//     // If set, this.context will be set at runtime to the current value of the given Context.
//     static contextType = MyContext
//     render() {
//         console.log(this );
//         const { username, age } = this.context
//         return (
//             <div className='grandson'>
//                 <h3>我是C组件</h3>
//                 <h4>我从A组件接收到用户名是:{ username},年龄是：{age}</h4>
//             </div>
//         )
//     }
// }

function C() {
    console.log(MyContext);

    return (
        <div className='grandson'>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到用户名是:
                <MyContext.Consumer>
                    {
                        value => {
                              console.log('ccccc',value) 
                            const { username, age } = value
                            return `${username},年龄是${age}` 
                        }
                    }
                </MyContext.Consumer>
             </h4>
        </div>
    )

}