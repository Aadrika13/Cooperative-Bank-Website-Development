import { useState, useEffect, useCallback } from 'react';
import './About.css';

const slides = [
  ...Array.from({ length: 8 }, (_, i) => `/gallery/office-${i + 1}.jpg`),
  ...Array.from({ length: 20 }, (_, i) => `/gallery/slide-${i + 1}.jpg`)
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  const team = [
    { name: 'अध्यक्ष', title: 'President / अध्यक्ष', desc: 'Leading the society with vision and dedication.' },
    { name: 'उपाध्यक्ष', title: 'Vice President / उपाध्यक्ष', desc: 'Supporting operations and member welfare.' },
    { name: 'संरक्षक', title: 'Patron / संरक्षक', desc: 'Providing guidance, support and mentorship to the society.' },
  ];

  const values = [
    { icon: '🤝', title: 'Trust', hindi: 'विश्वास', desc: 'Every rupee deposited with us is handled with complete transparency and accountability.' },
    { icon: '💪', title: 'Empowerment', hindi: 'सशक्तिकरण', desc: 'We empower women to become financially independent and secure.' },
    { icon: '🌱', title: 'Growth', hindi: 'विकास', desc: 'We help your savings grow with competitive interest rates and flexible plans.' },
    { icon: '🏛️', title: 'Integrity', hindi: 'ईमानदारी', desc: 'Registered under MP Cooperative Societies Act 1960 with full legal compliance.' },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <h1>About Us</h1>
        <p className="hindi-title">हमारे बारे में</p>
        <p className="breadcrumb">Home → <span>About Us</span></p>
      </div>

      {/* About Content */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-image-col">
            <div className="about-logo-wrapper">
              <img src="/logo.jpg" alt="Mahila Kalyan Logo" className="about-logo" />
              <div className="about-logo-info">
                <div className="info-badge">
                  <span>📋</span>
                  <div>
                    <strong>पंजीयन सं.</strong>
                    <span>117221/2022</span>
                  </div>
                </div>
                <div className="info-badge">
                  <span>📅</span>
                  <div>
                    <strong>स्थापना वर्ष</strong>
                    <span>2022</span>
                  </div>
                </div>
                <div className="info-badge">
                  <span>📍</span>
                  <div>
                    <strong>स्थान</strong>
                    <span>ग्वालियर, म.प्र.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text-col">
            <div className="about-label">Who We Are — हम कौन हैं</div>
            <h2>महिला कल्याण बचत साख सहकारी समिति मर्यादित</h2>
            <p>
              <strong>Mahila Kalyan Bachat Sakh Sahakari Samiti Maryadit</strong> is a government-registered cooperative society established in 2022 under the Madhya Pradesh Cooperative Societies Act 1960 (Registration No. 117221/2022).
            </p>
            <p>
              हमारी संस्था महिलाओं की आर्थिक स्वतंत्रता और सशक्तिकरण के लिए समर्पित है। हम महिलाओं को बेहतर ब्याज दरों के साथ बचत, जमा और ऋण की सुविधा प्रदान करते हैं।
            </p>
            <p>
              Located at Shikha Arcade, Plot No.1 Near Kartar Bar, Roxy Pul, Gwalior, we serve thousands of members across the Gwalior region. Our mission is to provide safe, accessible, and high-return financial products to help women build their financial future.
            </p>
            <div className="about-highlights">
              <div className="ah-item"><strong>3000+</strong><span>Members</span></div>
              <div className="ah-item"><strong>2022</strong><span>Est. Year</span></div>
              <div className="ah-item"><strong>12%</strong><span>Max. Interest</span></div>
              <div className="ah-item"><strong>100%</strong><span>Transparent</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Tour / Photo Slideshow */}
      <section className="gallery-slideshow-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Office & Society in Action</h2>
            <div className="hindi-subtitle">हमारा कार्यालय एवं संस्था की झलकियां</div>
            <p>A visual glimpse into our bank office, counters, team, leadership, and society events.</p>
          </div>

          <div
            className="slideshow-wrapper"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <div className="slideshow-main-frame">
              <img
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="slide-image"
                onClick={() => setFullscreenImg(slides[currentSlide])}
              />

              <div className="slide-top-bar">
                <span className="slide-counter">📸 {currentSlide + 1} / {slides.length}</span>
                <button
                  className="slide-expand-btn"
                  onClick={() => setFullscreenImg(slides[currentSlide])}
                  title="View Fullscreen"
                >
                  🔍 View Full
                </button>
              </div>

              {/* Prev / Next Controls */}
              <button
                className="slide-btn prev-btn"
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                ‹
              </button>
              <button
                className="slide-btn next-btn"
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                ›
              </button>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="thumbnail-strip">
              {slides.map((src, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                >
                  <img src={src} alt={`Thumbnail ${idx + 1}`} />
                  <span className="thumb-idx">{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Play/Pause & Indicators */}
            <div className="slideshow-controls-bar">
              <button
                className="play-pause-btn"
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
              >
                {isPlaying ? '⏸ Pause' : '▶ Play'}
              </button>
              <div className="slide-dots">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`slide-dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Fullscreen Modal */}
      {fullscreenImg && (
        <div className="lightbox-overlay" onClick={() => setFullscreenImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setFullscreenImg(null)}>✕</button>
            <img src={fullscreenImg} alt="Enlarged View" className="lightbox-img" />
          </div>
        </div>
      )}

      {/* Mission Vision */}
      <section className="mission-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission <span>हमारा लक्ष्य</span></h3>
              <p>
                To empower women of Gwalior and surrounding areas with accessible, transparent, and high-return financial products — enabling them to achieve financial security and independence.
              </p>
              <p>
                महिलाओं को आर्थिक रूप से स्वावलंबी बनाना और उन्हें सुरक्षित बचत एवं ऋण सुविधाएं प्रदान करना।
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision <span>हमारी दृष्टि</span></h3>
              <p>
                To become the most trusted cooperative society in Madhya Pradesh, where every woman has access to fair, transparent financial services and the opportunity to grow her wealth.
              </p>
              <p>
                मध्य प्रदेश की सर्वाधिक विश्वसनीय सहकारी समिति बनना जहां हर महिला को उचित वित्तीय सेवाएं मिलें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <div className="hindi-subtitle">हमारे मूल सिद्धांत</div>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title} <span>{v.hindi}</span></h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="reg-section">
        <div className="container">
          <div className="section-title">
            <h2>Legal Registration</h2>
            <div className="hindi-subtitle">कानूनी पंजीकरण</div>
          </div>
          <div className="reg-card">
            <div className="reg-grid">
              <div className="reg-item">
                <strong>Society Name</strong>
                <span>महिला कल्याण बचत साख सहकारी समिति मर्यादित</span>
              </div>
              <div className="reg-item">
                <strong>Registration Number</strong>
                <span className="reg-number">117221/2022</span>
              </div>
              <div className="reg-item">
                <strong>Act</strong>
                <span>म.प्र. सहकारी सोसाइटी अधिनियम 1960</span>
              </div>
              <div className="reg-item">
                <strong>Category</strong>
                <span>Cooperative Credit Society / बचत साख सहकारी समिति</span>
              </div>
              <div className="reg-item">
                <strong>Location</strong>
                <span>
                  Shikha Arcade, Near Kartar Bar, Roxy Pul, Jinsi Nala No. 4, Madhav Ganj, Gwalior (M.P.) — 474001{' '}
                  <a
                    href="https://www.google.com/maps?q=26.193448,78.150164"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--maroon)', textDecoration: 'underline', marginLeft: '6px' }}
                  >
                    (View Map ↗)
                  </a>
                </span>
              </div>
              <div className="reg-item">
                <strong>Year of Establishment</strong>
                <span>2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Management Committee</h2>
            <div className="hindi-subtitle">प्रबंध समिति</div>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">
                  <span>{member.name[0]}</span>
                </div>
                <h3>{member.name}</h3>
                <div className="team-title">{member.title}</div>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
