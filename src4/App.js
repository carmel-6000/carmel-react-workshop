import React, { Component } from 'react';
import './App.css';
import TodoList from './Todolist';
import { Provider } from 'mobx-react';

class App extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}

export default App;
