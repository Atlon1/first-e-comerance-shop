import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpArrow from "./components/UpArrow";



function App() {
    return <div className='overflow-hidden'>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
                {/*<Route path='/' element={<Home/>}/>*/}
            </Routes>
            <Sidebar/>
            <Footer/>

        </BrowserRouter>
    </div>;
}

export default App;
