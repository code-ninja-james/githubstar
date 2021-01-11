import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import repoReducer from './reducers/repoReducer';

const rootReducer = combineReducers({
repositories:repoReducer
});

const middleware=composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer,middleware);

