import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import LogoHwg from '/Gambar/hwg-logo-white.webp'

function App() {
  const categories = ["ALL", "LIVEBAR", "BEACHCLUB", "NIGHTCLUB", "DINING", "OTHERS"];
  
  return (
    <div className="app-container">
      
      {/* --- BAGIAN HEADER --- */}
      <header className="site-header">
        {/* Top Header / Promo Bar */}
        <div className="top-header">
          <div className="promo-section">
            <span>Unduh Aplikasi Holywings untuk menikmati lebih banyak manfaat. </span>
            <a href="#" className="download-link">Unduh Sekarang</a>
          </div>
          <nav className="top-nav-section">
            <div className="nav-item language-selector">
              <img src="https://flagcdn.com/w20/id.png" alt="ID" className="flag-icon" />
              <span>Bahasa Indonesia | IDR</span>
              <span className="dropdown-arrow">▾</span>
            </div>
            <a href="#" className="nav-item">Partnership</a>
            <a href="#" className="nav-item">Karier</a>
            <a href="#" className="nav-item">Outlets</a>
          </nav>
        </div>

        {/* Main Navbar */}
        <nav className="main-navbar">
          <div className="logo-container">
           <img src="https://holywings.com/_ipx/q_75/images/logo/hwg-logo-white.webp" alt="HW Logo" className="main-logo" />
          </div>
          <ul className="main-nav-links">
            <li><a href="#">Acara</a></li>
            <li><a href="#" className="active">Brands</a></li>
            <li><a href="#">Berita</a></li>
            <li><a href="#">Tentang</a></li>
            <li><a href="#">Hubungi Kami</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="btn-reservasi">Reservasi</button>
            <button className="btn-masuk">Masuk</button>
          </div>
        </nav>
      </header>


      {/* --- BAGIAN BODY (MAIN CONTENT) --- */}
      <main className="site-body">
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="glow-effect"></div>
          <div className="hero-content">
            <p className="breadcrumb">Halaman Utama / <span>Brands</span></p>
            
            <div className="hero-grid">
              <div className="hero-text">
                <h1>BRAND HOLYWINGS GROUP</h1>
                <p>
                  Dengan Holywings Group, kamu bisa menjelajahi berbagai brand mulai dari 
                  klub, bar, restaurant, beachclub, boxing, pods, clothing, dan masih banyak lagi.
                </p>
              </div>
              
              <div className="search-container">
                <div className="search-box">
                  <span className="search-icon">🔍</span>
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>

            {/* Filter Categories */}
            <div className="filter-container">
              {categories.map((cat) => (
                <button key={cat} className={`filter-btn ${cat === 'ALL' ? 'active' : ''}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- TEMPAT UNTUK MASUKKAN BANYAK KONTEN LAINNYA --- */}
        <section className="additional-content">
          {/* Anda bisa mulai memasukkan Grid Card atau konten lainnya di sini */}
          <div className="content-placeholder">
            <h2>Konten baru Anda akan ada di sini...</h2>
          </div>
        </section>

      </main>


      {/* --- BAGIAN FOOTER (KOSONG) --- */}
      <footer className="site-footer">
        {/* Footer sengaja dikosongkan untuk Anda isi nanti */}
      </footer>

    </div>

  )
}

export default App
