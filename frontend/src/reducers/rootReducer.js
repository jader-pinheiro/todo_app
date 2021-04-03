import { combineReducers } from 'redux'
import todoReducer from './todoReducer'


const rootReducer = combineReducers({

    todo_rdc: todoReducer

})

export default rootReducer