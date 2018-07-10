import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter.jsx'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
)
