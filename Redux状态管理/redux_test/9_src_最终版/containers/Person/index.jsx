import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
import { nanoid } from 'nanoid'
class Person extends Component {
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
                <h2>Count组件求和为:{this.props.countC}</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder='请输入名字' ></input>
                <input ref={c=>this.ageNode = c} type="text" placeholder='请输入年龄' ></input>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                    //    console.log('mmmmmmmmmmmm',this.props.persons ) 
                       this.props.persons.map((personObj)=>{
                           return <li key={personObj.id}>{personObj.name}--{personObj.age}</li>
                       })
                    }
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    persons: state.persons ,
    countC: state.count
})

const mapDispatchToProps = { addPerson  }

export default connect(mapStateToProps, mapDispatchToProps)(Person)