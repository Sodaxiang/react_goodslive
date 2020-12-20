import { createStore } from 'redux';
import rootReducers from '../reducers';

const configureStore =()=> createStore(
    rootReducers,  
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() :undefined,
);

export default configureStore;