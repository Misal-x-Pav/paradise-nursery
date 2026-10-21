import { Leaf, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/CartSlice.jsx';

export default function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-mark"><Leaf size={22} /></span>
        <span>paradise<span className="brand-light">nursery</span></span>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/plants" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Plants</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link cart-link active' : 'nav-link cart-link'}>
          <ShoppingCart size={19} />
          <span>Cart</span>
          <span className="cart-badge" aria-label={`${cartCount} items in cart`}>{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}