//  引入Count的UI组件
import CountUI from '../../components/Count'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';
 
// 引入connect，用于连接UI组件与redux
import { connect } from 'react-redux'
 
export default connect(
    state => ({ count: state }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(CountUI)

