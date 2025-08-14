// frontend/src/App.jsx — FULL FILE
// NEW (icons): Replaced placeholder social icons with real SVGs (incl. Instagram).
// NEW (heading): Changed section title to “Featured”.
// NEW (footer): Removed the second “MOONS” mark so only “The Moons” logo shows.

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

  // Excerpt generator (50 words max)
  const makeExcerpt = (txt = '', maxWords = 50) => {
    const clean = String(txt).replace(/\s+/g, ' ').trim();
    if (!clean) return '';
    const words = clean.split(' ');
    const clipped = words.slice(0, maxWords).join(' ');
    return words.length > maxWords ? `${clipped}…` : clipped;
  };

  // Derive excerpt from first child body (chapter/part) when present
  const getContentExcerpt = (item) => {
    if (!item) return '';
    if ('parts' in item && Array.isArray(item.parts) && item.parts[0]?.body) {
      return makeExcerpt(item.parts[0].body);
    }
    if ('chapters' in item && Array.isArray(item.chapters) && item.chapters[0]?.body) {
      return makeExcerpt(item.chapters[0].body);
    }
    return makeExcerpt(item.subtitle || item.core_concept || item.characters_bible || '');
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
          <div className="header-top">
            <div className="logo-wrap">
              <a href="#" className="brand">
                <img src="/assets/Logo.png" alt="The Moons Logo" className="logo-img" />
              </a>
            </div>

            <nav className="main-nav">
              <ul className="nav-list">
                <li><a className="nav-link is-active" href="#">Novels</a></li>
                <li><a className="nav-link" href="#">Short Stories</a></li>
                <li><a className="nav-link" href="#">Poems</a></li>
                <li><a className="nav-link" href="#">About</a></li>
                <li><a className="nav-link" href="#">FAQs</a></li>
                <li><a className="nav-link" href="#">Contact</a></li>
              </ul>
            </nav>

            <div className="auth-social">
              {/* NEW: Real SVG icons (Facebook, Instagram, Twitter/X) */}
              <div className="social-icons">
                <a href="#" aria-label="Facebook" className="social-link" title="Facebook">
                  <svg viewBox="0 0 24 24" className="icon"><path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="social-link" title="Instagram">
                  {/* NEW: Instagram glyph */}
                  <svg viewBox="0 0 24 24" className="icon">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 9.5Zm5.75-2.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="social-link" title="Twitter">
                  <svg viewBox="0 0 24 24" className="icon"><path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.6A11.3 11.3 0 0 1 3.1 4.8a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.7.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.4a11.3 11.3 0 0 0 17.5-9.6c0-.2 0-.4 0-.6.8-.6 1.4-1.3 1.9-2Z"/></svg>
                </a>
              </div>
              <button className="btn btn-auth">Author Login</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero — dynamic background image */}
      <section
        className="hero-section"
        style={{
          backgroundImage: heroImage
            ? `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('${heroImage}')`
            : 'none',
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Discover, Write, and Share Your Stories</h1>
          <p className="hero-subtitle">
            A home for novels, novellas, short stories, and poems. Read chapter by chapter, and soon — listen with Read Aloud.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary">Read Chapter</button>
            <button className="btn btn-ghost">Explore Novel</button>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="featured-section">
        {/* NEW: Changed title text per request */}
        <h2 className="section-title">Featured</h2>

        <div className="card-grid">
          {featuredContent.map((content) => {
            let contentType;
            if ('parts' in content) {
              contentType = 'SHORT STORY';
            } else if ('core_concept' in content) {
              contentType = 'NOVEL';
            } else {
              contentType = 'NOVELLA';
            }

            const excerpt = getContentExcerpt(content);

            return (
              <article className="card" key={`${contentType}-${content.id}`}>
                {content.featured_image && (
                  <div className="card-media">
                    <img
                      src={getImageSrc(content.featured_image)}
                      alt={content.title}
                      className="card-img"
                    />
                  </div>
                )}

                <div className="card-body">
                  <span className="card-kicker">{contentType}</span>
                  <h3 className="card-title">{content.title}</h3>
                  {excerpt && <p className="card-excerpt">{excerpt}</p>}
                  <div className="card-actions">
                    <button className="btn btn-read">READ</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to Start Your Narrative Journey?</h2>
          <p className="cta-text">
            Whether you seek to share your own captivating narratives or get lost in new literary adventures, The Moons awaits.
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary">Become an Author Today</button>
            <button className="btn btn-ghost">Start Reading Now</button>
          </div>
        </div>
      </section>

      {/* Footer — 3 columns; NEW: removed extra “MOONS” mark */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <img src="/assets/Logo.png" alt="The Moons Logo" className="footer-logo" />
              {/* NEW: removed <span className="footer-mark">MOONS</span> */}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <address className="footer-address">
              2261 Market Street, #4978<br />
              Schenectady, NY 12301
            </address>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" className="icon"><path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 9.5Zm5.75-2.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter" title="Twitter">
                <svg viewBox="0 0 24 24" className="icon"><path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.6A11.3 11.3 0 0 1 3.1 4.8a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.7.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.4a11.3 11.3 0 0 0 17.5-9.6c0-.2 0-.4 0-.6.8-.6 1.4-1.3 1.9-2Z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Become an Author</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">Copyright © 2025 The Moons. All rights reserved.</p>
          <div className="legal-links">
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;