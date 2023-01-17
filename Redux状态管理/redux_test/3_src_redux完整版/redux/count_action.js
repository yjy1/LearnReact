/* 
    该文件专门为Count组件生成action对象 
*/
import {INCREMENT,DECREMENT,INCREMENT4ODD,INCREMENTASYNC} from './constant'
export function createIncrementAction(data){
    return { type: INCREMENT, data }
}
export function createDecrementAction(data){
    return {type: DECREMENT,data }
}
export function createIncrement4OddAction(data){
    return {type:INCREMENT4ODD,data }
}
export function createIncrementAsyncAction(data){
    return {type:INCREMENTASYNC,data }
}