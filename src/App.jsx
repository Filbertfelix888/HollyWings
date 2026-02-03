import './App.css';
import logo from './assets/logo.png';
import { useState } from "react";

function App() {
  const categories = ["ALL", "LIVEBAR", "BEACHCLUB", "NIGHTCLUB", "DINING", "OTHERS"];
  const [open, setOpen] = useState(false);

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
      desc: "A NEW NEXT-LEVEL CONCEPT IN DANGDUT, PRESENTING MORE GIMMICKS EVERY NIGHT.",
      city: "JAKARTA, SURABAYA",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-ambyar.webm"
    },
    {
      title: "SUPER HOUSE",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/18/d9012fe2-8a26-47b5-aaf3-ccfef464448a.webp",
      desc: "SPECTACULAR POP MUSIC CONCERT EVERY NIGHT WITH MODERN-CLASSIC ELEGANCE LIVEHOUSE",
      city: "JAKARTA, SURABAYA",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-superhouse.webm"
    },
    {
      title: "LIL TIGER",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/staging/outlet_type_logo/2024/12/20/ee09ffe8-11ce-4490-8351-cdc8bacd1c30.webp",
      desc: "GEN Z TAKES OVER THE CLUB, OLNY UNDER 30 YO ARE ALLOWED",
      city: "",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjleX0GDoYv0lye6qYGnnKXZ8q94ihFWoi9w&s",
      video: ""
    },
    {
      title: "XIAO MEI MEI ",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/2/14/21f22243-b7c8-42a8-8794-eb404e062a24.webp",
      desc: "Blends Chinese tradition with vibran entertaiment, offering nostalgic flavors, a lively astmosphere, and awarm space for cherished gatherings.",
      city: "SURABAYA",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0FgfI5_JqA2I7JUVO1IGpeBrz6M9uOI9ww&s",
      video: ""
    },
    {
      title: "H BAR ",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/4/23/7dee6179-7957-44f3-aecf-84c1dd3980c6.webp",
      desc: "Asia's Best Social Bar",
      city: "JAKARTA, KUALA LUMPUR",
      bgImage: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/article_banner/2025/4/30/3kepOzKM8CHb2vP9bnhvFK89J7g0DJogrlTljdKQ.jpg",
      video: ""
    },
    {
      title: "TEMABAK LANGIT ",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/5/5/4ea1967c-6f75-438a-9bbe-8d48e176e40f.webp",
      desc: "The new era of breakbeat ready to ligt up your night",
      city: "BANDUNG",
      bgImage: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_image/2025/7/14/5742a68b-9235-462a-9afa-4d7bd5e83f00.webp",
      video: ""
    },
    {
      title: "HELEN'S TORI MART ",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/6/26/95eb6d40-5b07-4cbb-8d14-a5372bed79cd.webp",
      desc: "Helens Night Mart with a bar concept like in Japan, with yakitori food.",
      city: "JAKARTA",
      bgImage: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_thumbnail/2025/6/26/9c1c1b30-c790-4cb1-ae2e-495c9d3da3a6.webp",
      video: ""
    },
    {
      title: "YES CHEF! ",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/10/13/3e8b7127-b363-4291-8a9d-0b440ee63d98.webp",
      desc: "The First Fun Dining Experience in Indonesia",
      city: "",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-yeschef.webm"
    },
    {
      title: "TIGER HYPER MART ",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/7/28/f9cb072f-6e14-481e-adf3-83fe03ce4e25.webp",
      desc: "A minimart-style bar to chill, drink, and hang out with no minimum charger, just good vibes.",
      city: "MAKASSAR",
      bgImage: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_background/2025/7/28/e150616d-0613-4999-a459-56f3b95c3aec.webp",
      video: ""
    },
    {
      title: "CECILIA BAR WIJAYA",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/10/17/gkqNZRiPCqQrRo7msMhOX8jeJLlgJyf6rDwMe3Nq.webp",
      desc: "A Thematic dining & bar experience",
      city: "",
      bgImage: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_image/2025/10/13/46542e27-8011-4246-8efa-1accf24d2381.webp",
      video: ""
    },
    {
      title: "SOSCIAL CLUB",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/8/25/d78831f5-4439-462c-956f-decc3032b316.webp",
      desc: "Not your usual nightclub. Not your average bar.  It’s a Sing-Along Party  &amp; Rnb Vibes —  More intimate than a club. More vibrant than a bar.",
      city: "JAKARTA",
      bgImage: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_background/2025/8/25/ec152f40-dffd-47bf-9fe9-1a9cbfc44ae2.webp",
      video: ""
    },
    {
      title: "MI MI SOCIAL HOUSE",
      logo: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_logo/2025/5/14/d7fcd01e-19be-4704-b7bc-7ac66ff2e3dd.webp",
      desc: "Mimi Social House is a refined Chinese dining spot with daily Mandarin entertainment, located at Central Park Mall. A relaxed spin-off of Mimi Livehouse PIK, it blends authentic cuisine and chill music in an elegant, social setting",
      city: "JAKARTA",
      bgImage: "https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/outlet_type_background/2025/5/14/8fbefd1d-0eb0-4f9a-8742-1f40db7f394f.webp",
      video: ""
    },
    {
      title: "HSS",
      logo: "https://holywings.com/_ipx/q_75/images/logo/hss-logo.webp",
      desc: "",
      city: "",
      video: "https://hwg-public.s3.ap-southeast-3.amazonaws.com/_videos/web/brand-hss.webm"
    },
    {
      title: "POWDS",
      logo: "https://holywings.com/_ipx/q_75/images/logo/hwpowds-logo.webp",
      desc: "",
      city: "",
      bgImage: "https://pix.toco.id/resize/w:700,h:700,fit:cover,f:webp,q:85/toco/img/image-1759140377243.webp?s=14c6723b3b92ac185fa0b5206d3bf407923e18de28488fc75bc616850b39f3ae",
      video: ""
    },
    {
      title: "HOLYWINGS STORE",
      logo: "https://holywings.com/_ipx/q_75/images/logo/hwstore-logo.webp",
      desc: "",
      city: "",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjleX0GDoYv0lye6qYGnnKXZ8q94ihFWoi9w&s",
      video: ""
    },
    {
      title: "SAYAP SUCI",
      logo: "https://holywings.com/_ipx/q_75/images/logo/hwcoffee-logo.webp",
      desc: "",
      city: "",
      bgImage: "https://sayapsuci.com/images/thumbnail/first-store.webp",
      video: ""
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

          {/* HAMBURGER (MOBILE) */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </div>

          <ul className={`main-nav-links ${open ? 'active' : ''}`}>
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
                <div
                    className="video-card"
                    key={index}
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector("video");
                      if (video) video.play();
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector("video");
                      if (video) {
                        video.pause();
                        video.currentTime = 0;
                      }
                    }}
                  >

                  {/* MEDIA (VIDEO / IMAGE) */}
                    {item.video ? (
                      <video
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="card-media"
                      >
                        <source src={item.video} type="video/webm" />
                      </video>
                    ) : (
                      <img
                        src={item.bgImage}
                        alt="Background"
                        className="card-bg"
                      />
                    )}

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

                      {!["HSS", "POWDS", "HOLYWINGS STORE", "SAYAP SUCI"].includes(item.title) && (
                        <button className="card-btn">Pesan Sekarang</button>
                      )}
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

     <footer className="hw-footer">
        <div className="footer-top">
          {/* LEFT */}
          <div className="footer-col">
            <img
              src={logo}
              alt="HW Logo"
              className="footer-logo"
            />

            <p className="footer-address">
              HW Central Office<br />
              The Breeze BSD Unit L02, BSD Green Office Park Jl. BSD Grand Boulevard,<br />
              BSD City, Kab. Tangerang, Banten 15345
            </p>

            <div className="footer-contact">
              <span>📸</span>
              <span>💬</span>
              <span>✉️</span>
              <a href="mailto:info@hwgroup.id">info@hwgroup.id</a>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="footer-col">
            <h4>INFORMASI LAINNYA</h4>
            <ul>
              <li>Tentang Kami</li>
              <li>Berita</li>
              <li><a href="https://cloningwebsiteholywingscareer.vercel.app/">Karier</a></li>
            </ul>
          </div>
              
          <div className="footer-col">
            <h4>&nbsp;</h4>
            <ul>
              <li>Reservasi</li>
              <li>Brands</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="footer-col">
            <h4>UNDUH APLIKASI HOLLYWINGS</h4>
            <div className="store-buttons">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </div>
            <span className="footer-version">3.2.0</span>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <span>© HW Group Indonesia All rights reserved.</span>
          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>

  )
}

export default App
