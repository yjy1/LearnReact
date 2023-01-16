import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }
    increment = () => {
        const { value } = this.selectRef
        let { count } = this.state
        count += parseInt(value)
        console.log('aaaaaa', value);
        this.setState({ count })
    }
    decrement = () => {
        const { value } = this.selectRef
        let { count } = this.state
        count -= parseInt(value)
        console.log('aaaaaa', value);
        this.setState({ count })
    }
    increment4Odd = () => {
        const { value } = this.selectRef
        let { count } = this.state
        if (count % 2 == 0) return //为偶数时返回
        count += parseInt(value)
        console.log('aaaaaa', value);
        this.setState({ count })
    }
    incrementAsync = () => {
        const { value } = this.selectRef
        let { count } = this.state
        setTimeout(() => {
            count += parseInt(value)
            this.setState({ count })
        }, 500);
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h2>当前求和为:{count}</h2>
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
