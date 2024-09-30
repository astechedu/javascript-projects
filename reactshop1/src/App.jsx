import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import Header from './components/Header'
//import Navbar from './components/Navbar'
import Footer from './components/Footer'
//import Content from './components/Content'
import Layout from './pages/Layout'
import ProductDetail from './pages/ProductDetail'
import ProductList from './pages/ProductList'
//import Content from './pages/Content'
import Myaccount from './pages/Myaccount'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Wishlist from './pages/Wishlist'
import Index from './pages/Index'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="index" element={<Index />} />
          <Route path="productdetail" element={<ProductDetail />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="myaccount" element={<Myaccount />} /> 
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />        
          <Route path="login" element={<Login />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />                       
        </Route>       
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
