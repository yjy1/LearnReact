import { ADD_PERSON } from "../constant";
export const createAddPersonAction = personObj => ({ type: ADD_PERSON, data:personObj }) /* type:动作类型,data:数据 */