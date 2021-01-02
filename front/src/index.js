import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter.jsx'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import axios from 'axios'
import $ from 'static/js/jquery-3.3.1.min.js'
global.$ = $
global.axios = axios
global.store = configureStore()
import 'api/Constant/constant'
import 'api/Filter/filter'

ReactDOM.render(
	<Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
)
