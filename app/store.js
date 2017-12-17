import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
import thunkMiddlewear from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  mainReducer,
  applyMiddleware(thunkMiddlewear, createLogger()
  )
);

export default store;
