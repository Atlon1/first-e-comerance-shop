import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from "./App";
import React from 'react';
import ProductProvider from "./context/ProductContext";
import SidebarProvider from "./context/SidebarContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <SidebarProvider>
        <ProductProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ProductProvider>
    </SidebarProvider>
)

