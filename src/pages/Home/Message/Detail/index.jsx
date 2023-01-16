import React, { Component } from 'react'

const detailDatas = [
  { id: '01', content: '你好，杨程杰' },
  { id: '02', content: '你好，中国' } ,
  { id: '03', content: '你好，未来的自己' }
]
export default class Detail extends Component {

  render() {
    console.log('aaaaaaaaprops',this.props);
    const { id, title } = this.props.match.params
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
