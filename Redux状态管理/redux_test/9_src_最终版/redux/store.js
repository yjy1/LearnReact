/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {allReducer,cc} from  '../redux/reducers'

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
// 暴露store
export default store
