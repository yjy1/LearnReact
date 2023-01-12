import React from 'react'
import hello from './index.module.css'
export default  class Hello extends React.Component{
    render(){
        return (
            <div>
                <h1>我是Hello组件</h1>
                {/* <h2 className='title'>hello,react!!!!!!!!</h2> */}
                <h2 className={hello.title}>hello,react!!!!!!!!</h2>
            </div>
        )
    }
}