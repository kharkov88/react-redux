import React from'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware}from'redux'
import {Provider}from'react-redux'
import {createLogger} from 'redux-logger'
import {addData}from'./actions'
import {reducer}from'./reducer'
import Forma from'./forma'

const logger = createLogger()
const store = createStore(reducer,applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <Forma/>
    </Provider>,
    document.getElementById('root')
)