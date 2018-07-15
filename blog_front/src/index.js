import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter.jsx'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import $ from 'static/js/jquery-3.3.1.min.js'
window.$ = $

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
)
