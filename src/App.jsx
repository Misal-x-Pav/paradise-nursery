import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="*" element={<AboutUs />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <span>Paradise Nursery</span>
        <span>Bring home a little more green.</span>
      </footer>
    </div>
  );
}