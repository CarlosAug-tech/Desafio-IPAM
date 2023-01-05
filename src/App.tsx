import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './main/routes';
import store from './infra/store';

import GlobalStyle from './presentation/assets/styles/global';
import { ToastContainerFactory } from './main/factories/Components/ToastContainerFactory';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes />
                <GlobalStyle />
                <ToastContainerFactory />
            </Provider>
        </BrowserRouter>
    );
}

export default App;
