// 引入react核心库
import React from "react";
// 引入react-dom
import ReactDOM from "react-dom";
// 引入App组件
import App from './App'
// import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter >
        <App />
    </BrowserRouter>
    , document.getElementById('root')
)