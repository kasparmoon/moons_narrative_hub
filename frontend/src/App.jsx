// frontend/src/App.jsx - Completely Reworked for Wide, Medium-Light, Aesthetic Design
import './App.css'; // Keep this import at the top

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <div className="header-inner">
          <div className="logo-section">
            {/* Placeholder for your actual logo image */}
            <img src="https://via.placeholder.com/120x50/F8F8F8/4A4E69?text=THE+MOONS" alt="The Moons Logo" className="app-logo-img" />
          </div>
          <nav className="main-nav">
            <ul>
              <li><button className="nav-button">Novels</button></li>
              <li><button className="nav-button">Short Stories</button></li>
              <li><button className="nav-button">Poems</button></li>
              <li><button className="nav-button">About</button></li>
              <li><button className="nav-button auth-button">Author Login</button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Hero / Welcome Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to The Moons</h1>
          <p className="hero-tagline">
            Your sanctuary for enchanting narratives, chapter by chapter.
            Dive into worlds where stories breathe and imaginations soar.
          </p>
          <div className="hero-buttons">
            <button className="action-button primary-button">Explore Narratives</button>
            <button className="action-button secondary-button">Become an Author</button>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="featured-content-section section-padding">
        <h2 className="section-heading">Featured Narratives</h2>
        <div className="content-grid">
          {/* Featured Novel 1 */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1510511459418-500b1a604245?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ancient Scroll" />
            </div>
            <h3>The Chronicles of Eldoria</h3>
            <p className="card-excerpt">Embark on an epic saga of magic, kingdoms, and an ancient prophecy that binds them all.</p>
            <div className="card-actions">
              <button className="action-button read-button">Read Novel</button>
              <button className="action-button mini-button">Chapter 1</button>
            </div>
          </div>

          {/* Featured Short Story */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1507646197170-c75c8ee0c63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Old Lantern" />
            </div>
            <h3>Whispers in the Alley</h3>
            <p className="card-excerpt">A chilling tale of a detective's last case, unraveling secrets hidden in the city's dark corners.</p>
            <div className="card-actions">
              <button className="action-button read-button primary-button">Read Story</button>
              <button className="action-button mini-button">Share</button>
            </div>
          </div>

          {/* Featured Poem */}
          <div className="content-card">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1502691455320-b0b2e2d989f6?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Moonlit Water" />
            </div>
            <h3>Lunar Lament</h3>
            <p className="card-excerpt">A profound poem reflecting on the silent beauty and enduring mystery of the moon.</p>
            <div className="card-actions">
              <button className="action-button read-button">Read Poem</button>
              <button className="action-button mini-button">Listen</button>
            </div>
          </div>
        </div>
      </section>

      {/* About The Moons Section */}
      <section className="about-section section-padding">
        <div className="about-content">
          <h2 className="section-heading">About The Moons</h2>
          <p>
            "The Moons" is more than just a platform; it's a vibrant community where stories are born and celebrated. We believe in the power of words to transport, inspire, and connect. Our mission is to provide authors with a beautiful space to share their serialized novels, captivating short stories, and soulful poems, while offering readers an immersive and accessible journey into new worlds.
          </p>
          <button className="action-button primary-button">Learn More About Us</button>
        </div>
        <div className="about-image-container">
          <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Open notebook and pen" />
        </div>
      </section>

      {/* Call to Action for Authors/Readers */}
      <section className="cta-section section-padding">
        <h2 className="section-heading cta-heading">Ready to Begin Your Story?</h2>
        <p className="cta-tagline">
          Whether you seek to share your narratives or get lost in new literary adventures, The Moons awaits.
        </p>
        <div className="cta-buttons">
          <button className="action-button primary-button">Become an Author Today</button>
          <button className="action-button secondary-button">Start Reading Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2025 The Moons Narrative Hub. All rights reserved.</p>
          <div className="footer-links">
            <button className="footer-link-button">Privacy Policy</button>
            <button className="footer-link-button">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;