import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Entry  from './Entry';
import EditEntry  from './EditEntry';
import './App.css';

@observer(['TodoListStore'])
class ControlPanel extends Component {
  
  constructor(props){
    super(props);
  }


  addEntriesFromDB=(e)=>{
    
    let prevMsg=e.target.innerHTML;
    e.target.innerHTML="Hold on...";
    e.persist();
    this.props.TodoListStore.addEntriesFromDB().then(()=>{
        e.target.innerHTML=prevMsg;
    });
  }

  addNewEntry=()=>{
    this.props.TodoListStore.addNewEntry();
  }

  render() {
    
    const {todoList}=this.props.TodoListStore;

    return (
        
        <div>
            <button onClick={this.addNewEntry}>Add new one</button>
            <button onClick={(e)=>this.addEntriesFromDB(e)}>Fetch a promise with Mobx</button>
        </div>

    );
  }
}

export default ControlPanel;