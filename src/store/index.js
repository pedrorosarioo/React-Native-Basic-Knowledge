import React from 'react';
import { createStore, combineReducers } from 'redux';
import knowledges from './knowledges';

const reducers = combineReducers({
    knowledges,
});

const store = createStore(reducers);

export default store;