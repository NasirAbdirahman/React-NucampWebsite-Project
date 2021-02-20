import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Is the intial State of our App which we get straight from the src data files. Combines All our reducers in object and then gives it to the create store//
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}; 

