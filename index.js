import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/utils/configureStore';
import App from './App';

const store = configureStore();

const ReduxApp = () => (
    <Provider store={store}>
        <App />   
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);
