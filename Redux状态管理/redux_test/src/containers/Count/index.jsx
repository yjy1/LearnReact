import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createIncrementAction} from '../../redux/count_action'
class Count extends Component {
    add = () => {
        console.log(this.props);
        this.props.add(1 )
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.he}</h2>
                <button onClick={this.add}>点我加一</button>
            </div>
        )
    }
}

export default connect(
    state => ({ he: state }),
    {
        add: createIncrementAction
    }
)(Count)
