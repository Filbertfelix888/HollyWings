import './App.css';
import logo from './assets/logo.png';
import helens from './assets/helens.mp4';
import dragon from './assets/dragon.mp4';
import tiger from './assets/tiger.mp4';
import wclub from './assets/wclub.mp4';

function App() {
  const categories = ["ALL", "LIVEBAR", "BEACHCLUB", "NIGHTCLUB", "DINING", "OTHERS"];
  
  const cards = [
    {
      title: "Helen’s",
      desc: "THE PLACE WHERE CELEBRATION FEELS ALIVE",
      city: "JAKARTA, TANGERANG & 4 OTHER CITIES",
      video: helens
    },
    {
      title: "DRAGON",
      desc: "A PREMIUM BAR FOR EVERYONE TO ENJOY",
      city: "JAKARTA, SEMARANG & 8 OTHER CITIES",
      video: dragon
    },
    {
      title: "TIGER",
      desc: "MODERN NIGHTCLUB WITH FUSION DESIGN",
      city: "JAKARTA, MAKASSAR & 5 OTHER CITIES",
      video: tiger
    },
    {
      title: "W SUPER CLUB",
      desc: "EXCLUSIVE SOCIAL NIGHTCLUB EXPERIENCE",
      city: "JAKARTA",
      video: wclub
    }
  ];

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
           <img src={logo} alt="HW Logo" className="main-logo" />
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
                <h1>BRAND HOLYWINGS GROUP </h1>
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

        {/* --- CARD SECTION --- */}
          <section className="card-section">
            <div className="card-grid">
              {cards.map((item, index) => (
                <div className="video-card" key={index}>
                  
                  <video muted loop playsInline preload='none'>
                    <source src={item.video} type="video/mp4" />
                  </video>

                  <div className="card-overlay"></div>

                  <div className="card-content">
                      <div className='card-bottom'>
                        <h2>{item.title}</h2>
                        <p className="card-desc">{item.desc}</p>
                        <span className="card-city">{item.city}</span>
                      </div>
                      
                      <div className="card-hover">
                        <span className="card-more">Lihat Selengkapnya</span>
                        <button className="card-btn">Pesan Sekarang</button>
                      </div>
                  </div>

                </div>
              ))}
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
