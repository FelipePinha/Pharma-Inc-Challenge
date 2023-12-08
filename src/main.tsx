import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SearchProvider } from './contexts/FilterContext.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SearchProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </SearchProvider>
    </React.StrictMode>
);
