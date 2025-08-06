// frontend/src/App.jsx - FINAL CORRECTED VERSION
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header Section - FINAL CORRECTED VERSION */}
      <header className="app-header">
        <div className="header-inner">
          {/* Desktop: Top Tier with Logo and Social/Auth links */}
          <div className="header-top-tier">
            <div className="logo-area">
              <span className="app-logo-text">THE MOONS</span>
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

          {/* Desktop: Bottom Tier with Main Nav links */}
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
        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <button className="mobile-menu-toggle" aria-label="Toggle navigation menu">
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* This is the mobile menu that will be visible on small screens */}
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

      {/* Hero Section - FINAL CORRECTED VERSION */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-meta">
            <span className="hero-category">LATEST NARRATIVE</span>
          </div>
          <h1 className="hero-title">The Serpent's Coil: Chapter One</h1>
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

      {/* Featured Content Grid - FINAL CORRECTED VERSION */}
      <section className="featured-grid-section">
        <h2 className="section-heading">Featured Novels & Stories</h2>
        <div className="content-grid">
          {/* Content Card 1 (Novel Excerpt/Chapter) */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Person writing in a notebook" />
            </div>
            <div className="card-body">
              <span className="card-category">NOVEL CHAPTER</span>
              <h3 className="card-title">Echoes of Starlight: Epilogue</h3>
              <p className="card-excerpt">
                The final chapter unfolds, tying loose ends and revealing the ultimate fate of the celestial wanderers.
              </p>
              <button className="action-button card-read-button">READ</button>
            </div>
          </div>

          {/* Content Card 2 (Short Story) */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Empty beach at sunset" />
            </div>
            <div className="card-body">
              <span className="card-category">SHORT STORY</span>
              <h3 className="card-title">The Solitude of the Shore</h3>
              <p className="card-excerpt">
                A poignant narrative exploring themes of loss, healing, and the enduring power of nature.
              </p>
              <button className="action-button card-read-button">READ</button>
            </div>
          </div>

          {/* Content Card 3 (Poem) */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ink pen and paper" />
            </div>
            <div className="card-body">
              <span className="card-category">POEM</span>
              <h3 className="card-title">Ode to the Silent Moon</h3>
              <p className="card-excerpt">
                A lyrical exploration of the moon's timeless vigil and its gentle influence on earthly dreams.
              </p>
              <button className="action-button card-read-button">READ</button>
            </div>
          </div>

          {/* Content Card 4 (Short Story) */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://plus.unsplash.com/premium_photo-1669613233573-4911a0a81c63?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foggy forest" />
            </div>
            <div className="card-body">
              <span className="card-category">SHORT STORY</span>
              <h3 className="card-title">The Shadow in the Pines</h3>
              <p className="card-excerpt">
                A mysterious encounter deep within a fog-laden forest challenges the very nature of reality.
              </p>
              <button className="action-button card-read-button">READ</button>
            </div>
          </div>

          {/* Content Card 5 (Novel Excerpt/Chapter) */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1694253609637-50419bd47076?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ancient door in rocks" />
            </div>
            <div className="card-body">
              <span className="card-category">NOVEL CHAPTER</span>
              <h3 className="card-title">The Forgotten City: Chapter 3</h3>
              <p className="card-excerpt">
                Our heroes delve deeper into the ruins, discovering ancient mechanisms and unforeseen dangers.
              </p>
              <button className="action-button card-read-button">READ</button>
            </div>
          </div>

          {/* Content Card 6 (Poem) */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://plus.unsplash.com/premium_photo-1673254850380-ff70514979fe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Aurora Borealis" />
            </div>
            <div className="card-body">
              <span className="card-category">POEM</span>
              <h3 className="card-title">Celestial Dance</h3>
              <p className="card-excerpt">
                A vibrant verse painting the spectacle of the northern lights, a ballet of cosmic hues.
              </p>
              <button className="action-button card-read-button">READ</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - FINAL CORRECTED VERSION */}
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

      {/* Footer Section - FINAL CORRECTED VERSION */}
      <footer className="app-footer">
        <div className="footer-top-row">
          <div className="footer-logo-area">
            <img src="https://placehold.co/100x100/4A4E69/F2D27A?text=MOONS" alt="Footer Logo" className="footer-logo-img" />
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