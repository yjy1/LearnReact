// 创建"外壳"组件App
import React,{Component} from "react"; //注意：这里的{}不是解构赋值，而是分别暴露
 import Hello from './components/Hello' //注意：引入js/jsx文件可以不写后缀
 import Welcome from './components/Welcome'
// 创建并暴露App组件
export default class App extends  Component{
    render(){
        return (
            <div>
                {/* hello,react!     */}
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

// export default App 