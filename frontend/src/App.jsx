// frontend/src/App.jsx - FINAL VERSION WITH API INTEGRATION
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [novels, setNovels] = useState([]);
  const [shortStories, setShortStories] = useState([]);
  const [novellas, setNovellas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const novelsResponse = await fetch('http://127.0.0.1:8000/api/novels/');
        const shortStoriesResponse = await fetch('http://127.0.0.1:8000/api/short-stories/');
        const novellasResponse = await fetch('http://127.0.0.1:8000/api/novellas/');

        if (!novelsResponse.ok || !shortStoriesResponse.ok || !novellasResponse.ok) {
          throw new Error('Failed to fetch data from API');
        }

        const novelsData = await novelsResponse.json();
        const shortStoriesData = await shortStoriesResponse.json();
        const novellasData = await novellasResponse.json();

        setNovels(novelsData);
        setShortStories(shortStoriesData);
        setNovellas(novellasData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div className="loading">Loading narratives...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const featuredContent = [...novels, ...shortStories, ...novellas].slice(0, 6);

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <div className="header-inner">
          <div className="header-top-tier">
            <div className="logo-area">
              <a href="#"><img src="/assets/Logo.png" alt="The Moons Logo" className="app-logo-img" /></a>
            </div>
            <nav className="social-auth-nav">
              <ul>
                <li><a href="#" className="nav-social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" className="nav-social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" className="nav-social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
                <li><button className="nav-button nav-auth-button">Author Login</button></li>
              </ul>
            </nav>
          </div>
          <div className="header-bottom-tier">
            <nav className="main-nav">
              <ul>
                <li><button className="nav-link-button">Novels</button></li>
                <li><button className="nav-link-button">Short Stories</button></li>
                <li><button className="nav-link-button">Poems</button></li>
                <li><button className="nav-link-button">About</button></li>
                <li><button className="nav-link-button">FAQs</button></li>
                <li><button className="nav-link-button">Contact</button></li>
              </ul>
            </nav>
          </div>
        </div>
        <button className="mobile-menu-toggle" aria-label="Toggle navigation menu">
          <i className="fas fa-bars"></i>
        </button>
      </header>

      <nav className="mobile-nav-full">
          <ul>
              <li><button className="nav-link-button">Novels</button></li>
              <li><button className="nav-link-button">Short Stories</button></li>
              <li><button className="nav-link-button">Poems</button></li>
              <li><button className="nav-link-button">About</button></li>
              <li><button className="nav-link-button">FAQs</button></li>
              <li><button className="nav-link-button">Contact</button></li>
          </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background-image" style={{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1719529320784-62161f2728d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}></div>
        <div className="hero-content">
          <h1>The Serpent's Coil: Chapter One</h1>
          <p className="hero-excerpt">
            A thrilling new novel begins its journey. Follow Elara as she uncovers ancient secrets
            hidden deep within the Whispering Woods, a place shrouded in myth and peril.
          </p>
          <div className="hero-action-buttons">
            <button className="action-button primary-action-button">READ CHAPTER</button>
            <button className="action-button secondary-action-button">EXPLORE NOVEL</button>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="featured-grid-section">
        <h2 className="section-heading">Featured Novels & Short Stories</h2>
        <div className="content-grid">
          {featuredContent.map((content, index) => (
            <div className="content-card" key={index}>
              {content.featured_image && (
                <div className="card-image-wrapper">
                  <img src={`http://127.0.0.1:8000${content.featured_image}`} alt={content.title} />
                </div>
              )}
              <div className="card-body">
                <span className="card-category">
                  {content.chapters ? 'NOVEL' : 'SHORT STORY'}
                </span>
                <h3 className="card-title">{content.title}</h3>
                {content.subtitle && <p className="card-excerpt">{content.subtitle}</p>}
                <button className="action-button card-read-button">READ</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="section-heading cta-heading">Ready to Start Your Narrative Journey?</h2>
        <p className="cta-tagline">
          Whether you seek to share your own captivating narratives or get lost in new literary adventures, The Moons awaits.
        </p>
        <div className="cta-buttons">
          <button className="action-button primary-action-button">Become an Author Today</button>
          <button className="action-button secondary-action-button">Start Reading Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="app-footer">
        <div className="footer-top-row">
          <div className="footer-logo-area">
            <img src="/assets/Logo.png" alt="Footer Logo" className="footer-logo-img" />
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Contact Us</h4>
            <p>2261 Market Street, #4978</p>
            <p>Schenectady, NY 12301</p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Resources</h4>
            <ul>
              <li><button className="footer-link-button">Become an Author</button></li>
              <li><button className="footer-link-button">Support Forum</button></li>
              <li><button className="footer-link-button">About Us</button></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Support</h4>
            <ul>
              <li><button className="footer-link-button">FAQ</button></li>
              <li><button className="footer-link-button">Reading Guide</button></li>
              <li><button className="footer-link-button">Community Guidelines</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-row">
          <p>Copyright &copy; 2025 The Moons. All rights reserved.</p>
          <div className="footer-legal-links">
            <div className="legal-links-wrapper">
              <button className="footer-link-button footer-link-small">Terms of Service</button>
              <button className="footer-link-button footer-link-small">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;