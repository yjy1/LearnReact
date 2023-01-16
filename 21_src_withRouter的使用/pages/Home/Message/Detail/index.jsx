import React, { Component } from 'react'
import qs from 'querystringify'
const detailDatas = [
  { id: '01', content: '你好，杨程杰' },
  { id: '02', content: '你好，中国' } ,
  { id: '03', content: '你好，未来的自己' }
]

export default class Detail extends Component {
  render() {
   
    // 按收params参数
    // const {id,title} = this.props.match.params || {}

    // 接收search参数
    // const {search} = this.props.location 
    // const {id,title} = qs.parse(search.slice(1))

    // 接收state参数
    const {id,title} = this.props.location.state || {}
    
     
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
