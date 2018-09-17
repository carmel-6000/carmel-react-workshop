import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import TodoListStore from './stores/todolist.store';
import stores from './stores';
import { Provider } from 'mobx-react';

//console.log("STORES?",stores);
ReactDOM.render(
    <Provider {...stores} > 
        <App /> 
    </Provider>, 

    document.getElementById('root'));
registerServiceWorker();
