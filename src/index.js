import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GithubProvider>
        <AlertProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AlertProvider>
    </GithubProvider>
);

