import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
    state = { carName: '奔驰c36' }
    changeCar = () => {
        // this.setState({ carName: '迈巴赫' })
        // this.setState({ })
        const obj = this.state
        console.log(obj === this.state);
        obj.carName = '蔚来'
        this.setState(obj)
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.carName == nextState.carName)
    //         return false
    //     return true
    // }
    render() {
        const { carName } = this.state
        console.log('Parent-render');
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <span>我的车是：{carName}</span>
                <button onClick={this.changeCar}>换车</button>
                <Child carName={'奥拓'} />
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps) {
    //     console.log('Child nextProps', this.props.carName == nextProps.carName);
    //     // if (this.props.carName == nextProps.carName)
    //     //     return false
    //     // return true
    //     return this.props.carName == nextProps.carName
    // }
    render() {
        console.log('Child-render');
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接收到的车是：{this.props.carName}</span>
            </div>
        )
    }
}
