// frontend/src/App.jsx
import './App.css'; // Keep this import at the top

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <div className="logo-placeholder">
          {/* Placeholder for your actual logo image */}
          <img src="https://via.placeholder.com/80x80/2A2F4F/F0EEF5?text=LOGO" alt="The Moons Logo" />
        </div>
        <nav className="main-nav">
          <ul>
            <li><button className="nav-button">Novels</button></li>
            <li><button className="nav-button">Short Stories</button></li>
            <li><button className="nav-button">Poems</button></li>
            <li><button className="nav-button">About</button></li>
            <li><button className="nav-button nav-auth-button">Author Login</button></li>
          </ul>
        </nav>
      </header>

      {/* Main Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to The Moons</h1>
        <p className="tagline">Your sanctuary for enchanting narratives, chapter by chapter.</p>
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fcd6f4fd026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
            alt="Open book with light"
            className="hero-image"
          />
        </div>
      </section>

      {/* Featured Novels Section */}
      <section className="content-section">
        <h2 className="section-title">Featured Novels</h2>
        <div className="content-grid">
          <div className="content-card">
            <div className="card-image-container">
              <img src="https://images.unsplash.com/photo-1533109721273-e3805367611a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Mysterious forest entrance" />
            </div>
            <h3>The Whispering Woods</h3>
            <p>A thrilling adventure set in a mystical forest. Follow Elara as she uncovers ancient secrets.</p>
            <button className="action-button">Read Novel</button>
          </div>
          <div className="content-card">
            <div className="card-image-container">
              <img src="https://images.unsplash.com/photo-1502101683935-d2279f041ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Starry night sky" />
            </div>
            <h3>Echoes of Starlight</h3>
            <p>A poetic journey through the cosmos, exploring themes of time, love, and destiny.</p>
            <button className="action-button">Read Novel</button>
          </div>
          <div className="content-card">
            <div className="card-image-container">
              <img src="https://images.unsplash.com/photo-1510511459418-500b1a604245?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ancient scroll" />
            </div>
            <h3>The Scroll of Aethel</h3>
            <p>An ancient prophecy hidden in forgotten texts, waiting to be deciphered by a lone scholar.</p>
            <button className="action-button">Read Novel</button>
          </div>
        </div>
      </section>

      {/* Sample Short Story / Chapter Page (with Read Aloud Button) */}
      <section className="content-section narrative-detail-page">
        <h2 className="section-title">A Glimpse into "The Midnight Lantern" - Chapter 1</h2>
        <div className="narrative-content">
          <div className="content-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1507646197170-c75c8ee0c63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Old lantern in the dark"
              className="content-image"
            />
          </div>
          <p>The old lantern flickered, casting long, dancing shadows across the dusty cobblestones. Elias shivered, not from the chill of the midnight air, but from the weight of the silence. It was the kind of silence that pressed in on you, that whispered secrets only the night could hear.</p>
          <p>He adjusted the worn leather satchel on his shoulder, its familiar weight a small comfort against the encroaching dread. The map, crinkled and faded, promised a hidden path, a shortcut through the forgotten district. But every rustle of leaves, every distant howl, seemed to question its wisdom. He gripped the lantern tighter, its frail light his only companion in a world that felt suddenly, terrifyingly vast.</p>
          <p>A low, guttural growl echoed from the alley to his left. Elias froze, his breath catching in his throat. The lantern's beam trembled, casting the alley in stark contrasts of light and impenetrable shadow. He knew he should run, but his feet felt rooted to the cold stone. This wasn't just silence; it was the hush before the storm.</p>
        </div>
        <div className="narrative-actions">
          <button className="action-button primary-button">READ ALOUD</button>
          <button className="action-button">Next Chapter</button>
          <button className="action-button">Share</button>
        </div>
      </section>

      {/* Recent Poems Section */}
      <section className="content-section">
        <h2 className="section-title">Recent Poems</h2>
        <div className="content-grid">
          <div className="content-card">
            <div className="card-image-container">
              <img src="https://images.unsplash.com/photo-1502691455320-b0b2e2d989f6?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Moonlight reflection on water" />
            </div>
            <h3>Moonlit Serenade</h3>
            <p>"Silent whispers, silver gleam, / A dream spun from a lunar beam."</p>
            <button className="action-button">Read Poem</button>
          </div>
          <div className="content-card">
            <div className="card-image-container">
              <img src="https://images.unsplash.com/photo-1587391993427-0c7f70b4a4d6?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Wind-swept grass" />
            </div>
            <h3>Whispers of the Wind</h3>
            <p>"Through ancient trees, a gentle sigh, / Tales of ages, whispered high."</p>
            <button className="action-button">Read Poem</button>
          </div>
          <div className="content-card">
            <div className="card-image-container">
              <img src="https://images.unsplash.com/photo-1507207611502-f312d837651a?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ink and quill" />
            </div>
            <h3>The Ink's Embrace</h3>
            <p>"A lonely quill, a silent page, / Unfolding worlds, a wisdom's stage."</p>
            <button className="action-button">Read Poem</button>
          </div>
        </div>
      </section>

      {/* Call to Action for Authors/Readers */}
      <section className="call-to-action-section">
        <h2>Join The Moons Community</h2>
        <p>Embark on your own narrative journey. Share your voice, or discover new worlds.</p>
        <div className="action-buttons-group">
          <button className="action-button primary-button">Become an Author</button>
          <button className="action-button">Start Reading Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="app-footer">
        <p>&copy; 2025 The Moons Narrative Hub. All rights reserved.</p>
        <div className="footer-links">
          <button className="footer-button">Privacy Policy</button>
          <button className="footer-button">Terms of Service</button>
        </div>
      </footer>
    </div>
  );
}

export default App;