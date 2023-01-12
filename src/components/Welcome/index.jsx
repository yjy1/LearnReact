import React,{Component} from 'react'
import welcome from  './index.module.css' //样式的模块化
export default class Welcome extends Component{
    render(){
        return (
            <div>
                {/* <h2 className='title'>Welcome!</h2> */}
                <h2 className={welcome.title}>Welcome!</h2>
            </div>
        )
    }
} 

