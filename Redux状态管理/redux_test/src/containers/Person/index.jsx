import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
import { nanoid } from 'nanoid'
export class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value 
        const age = this.ageNode.value 
        const personObj = { id: nanoid(), name, age }
        console.log(this);
        this.props.addPerson(personObj)
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

const mapStateToProps = (state) => ({ persons: state })

const mapDispatchToProps = { addPerson: createAddPersonAction }

export default connect(mapStateToProps, mapDispatchToProps)(Person)