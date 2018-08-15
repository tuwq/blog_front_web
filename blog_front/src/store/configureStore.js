import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)
    return store
}

/*,
    	applyMiddleware(createLogger),
        // 触发 redux-devtools
        // window.devToolsExtension ? window.devToolsExtension() : undefined*/