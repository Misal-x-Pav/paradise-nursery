import { useDispatch, useSelector } from 'react-redux';
import { ArrowUpRight, Check, Leaf } from 'lucide-react';
import { allPlants, plantCategories } from '../data/plants.js';
import { addToCart, selectCartItems } from '../redux/CartSlice.jsx';

const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="catalog-page">
      <section className="catalog-hero">
        <div>
          <span className="eyebrow"><Leaf size={15} /> THE PLANT COLLECTION</span>
          <h1>Find your kind<br /><em>of green.</em></h1>
          <p>Easy-going favorites, bold statement leaves, and little greens for small spaces.</p>
        </div>
        <div className="catalog-count"><strong>{allPlants.length.toString().padStart(2, '0')}</strong><span>plants to<br />fall for</span></div>
      </section>

      <section className="catalog-content section-wrap">
        <div className="catalog-intro"><div><div className="section-kicker">GROW SOMETHING GOOD</div><h2>Meet the collection</h2></div><p>Choose a plant that feels like you.<br />Your next favorite is waiting.</p></div>
        {plantCategories.map((category, index) => (
          <section className="plant-category" key={category.id} id={category.id}>
            <div className="category-heading"><div><span className="category-number">0{index + 1}</span><h3>{category.name}</h3><p>{category.description}</p></div><span className="category-total">{category.plants.length} PLANTS</span></div>
            <div className="plant-grid">
              {category.plants.map((plant, plantIndex) => {
                const added = isInCart(plant.id);
                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-image-wrap">
                      <img src={plant.image} alt={plant.alt} loading="lazy" onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85'; }} />
                      <span className="plant-index">0{plantIndex + 1}</span>
                      <span className="plant-tag">HOUSEPLANT</span>
                    </div>
                    <div className="plant-card-body">
                      <div className="plant-card-top"><h4>{plant.name}</h4><span className="plant-price">{money(plant.price)}</span></div>
                      <p>{plant.description}</p>
                      <button className={added ? 'add-button added' : 'add-button'} onClick={() => dispatch(addToCart(plant))} disabled={added}>
                        {added ? <><Check size={16} /> Added to cart</> : <>Add to cart <ArrowUpRight size={16} /></>}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}