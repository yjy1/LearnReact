// 引入createStore ,专门用于创建redux中最为核心的store对象
import { combineReducers } from 'redux'
//  引入为Count组件服务的reducer
import count  from '../reducers/count'
import persons  from '../reducers/person'
/* 汇总所有的reducer变为一个总的reducer */
export const allReducer = combineReducers({
    count ,
    persons 
})
 