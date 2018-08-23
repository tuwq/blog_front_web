import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)
    return store
}

/*,applyMiddleware(createLogger),
    	window.devToolsExtension ? window.devToolsExtension() : undefined*/