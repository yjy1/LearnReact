import React, { Component } from 'react'
import store from '../../redux/store'

const currtCount = store.getState()
export default class Count extends Component {
    state = { carName:'奔驰c63' }
    increment = () => {
        const { value } = this.selectRef
        store.dispatch({ type: 'increment', data: value })
    }
    decrement = () => {
        const { value } = this.selectRef
        store.dispatch({ type: 'decrement', data: value })
    }
    increment4Odd = () => {
        const { value } = this.selectRef
        const count = store.getState()
        if (count % 2 == 0) return //为偶数时返回
        store.dispatch({ type: 'increment4Odd', data: value })
    }
    incrementAsync = () => {
        const { value } = this.selectRef
        setTimeout(() => {
            store.dispatch({ type: 'incrementAsync', data: value })
        }, 500);
    }
    /* componentDidMount(){
        // 监测redux中状态的变化，只要变化，就调用render
        store.subscribe((a)=>{
          // 注意：需执行此句代码重新渲染render，否则store更新的数据无法渲染到页面
          this.setState({})  //console.log('subscribe....',a);
        })
    } */
    render() {
        console.log('render.....');
        const { count } = this.state
        console.log('getState',store.getState() );
        return (
            <div>
                <h2>当前求和为:{ store.getState()}</h2>
                <select ref={c => this.selectRef = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;

                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.increment4Odd}>当前求和为奇数，再相加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
