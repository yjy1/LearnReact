import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value 
        const age = this.ageNode.value 
        console.log(name,age );

    }
    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder='请输入名字' ></input>
                <input ref={c=>this.ageNode = c} type="text" placeholder='请输入年龄' ></input>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <li>名字1--年龄1</li>
                    <li>名字2--年龄2</li>
                    <li>名字3--年龄3</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Person)