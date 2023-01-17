import { ADD_PERSON } from "../constant"
const initState = [{ id: '1', name: 'tom', age: 18 }]
export default function personReducer(preState = initState, action) {
    console.log('personReducer',action);
    const { type, data } = action
    if(type == ADD_PERSON){
        /* 
            注意：此写法会造成页面不刷新数据，因为react底层对数组的比较是浅比较，即只比较内存地址是否一致，不对内容值进行比较
            此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了
         */
       /*  preState.push(data) 
        return preState  */

        return  [data,...preState]  
    }
    
    return preState
}