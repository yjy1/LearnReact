import React, { Component } from 'react'

export default class News extends Component {
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.props.history.push('/home/message')
    //     }, 1000);
    // }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/news1">news1</a> &nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="/news2">news2</a> &nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="/news3">news3</a> &nbsp;&nbsp;
                    </li>
                </ul>
            </div>
        )
    }
}
