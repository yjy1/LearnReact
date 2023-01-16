import React, { Component } from 'react'
import qs from 'querystringify'
const detailDatas = [
  { id: '01', content: '你好，杨程杰' },
  { id: '02', content: '你好，中国' } ,
  { id: '03', content: '你好，未来的自己' }
]
let obj = { name: 'tom', age: 18 }
console.log('aaaaaaaaprops',qs.stringify(obj)  );

let carStr = "car=奔驰&price=29"
console.log('carStr',qs.parse(carStr));

export default class Detail extends Component {

  render() {
    // const { id, title } = this.props.match.params //接收params参数

    const {search} = this.props.location 
    const searchObj =  qs.parse(search)
    console.log('searchObj',searchObj);

    const {id,title} = searchObj
    // 接收search参数
    const newDetailData =  detailDatas.find((detailDataObj)=>{
      return detailDataObj.id === id
    })
    return (
      <div>
        <ul>
          <li>ID:{ id}</li>
          <li>TITLE:{title}</li>
          <li>CONTETN:{newDetailData.content}</li>
        </ul>
      </div>
    )
  }
}
