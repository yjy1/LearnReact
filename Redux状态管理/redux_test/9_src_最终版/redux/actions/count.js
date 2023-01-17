/* 
    该文件专门为Count组件生成action对象 
*/
/* 
    同步action，就是指action的值为object类型的一般对象
*/
import {INCREMENT,DECREMENT } from '../constant'

export function increment (data){
    return { type: INCREMENT, data }
}
export function decrement (data){
    return {type: DECREMENT,data }
}
 
/* 
    异步的action，就是指action的值为函数,异步action中一般会调用同步action
    PS:异步action不是必须要用的
*/
export const incrementAsync  = (data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch({type:INCREMENT,data})
        }, time);
    }
}