 import React, { Component } from 'react'
 import Search from './components/Search'
 import List from './components/List'
 export default class App extends Component {
   state = {
     users: []
   }
   saveUsers = (users) => {
     console.log('saving......');
     this.setState({ users })
     console.log('saving done',users);
   }
   render() {
    /* 注意:解构要写好this.state  */
     const { users } = this.state 
     return (
       <div>
         <Search saveUsers={this.saveUsers}/>
         <List users={users} />
       </div>
     )
   }
 }
 