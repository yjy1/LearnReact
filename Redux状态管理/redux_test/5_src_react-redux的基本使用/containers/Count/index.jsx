//  引入Count的UI组件
import CountUI from '../../components/Count'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';
// 引入store    
// import store from '../../redux/store'
// 引入connect，用于连接UI组件与redux
import { connect } from 'react-redux'

/* 
    1,mapstateToProps函数返回的是一个对象;
    2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
    3.mapstateToProps用于传递状态
*/
const mapStateToProps = (state) => {
    console.log('stateeee', state);
    return { count: state }
}
/* 
    1.mapDispatchToProps函数返回的是一个对象:
    2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递操作状态的方法
*/
const mapDispatchToProps = (dispatch,b ) => {
    return {
        increment: (data) => {
            //  通知redux执行加法
            //  dispatch({type:'increment',data})
             dispatch(createIncrementAction(data))
        },
        decrement: data => dispatch(createDecrementAction(data)),
        incrementAsync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
    }
}
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

