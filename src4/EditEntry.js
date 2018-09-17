import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';

@observer(['TodoListStore'])
class EditEntry extends Component {
  
  constructor(props){
    super(props);
    //this.state.msg=""; yields: _this.state is undefined
    this.state={msg:""};
  }

  
  saveEntry=()=>{
    
    this.props.TodoListStore.saveEntry(this.props.index,this.state.msg).then(()=>{
      
      console.log("new list",
        Object.values(this.props.TodoListStore.todoList).map((entry,i)=>
          {return {msg:entry.msg,isNew:entry.isNew}}
          )
        );

    });
  }
  handleInputBox=(e)=>{
    this.setState({msg:e.target.value});
  }

  render() {
    
    
    return (
      <li className='entry-item'>
        {console.log("This state is",this.state);}
        <input type='text' className='entry-msg' value={this.state.msg} onChange={this.handleInputBox}/>
        <div className='entry-btn'> <button onClick={this.saveEntry}>Save</button></div>
      </li>
    );
  }
}

export default EditEntry;