import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }
    
    add = () => {
        // 对象式的setState
        let { count } = this.state
        count += 1
        // // this.setState({ count }) /* 注意此时的更新是异步的 */
        // this.setState({ count },()=>{
        //     // 这里的ca11back是可选的回调函数，它在状本更新完毕、界面也更新后(render调用后)才被调用
        //     console.log('setState的回调',this );
        // })  

        // 函数式的setState
        this.setState((preState,props) => {
            console.log(preState,props);
            return { count: count + props.sendCount }
        })
 
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.add}>点我加一</button>
            </div>
        )
    }
}
