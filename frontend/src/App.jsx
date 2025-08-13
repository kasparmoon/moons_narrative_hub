// frontend/src/App.jsx — FULL FILE
// NEW NOTE: Adds dynamic hero background using latest item's featured image.
// NEW NOTE: No CSS change required; we set inline style on .hero-section.

import { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  // Centralized API base
  const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000';

  // Safe image src builder to prevent double base URL bug
  const getImageSrc = (path) => {
    if (!path) return '';
    const p = String(path);
    if (p.startsWith('http://') || p.startsWith('https://')) return p;
    return `${API_BASE}${p.startsWith('/') ? '' : '/'}${p}`;
  };

  const [novels, setNovels] = useState([]);
  const [shortStories, setShortStories] = useState([]);
  const [novellas, setNovellas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all three lists
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [novelsRes, shortsRes, novellasRes] = await Promise.all([
          fetch(`${API_BASE}/api/novels/`),
          fetch(`${API_BASE}/api/short-stories/`),
          fetch(`${API_BASE}/api/novellas/`),
        ]);

        if (!novelsRes.ok || !shortsRes.ok || !novellasRes.ok) {
          throw new Error('Failed to fetch data from API');
        }

        const [novelsData, shortsData, novellasData] = await Promise.all([
          novelsRes.json(),
          shortsRes.json(),
          novellasRes.json(),
        ]);

        setNovels(novelsData || []);
        setShortStories(shortsData || []);
        setNovellas(novellasData || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Unknown error');
        setLoading(false);
      }
    };

    fetchAllData();
  }, [API_BASE]);

  // Pick the most recent item across all lists for the hero
  const heroImage = useMemo(() => {
    const all = [
      ...(Array.isArray(novels) ? novels : []),
      ...(Array.isArray(novellas) ? novellas : []),
      ...(Array.isArray(shortStories) ? shortStories : []),
    ];

    if (!all.length) return '';

    // Sort by created_at (falls back to updated_at if created_at missing)
    all.sort((a, b) => {
      const aDate = new Date(a?.created_at || a?.updated_at || 0).getTime();
      const bDate = new Date(b?.created_at || b?.updated_at || 0).getTime();
      return bDate - aDate;
    });

    const latest = all[0];
    const path = latest?.featured_image;
    return getImageSrc(path);
  }, [novels, novellas, shortStories]);

  if (loading) return <div className="loading">Loading narratives...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const featuredContent = [...novels, ...shortStories, ...novellas].slice(0, 6);

  return (
    <div className="app-container">
      {/* Header */}
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
              </ul>
            </nav>
          </div>

          <div className="header-bottom-tier">
            <nav className="main-nav">
              <ul>
                <li><button className="nav-button">Home</button></li>
                <li><button className="nav-button">Novels</button></li>
                <li><button className="nav-button">Short Stories</button></li>
                <li><button className="nav-button">Poems</button></li>
                <li><button className="nav-button">Authors</button></li>
                <li><button className="nav-button">Blog</button></li>
              </ul>
            </nav>
            <div className="auth-buttons">
              <button className="auth-button login-button">Log In</button>
              <button className="auth-button signup-button">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero — NEW: dynamic background image */}
      <section
        className="hero-section"
        style={{
          backgroundImage: heroImage ? `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('${heroImage}')` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Discover, Write, and Share Your Stories</h1>
          <p className="hero-subtitle">
            A home for novels, novellas, short stories, and poems. Read chapter by chapter, and soon — listen with Read Aloud.
          </p>
          <div className="hero-buttons">
            <button className="action-button primary-action-button">Start Reading</button>
            <button className="action-button secondary-action-button">Become an Author</button>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="featured-grid-section">
        <h2 className="section-heading">Featured Novels &amp; Short Stories</h2>
        <div className="content-grid">
          {featuredContent.map((content) => {
            let contentType;
            // Reliable type inference
            if ('parts' in content) {
              contentType = 'SHORT STORY';
            } else if ('core_concept' in content) {
              contentType = 'NOVEL';
            } else {
              contentType = 'NOVELLA';
            }

            return (
              <div className="content-card" key={content.id}>
                {content.featured_image && (
                  <div className="card-image-wrapper">
                    <img
                      src={getImageSrc(content.featured_image)}
                      alt={content.title}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div className="card-body">
                  <span className="card-category">{contentType}</span>
                  <h3 className="card-title">{content.title}</h3>
                  {content.subtitle && <p className="card-excerpt">{content.subtitle}</p>}
                  <button className="action-button card-read-button">READ</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
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

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-columns">
          <div className="footer-column">
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
              <li><button className="footer-link-button">Reader FAQs</button></li>
              <li><button className="footer-link-button">Support</button></li>
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
