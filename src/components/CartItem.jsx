import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../redux/CartSlice.jsx';

const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <section className="empty-cart section-wrap">
        <div className="empty-cart-icon"><ShoppingBag size={30} /></div>
        <span className="section-kicker">YOUR GREEN FINDS</span>
        <h1>Your cart is taking<br /><em>a little breather.</em></h1>
        <p>Looks like you haven't picked your plants yet. There are plenty of leafy friends waiting to come home.</p>
        <Link to="/plants" className="button button-dark"><ArrowLeft size={17} /> Browse plants</Link>
      </section>
    );
  }

  return (
    <section className="cart-page section-wrap">
      <div className="cart-heading">
        <div><span className="eyebrow"><Leaf size={15} /> YOUR GREEN FINDS</span><h1>Your cart,<br /><em>your little jungle.</em></h1></div>
        <Link to="/plants" className="back-link"><ArrowLeft size={16} /> Continue shopping</Link>
      </div>
      <div className="cart-layout">
        <div className="cart-items-panel">
          <div className="cart-panel-heading"><h2>Shopping bag <span>({itemCount})</span></h2><button className="text-button" onClick={() => dispatch(clearCart())}>Clear cart</button></div>
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.alt} onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="cart-item-info"><span className="cart-item-category">{item.category || 'HOUSEPLANT'}</span><h3>{item.name}</h3><p>{money(item.price)} <span>each</span></p><button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button></div>
              <div className="quantity-and-total"><div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={14} /></button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14} /></button></div><strong>{money(item.price * item.quantity)}</strong></div>
            </article>
          ))}
          <Link to="/plants" className="keep-shopping"><ArrowLeft size={15} /> Keep exploring plants</Link>
        </div>
        <aside className="order-summary">
          <span className="section-kicker">A LITTLE CHECKOUT</span><h2>Order summary</h2>
          <div className="summary-line"><span>Items ({itemCount})</span><span>{money(total)}</span></div>
          <div className="summary-line"><span>Delivery</span><span className="free-label">FREE</span></div>
          <p className="delivery-note">Delivery details will be available at checkout.</p>
          <div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>
          <button className="button button-dark checkout-button" onClick={() => setShowCheckoutMessage(true)}>Checkout <span>→</span></button>
          {showCheckoutMessage && <div className="checkout-message" role="status">Coming soon! Your leafy friends will be ready for checkout in a future update.</div>}
          <p className="secure-note"><Leaf size={14} /> Thanks for growing with us.</p>
        </aside>
      </div>
    </section>
  );
}