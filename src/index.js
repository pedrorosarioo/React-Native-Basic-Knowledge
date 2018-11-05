import React from 'react';
import Routes from './routes';
import './config/StatusBarConfig';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
   return(
    <Provider store={store}>
        <Routes />
    </Provider>
   ); 
};

export default App;