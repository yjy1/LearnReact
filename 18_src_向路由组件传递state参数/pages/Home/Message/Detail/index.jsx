import React, { Component } from 'react'
import qs from 'querystringify'
const detailDatas = [
  { id: '01', content: '你好，杨程杰' },
  { id: '02', content: '你好，中国' } ,
  { id: '03', content: '你好，未来的自己' }
]

export default class Detail extends Component {
  render() {
    const {state} = this.props.location 
    const {id,title} = state  || {}
    console.log('iddddd',id);
    
    // 接收search参数
    const newDetailData =  detailDatas.find((detailDataObj)=>{
      return detailDataObj.id === id
    }) || {}
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
