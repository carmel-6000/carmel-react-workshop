import { observable,runInAction } from 'mobx';

class TodoListStore{
    
    @observable todoList=[
        {msg:"First note",isNew:false},{msg:"Second note",isNew:false},{msg:"Third note",isNew:false},{msg:"Fourth note",isNew:false}
    ];
    
    addNewEntry=()=>{
        this.todoList.push({msg:"","isNew":true});
    }


    saveEntry = async (index,val) => {

      let data=new Promise((resolve)=>{
        setTimeout(()=>{
            
            this.todoList[index].msg=val;
            this.todoList[index].isNew=false;
            resolve([...this.todoList]);

        },1000);
      });
      runInAction(() => {this.todoList = data;});

    }
    
    removeEntry = async (index) => {

      let data=new Promise((resolve)=>{
        setTimeout(()=>{
            
            this.todoList.splice(index,1);
            resolve([...this.todoList]);

        },1000);
      });
      runInAction(() => {this.todoList = data;});


    }

    addEntriesFromDB = async () => {
      //const response = await fetch(`https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`);
      //const data = await response.json();
      let data=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([...this.todoList,{msg:'NEW'},{msg:"NEW NEW"}])
        },2000);
      });
      runInAction(() => {this.todoList = data;});
    };

}

export default new TodoListStore();