import { ArrowRight, Leaf, Sprout, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow"><Leaf size={15} /> A little greener, every day</span>
          <h1>Make room for<br /><em>something growing.</em></h1>
          <p>Thoughtfully chosen houseplants to bring calm, character, and a breath of fresh air into your home.</p>
          <Link className="button button-light" to="/plants">Get Started <ArrowRight size={18} /></Link>
          <div className="hero-note"><span className="note-dot" /> Plants for every corner and every kind of plant parent.</div>
        </div>
        <div className="hero-caption">GROW A HOME YOU LOVE</div>
      </section>

      <section className="about-section section-wrap">
        <div className="section-kicker">OUR LITTLE GREEN WORLD</div>
        <div className="about-grid">
          <div>
            <h2>Good plants.<br /><em>Good energy.</em></h2>
          </div>
          <div className="about-copy">
            <p>At Paradise Nursery, we believe a little greenery can change the feeling of a space. Our collection is curated to help you find plants that fit your home, your light, and your lifestyle.</p>
            <p>Whether you're nurturing your first pothos or growing an indoor jungle, we're here to make the journey feel simple and joyful.</p>
          </div>
        </div>
        <div className="values-grid">
          <article className="value-card"><span className="value-icon"><Sprout /></span><h3>Thoughtfully picked</h3><p>A varied collection for beginners and experienced plant lovers alike.</p></article>
          <article className="value-card"><span className="value-icon"><Sun /></span><h3>Room to thrive</h3><p>Find a plant that suits your space, light, and daily routine.</p></article>
          <article className="value-card"><span className="value-icon"><Leaf /></span><h3>Everyday green</h3><p>Small, nature-inspired details that make your home feel more yours.</p></article>
        </div>
        <div className="about-cta"><div><h3>Ready to find your new favorite?</h3><p>Explore the collection and let something good grow.</p></div><Link to="/plants" className="button button-dark">Explore plants <ArrowRight size={17} /></Link></div>
      </section>
    </div>
  );
}