// frontend/src/App.jsx
import React from 'react';
import './App.css'; // We'll create this file next for global styles

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <h1>The Moons</h1>
        <nav className="main-nav">
          <ul>
            <li><a href="#novels">Novels</a></li>
            <li><a href="#short-stories">Short Stories</a></li>
            <li><a href="#poems">Poems</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#login">Login (Author)</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area - This is where our static story page will go */}
      <main className="main-content">
        {/* Placeholder for a single Novel Chapter */}
        <section className="novel-chapter-page">
          <article className="chapter-content">
            <h2>Novel Title: The Whispering Sands</h2>
            <h3>Chapter 1: Echoes of a Distant Past</h3>
            <div className="chapter-meta">
              <p>By Kaspar Moon | Published: July 6, 2025</p>
              <button className="read-aloud-button">READ ALOUD</button>
            </div>
            <div className="chapter-body">
              <p>The desert wind whispered tales of ancient empires, carrying grains of sand that were once monumental cities. Elara, with eyes the color of twilight, traced the faded symbols on the crumbling obelisk. Each swirling line spoke of a magic long forgotten, a power now buried beneath shifting dunes. Her fingers, calloused from years of archaeological digs, trembled slightly.</p>
              <img src="https://via.placeholder.com/600x400?text=Chapter+Visual+1" alt="Ancient obelisk in a desert" className="chapter-image"/>
              <p>She remembered her grandmother's stories – legends of the Sunstone, a relic said to hold the very essence of creation. Most dismissed them as mere folklore, bedtime tales spun by eccentric elders. But Elara knew. She felt it in the hum of the air, the faint tremor of the earth beneath her feet. The desert was alive with secrets, and she was closer than anyone had ever been to unearthing its greatest.</p>
              <img src="https://via.placeholder.com/600x350?text=Chapter+Visual+2" alt="Elara tracing symbols" className="chapter-image"/>
              <p>A sudden gust of wind whipped her scarf across her face, momentarily blinding her. When she pulled it away, a shimmering anomaly pulsed at the base of the obelisk – a distortion in the air, like heat haze, but too focused, too deliberate. Her heart pounded. This was it. The door to the past, revealed.</p>
            </div>
            <div className="chapter-navigation">
              <button className="nav-button prev">Previous Chapter</button>
              <button className="nav-button next">Next Chapter</button>
            </div>
          </article>
        </section>

        {/* Placeholder for a single Short Story - Hidden for now, but structure is there */}
        {/* <section className="short-story-page" style={{ display: 'none' }}>
          <article className="story-content">
            <h2>The Last Starlit Seed</h2>
            <div className="story-meta">
              <p>By Kaspar Moon | Published: June 15, 2025</p>
              <button className="read-aloud-button">READ ALOUD</button>
            </div>
            <div className="story-body">
              <p>In a cosmos where stars had long faded, only one seed remained, glowing faintly with the memory of a trillion suns. Kael, the last gardener, tended it on his desolate asteroid, whispering tales of light to its dormant core...</p>
              <img src="https://via.placeholder.com/600x400?text=Story+Visual" alt="Last starlit seed" className="story-image"/>
              <p>His hands, gnarled by solitude and cosmic dust, had coaxed life from barren rock for centuries. The seed pulsed, a faint echo of hope in the eternal night. He knew, with the quiet certainty of deep space, that his life's purpose was not merely to protect, but to awaken.</p>
            </div>
          </article>
        </section> */}

        {/* Placeholder for a single Poem - Hidden for now, but structure is there */}
        {/* <section className="poem-page" style={{ display: 'none' }}>
          <article className="poem-content">
            <h2>Whispers of the Moon</h2>
            <div className="poem-meta">
              <p>By Kaspar Moon | Published: May 1, 2025</p>
              <button className="read-aloud-button">READ ALOUD</button>
            </div>
            <div className="poem-body">
              <p>Silver orb, a watchful eye,</p>
              <p>Across the velvet, star-strewn sky.</p>
              <p>You pull the tides, and dreams untold,</p>
              <p>A story whispered, brave and old.</p>
              <br/>
              <p>Through silent nights, your gentle gleam,</p>
              <p>Invites the artist's waking dream.</p>
              <p>A muse for poets, hearts on fire,</p>
              <p>Reflecting hope, a soft desire.</p>
            </div>
          </article>
        </section> */}
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <p>&copy; 2025 The Moons. All rights reserved by Kaspar Moon.</p>
      </footer>
    </div>
  );
}

export default App;