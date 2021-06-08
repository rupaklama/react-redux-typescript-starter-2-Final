import { createStore, applyMiddleware } from 'redux';

// redux dev tool library
import { composeWithDevTools } from 'redux-devtools-extension';

// redux thunk middleware
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [thunk];

// STORE is the collections of different Reducers to create global state object.
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
