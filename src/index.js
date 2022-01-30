import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { useStore } from './store/store';
import { initializeStore } from './store/store'

const LandingComponent = () => {
    let initialReduxState = {}
    const reduxStore = initializeStore()
    initialReduxState = reduxStore.getState()
    const store = useStore(initialReduxState)

    return (
    <Provider store={store}>
        <App/>
    </Provider>
    );
}
ReactDOM.render(
    <LandingComponent/>,
    document.getElementById("root")
);

