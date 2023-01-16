import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    const {  children } = this.props
    //  console.log('zzzzzzz',{...this.props});
    console.log('zzzzzzz', this);
    return (
      <NavLink activeClassName='demo' className="list-group-item"  {...this.props} children={children}    /> 
    )
  }
}
