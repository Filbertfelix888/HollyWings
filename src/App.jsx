import './App.css';
import logo from './assets/logo.png';


function App() {
  const categories = ["ALL", "LIVEBAR", "BEACHCLUB", "NIGHTCLUB", "DINING", "OTHERS"];
  
  const cards = [
    {
      title: "Helen’s",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/721d0510-a80d-4113-b8e7-b589b15bc94f.webp",
      desc: "THE PLACE WHERE CELEBRATION FEELS ALIVE",
      city: "JAKARTA, TANGERANG & 4 OTHER CITIES",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-helens.webm"
    },
    {
      title: "DRAGON",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/9252f612-8e9d-47e0-8c07-475793ba93dd.webp",
      desc: "A PREMIUM BAR FOR EVERYONE TO ENJOY WITH LUXURIOUS AND CLASSY VIBE",
      city: "JAKARTA, SEMARANG & 8 OTHER CITIES",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-gold-dragon.webm"
    },
    {
      title: "TIGER",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/8822ed4c-dee2-4e11-b529-046fde242f7e.webp",
      desc: "MODERN NIGHTCLUB WITH FUSION OF DESIGN AND ENTERTAINMENT",
      city: "JAKARTA, MAKASSAR & 5 OTHER CITIES",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-golden-tiger.webm"
    },
    {
      title: "W SUPER CLUB",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/604a6001-4c8a-45ab-8f9f-0e40502eea6e.webp",
      desc: "EXCLUSIVE SOCIAL NIGHTCLUB COMBINING DESIGN, TECHNOLOGY, AND HIGT-CLASS SERVICES",
      city: "JAKARTA",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-w-superclub.webm"
    },
    {
      title: "ATLAS",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/3435464b-eaaa-4c1d-86d0-5060505f572f.webp",
      desc: "THE BIGGEST BEACH CLUB IN THE WORLD",
      city: "BALI",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-atlas.webm"
    },
    {
      title: "ROCCA",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/f0e1b31b-918a-4ddd-a7f8-6ff6609c34e9.webp",
      desc: "BRIGIN ITALY'S WARMTH AND ASIA'S CHARM TO THE HEART OF BSD",
      city: "TANGERANG",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-rocca.webm"
    },
    {
      title: "PHEONIX",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/ee626fc6-67a3-42cb-bade-aa1592568a4a.webp",
      desc: "THE EXQUISITE BASH OF NORTH; DISCOVER MODERN GASTRONOMY AT ITS FINEST.",
      city: "JAKARTA",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-phoenix.webm"
    },
    {
      title: "THE H CLUB",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/e9cdf3fc-b529-469a-9d1c-a8bb2e527f96.webp",
      desc: "THE BIGGEST NIGHTCLUB IN ASIA FRAMING THE WORLD - CLASS STAGE IN JAKARTA, INDONESIA",
      city: "JAKARTA",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-h-club.webm"
    },
    {
      title: "CABIN",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/4f7a95f2-1e6c-4c3e-b9e7-510795402e38.webp",
      desc: "VIBE IN THE CITY CENTER OFFFRES LIVE ENTERTAIMENT, A COZY LOUNGE, AND A GREAT ATMOSPHERE.",
      city: "BOGOR",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-cabin.webm"
    },
    {
      title: "H LIVE HOUSE",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/e25d8f60-27cc-48ee-8838-f47960be2feb.webp",
      desc: "A PREMIER DESTINATION FOR THOSE SEEKING AN IMERSIVE LIVE MUSIC EXPERIENCE",
      city: "JAKARTA, BATAM, SEMARANG, PEKANBARU",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-livehouse.webm"
    },
    {
      title: "HELEN'S NIGHT MART",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/aa84997d-d97c-454b-8fa9-2d46e4a6b1d6.webp",
      desc: "THE FIRST DIY COCKTAIL SHOP IN INDONESIA WITH A TRENDY MINI-MART CONCEPT",
      city: "JAKARTA, MAKASSAR, JOGJAKARTA, SEMARANG",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-helens-night.webm"
    },
    {
      title: "MI MI LIVE HOUSE",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/54fc1b0d-9db5-4489-99d2-52be6fb91666.webp",
      desc: "INDONESIA'S FIRSRT MANDARIN BAR BLENDING VIBRANT NIGHTLIFE WITH LIVE ENTERTAINMENT.",
      city: "JAKARTA",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-mimi.webm"
    },
    {
      title: "AMBYAR SUPER CLUB",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/41ac6294-f8ce-4a62-b9d8-b505ef513544.webp",
      desc: "INDONESIA'S FIRSRT MANDARIN BAR BLENDING VIBRANT NIGHTLIFE WITH LIVE ENTERTAINMENT.",
      city: "JAKARTA",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-mimi.webm"
    },
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
                <div className="video-card" 
                     key={index} 
                        onMouseEnter={(e) => {
                          const video = e.currentTarget.querySelector("video");
                          video.play();

                            }}
                            onMouseLeave={(e) => {
                              const video = e.currentTarget.querySelector("video");
                              video.pause();
                              video.currentTime = 0;
                            }}
                  >
                  <video muted loop playsInline preload='none'>
                    <source src={item.video} type="video/webm" />
                  </video>

                  {/* overlay */}
                    <div className="card-overlay"></div>

                  {/* LOGO TENGAH – ANTI KETIMPAK */}
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="card-logo-center"
                    />

                  {/* hover content */}
                    <div className="card-hover">
                      <span className="card-more">Lihat Selengkapnya</span>
                      <button className="card-btn">Pesan Sekarang</button>
                    </div>

                  {/* text bawah */}
                    <div className="card-bottom">
                      <p className="card-desc">{item.desc}</p>
                      <span className="card-city">{item.city}</span>
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
