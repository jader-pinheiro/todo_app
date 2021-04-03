import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware,createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import rootReducer from './reducers/rootReducer'

//integração do o plugin redux-devTools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
     && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer,devTools)

ReactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>    
, document.getElementById('app'))