import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <TodoApp />
      </div>
    );
  }
}


export default App;
