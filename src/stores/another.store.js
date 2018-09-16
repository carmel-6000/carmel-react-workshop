import { observable } from 'mobx';
import { runInAction } from "mobx";

class AnotherStore{
    
    @observable anotherList=
[        {msg:"hi"},{msg:"hihi"},{msg:"hihihi"}
    ];
    addNewEntry=()=>{
        this.todoList.push({msg:"xhi"});
    }

    reloadMsgs = async () => {
      //const response = await fetch(`https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`);
      const response = await setTimeout(()=>{return [{msg:"new"}]},1000);
      const data = await response.json();

      runInAction(() => {
        this.anotherList = data;
      });
    };

}

export default new AnotherStore();