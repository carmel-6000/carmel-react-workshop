import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Entry  from './Entry';
import EditEntry  from './EditEntry';
import './App.css';


class ListPanel extends Component {
  constructor(props){
    super(props);
  }

  switchEntry=(entry,i)=>{
    return entry.isNew ? <EditEntry msg={entry.msg}/> : <Entry index={i} msg={entry.msg}/>
  }

  render() {
    
    const {todoList}=this.props.TodoListStore;

    return (
        
        <ul className='todolist-container'>
            {Object.values(todoList).map((entry,i)=>this.switchEntry(entry,i))}
        </ul>

    );
  }
}

export default ListPanel;