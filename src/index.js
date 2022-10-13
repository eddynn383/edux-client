import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
// import { AuthProvider } from './context/AuthContext';
import { store } from './services/store';
import { NavProvider } from './context/NavContext';

// Component
import App from './App';

// Style
import "./assets/design/reset.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <NavProvider>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </NavProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
