//  引入Count的UI组件
// import CountUI from '../../components/Count'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';
// 引入connect，用于连接UI组件与redux
import { connect } from 'react-redux'
import React, { Component } from 'react'

class CountUI extends Component {
    state = { carName:'奔驰c63' }
   
    increment = () => {
        const { value } = this.selectRef
        console.log(this.props);
        this.props.increment(value)
    }
    decrement = () => {
        const { value } = this.selectRef
        this.props.decrement(value)
    }
    increment4Odd = () => {
        const { value } = this.selectRef
        
        if (this.props.count % 2 == 0) return //为偶数时返回
        this.props.increment(value)
    }
    incrementAsync = () => {
        const { value } = this.selectRef
        this.props.incrementAsync(value,500)
    }
    
    render() {
        const {count} = this.props
        console.log(this.props);
        return (
            <div>
                <h2>当前求和为:{ count }</h2>
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


export default connect(
    state => ({ count: state }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(CountUI)

