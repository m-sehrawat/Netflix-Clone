import { applyMiddleware, combineReducers, createStore } from 'redux';
import { authReducer } from '../auth/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ authReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));