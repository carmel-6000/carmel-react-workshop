import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { observer } from 'mobx-react';
import Entry  from './Entry';
import EditEntry from './EditEntry';
import ListPanel from './ListPanel';
import ControlPanel from './ControlPanel';
import './App.css';

@observer(['TodoListStore','AnotherStore'])
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={todoList:{todos:{}}};
  }

  componentDidMount(){
    
    console.log("componentDidMount is launched");
    
  }
  

  
  
  render() {
    
    return (
      <div style={{width:'400px',margin:'0 auto'}}>
        <h1>TodoList</h1>
        <ListPanel>
        <ControlPanel>

      </div>
    );
  }
}

export default TodoList;