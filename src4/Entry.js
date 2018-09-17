import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';

@observer(['TodoListStore','AnotherStore'])

class Entry extends Component {
  constructor(props){
    super(props);
  }

  
  removeEntry=()=>{
    this.props.TodoListStore.removeEntry(this.props.index);
  }

  render() {
    
    
    return (
      <li className='entry-item'>
        <div className='entry-msg'> {this.props.msg}</div>
        <div className='entry-btn'> <button onClick={this.removeEntry}>X</button></div>
      </li>
    );
  }
}

export default Entry;
