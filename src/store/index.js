// Entry point for vuex 
import todos from './modules/todos';
import { createStore } from 'vuex'

export default createStore({
    modules: {
        todos
    },
  });
  
