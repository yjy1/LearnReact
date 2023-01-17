import { ADD_PERSON } from "../constant"
const initState = [{ id: '1', name: 'tom', age: 18 }]
export default function personReducer(preState = initState, action) {
    console.log('personReducer',action);
    const { type, data } = action
    if(type == ADD_PERSON)
        return  [data,...preState] /* 添加一个对象，解构赋值的方式 */
    return preState
}