//  引入Count的UI组件
import CountUI from '../../components/Count'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';
 
// 引入connect，用于连接UI组件与redux
import { connect } from 'react-redux'

/* 
    映射状态
*/
const mapStateToProps =  state  =>  ({ count: state } ) 
 
/* 
     映射操作状态的方法
*/
const mapDispatchToProps = dispatch => (
    {
        increment: (data) => dispatch(createIncrementAction(data)),
        decrement: data => dispatch(createDecrementAction(data)),
        incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
    }
)
     
 
// 使用connect()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
export default connect(
    state => ({ count: state }),
    /* mapDispatchToProps一般写法 */
   /*  dispatch => ({
        increment: (data) => dispatch(createIncrementAction(data)),
        decrement: data => dispatch(createDecrementAction(data)),
        incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
    }) */
    /* mapDispatchToProps精简写法 */
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(CountUI)

