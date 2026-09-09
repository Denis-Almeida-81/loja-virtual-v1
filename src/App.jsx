import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation'
export default function App() {
    return <div className="app">
        <Header /><Routes><Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} /><Route
                path="/produto/:id" element={<ProductDetails />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/cadastro" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pedido-confirmado" element={<Confirmation />}
            /></Routes><Footer /></div>
}
