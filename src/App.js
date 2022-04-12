import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';
import UserItems from './components/user/UserItems';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Navbar icon='fab fa-github' title='Github Finder'/>
        <UserItems />
      </div>
    );
  }
}

export default App;
