//  引入Count的UI组件
import CountUI from '../../components/Count'
// 引入store    
// import store from '../../redux/store'
// 引入connect，用于连接UI组件与redux
import {connect}from 'react-redux'
// 使用connect()()创建并暴露一个Count的容器组件
export default connect()(CountUI)
  
