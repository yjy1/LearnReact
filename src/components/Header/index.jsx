import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class Header extends Component {
    goBack=()=>{
        console.log('back////',this);
        this.props.history.goBack()
    }
    goForward=()=>{
        this.props.history.goForward()
    }
    goTo = ()=>{
        return () => {
            this.props.history.go(2)
        }
    }
    render() {
        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                    <button onClick={this.goBack}>回退</button>
                    <button onClick={this.goForward}>前进</button>
                    <button onClick={this.goTo(0)}>前进到</button>
                </div>
            </div>
        )
    }
}

/* 
    //withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
    //withRouter的返回值是一个新组件
*/
export default  withRouter(Header) 