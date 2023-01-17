import { ADD_PERSON } from "../constant"
const initState = { id: '1', name: 'tom', ag: 18 }
export default personReducer = (preState = initState, action) => {
    const { type, data } = action
    if(type == ADD_PERSON)
        return  [data,...preState] /* 添加一个对象，解构赋值的方式 */
    return preState
}