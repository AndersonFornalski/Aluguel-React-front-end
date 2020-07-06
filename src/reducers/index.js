import { rentalReducer, selectedRentalReducer } from './rental-reducer';
import thunk from 'redux-thunk';
import{ createStore, applyMiddleware, compose, combineReducers } from 'redux';

import {reducer as formReducer} from 'redux-form';
import { authReducer } from './auth-reducer';


export const init = () =>{  

    const reducer = combineReducers({
        rentals: rentalReducer,
        rental: selectedRentalReducer,
        auth: authReducer,
        form: formReducer
    })

    const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

    return store;
}