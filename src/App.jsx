import React, { Component } from 'react'
import { Button ,DatePicker} from 'antd';
import 'antd/dist/antd.css'
import { WechatOutlined, WeiboCircleOutlined,SearchOutlined, } from '@ant-design/icons'
const { RangePicker } = DatePicker;
export default class App extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  render() {
    return (
      <div>
        App
        <button>点击</button>
        <Button type="primary">按钮1</Button>
        <Button >按钮2</Button>
        <Button type='link'>按钮3</Button>
        <WechatOutlined />
        <WeiboCircleOutlined />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <DatePicker onChange={this.onChange} />
        <RangePicker />
      </div>
    )
  }
}
