import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import "./index.css";
import { StateContextProvider } from './context';
import { Sepolia } from "@thirdweb-dev/chains";
import MainHome from './pages/MainHome';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={Sepolia}>
        <StateContextProvider>
            <Router>
                <App />
            </Router>
        </StateContextProvider>
    </ThirdwebProvider>
)