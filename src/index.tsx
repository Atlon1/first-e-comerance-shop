import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from "./App";
import React from 'react';
import ProductProvider from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById('root')!).render(


    <ProductProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ProductProvider>

)

