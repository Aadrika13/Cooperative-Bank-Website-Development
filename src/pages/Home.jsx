import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { number: '3000+', label: 'Happy Members', hindi: 'संतुष्ट सदस्य' },
  { number: '₹10Cr+', label: 'Total Turn Over', hindi: 'कुल टर्न ओवर' },
  { number: '3+', label: 'Years of Trust', hindi: 'विश्वास के वर्ष' },
  { number: '100%', label: 'Secure & Safe', hindi: 'पूर्ण सुरक्षित' },
];

const services = [
  {
    icon: '🏦',
    title: 'Saving Account',
    hindi: 'बचत खाता (5% p.a.)',
    desc: 'Earn 5% annual interest on your savings (5.5% for seniors) while keeping money safe.',
    link: '/schemes/saving-account',
  },
  {
    icon: '📅',
    title: 'Daily Deposit (DD)',
    hindi: 'दैनिक आवर्ती जमा',
    desc: 'Save daily and grow your wealth with interest rates up to 10.5% (11.0% seniors) over 1450 days.',
    link: '/schemes/daily-deposit',
  },
  {
    icon: '🗓️',
    title: 'Recurring Deposit (RD)',
    hindi: 'मासिक आवर्ती जमा',
    desc: 'Disciplined monthly savings starting from ₹500 with interest rates up to 10.5% p.a.',
    link: '/schemes/recurring-deposit',
  },
  {
    icon: '📊',
    title: 'Monthly Income Scheme (MIS)',
    hindi: 'मासिक आय योजना',
    desc: 'Invest once and earn regular income (12 to 72 months) with rates up to 12.0% p.a.',
    link: '/schemes/monthly-deposit',
  },
  {
    icon: '🔒',
    title: 'Fixed Deposit (FD)',
    hindi: 'सावधि जमा (न्यूनतम ₹10,000)',
    desc: 'Lock in high returns from 0.5 to 11 years with interest rates up to 13.0% per annum.',
    link: '/schemes/fixed-deposit',
  },
  {
    icon: '💳',
    title: 'Loans',
    hindi: 'ऋण सुविधा',
    desc: 'Deposit loan (70-80%), personal and security loans at attractive interest rates for members.',
    link: '/loan/deposit-loan',
  },
];

const whyUs = [
  { icon: '🛡️', title: 'Government Registered', hindi: 'सरकार द्वारा पंजीकृत', desc: 'Registered under MP Cooperative Societies Act 1960. Fully compliant & regulated.' },
  { icon: '👩', title: 'Women Empowerment', hindi: 'महिला सशक्तिकरण', desc: 'Founded to empower women with financial tools, independence and savings.' },
  { icon: '💰', title: 'High Interest Rates', hindi: 'उच्च ब्याज दर', desc: 'Earn up to 12% per annum — far better returns than standard bank rates.' },
  { icon: '🤝', title: 'Trusted Community', hindi: 'विश्वसनीय समुदाय', desc: 'Thousands of members trust us with their savings. Your money is in safe hands.' },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>🏛️</span> सरकारी मान्यता प्राप्त संस्था | Govt. Registered Society
            </div>
            <h1>
              <span className="hero-hindi">आपका पैसा,</span>
              <span className="hero-english">Our Responsibility</span>
            </h1>
            <p className="hero-subtitle">
              महिला कल्याण बचत साख सहकारी समिति — where your savings grow with trust, transparency and the highest interest rates in Gwalior.
            </p>
            <div className="hero-cta">
              <Link to="/schemes/fixed-deposit" className="btn-primary">Explore Schemes</Link>
              <Link to="/contact" className="btn-outline">Contact Us →</Link>
            </div>
            <div className="hero-highlights">
              <span>✅ Up to 12% Interest</span>
              <span>✅ Since 2022</span>
              <span>✅ Gwalior Based</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-grid">
              {[
                { icon: '💰', label: 'Saving Account', hindi: 'बचत खाता', color: '#7B1C2E' },
                { icon: '📈', label: 'Monthly Income Plan', hindi: 'मासिक आय', color: '#C9963A' },
                { icon: '🏦', label: 'Loan', hindi: 'ऋण', color: '#5A1220' },
                { icon: '📅', label: 'Daily Deposit', hindi: 'दैनिक जमा', color: '#9B2C40' },
                { icon: '🔒', label: 'Fixed Deposit', hindi: 'सावधि जमा', color: '#8B4513' },
              ].map((item, i) => (
                <div key={i} className="hero-bubble" style={{ '--bubble-color': item.color }}>
                  <span className="bubble-icon">{item.icon}</span>
                  <span className="bubble-label">{item.label}</span>
                  <span className="bubble-hindi">{item.hindi}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-bottom-wave">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,60 C480,100 960,20 1440,60 L1440,100 L0,100 Z" fill="#FDF5E6"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-hindi">{s.hindi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Schemes & Services</h2>
            <div className="hindi-subtitle">हमारी योजनाएं और सेवाएं</div>
            <p>Tailored financial solutions for every need — savings, deposits, and loans.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link to={s.link} key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-badge">{s.hindi}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-arrow">→ Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="why-bg" />
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: '#fff' }}>Why Choose Us?</h2>
            <div className="hindi-subtitle">हमें क्यों चुनें?</div>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <div className="why-hindi">{w.hindi}</div>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rates Snapshot */}
      <section className="rates-section">
        <div className="container">
          <div className="section-title">
            <h2>Interest Rate Highlights</h2>
            <div className="hindi-subtitle">ब्याज दर सारांश</div>
          </div>
          <div className="rates-grid">
            <div className="rate-card">
              <div className="rate-icon">📅</div>
              <h3>Daily RD — दैनिक जमा</h3>
              <div className="rate-highlight">Up to 10.5%</div>
              <p>180 days to 1450 days plans available</p>
              <table className="mini-table">
                <thead><tr><th>Duration</th><th>Rate</th></tr></thead>
                <tbody>
                  <tr><td>180 Days</td><td>6%</td></tr>
                  <tr><td>365 Days</td><td>8.5%</td></tr>
                  <tr><td>500 Days</td><td>9.5%</td></tr>
                  <tr><td>1450 Days</td><td>10.5%</td></tr>
                </tbody>
              </table>
              <Link to="/schemes/daily-deposit" className="btn-primary">View Full Plan</Link>
            </div>
            <div className="rate-card featured-rate">
              <div className="rate-badge">⭐ Most Popular</div>
              <div className="rate-icon">📊</div>
              <h3>MIS Scheme — मासिक आय</h3>
              <div className="rate-highlight golden">Up to 12.0%</div>
              <p>12 to 72 months term with monthly payouts</p>
              <table className="mini-table">
                <thead><tr><th>Deposit</th><th>Monthly (72m @ 12%)</th></tr></thead>
                <tbody>
                  <tr><td>₹10,000</td><td>₹100/mo</td></tr>
                  <tr><td>₹50,000</td><td>₹500/mo</td></tr>
                  <tr><td>₹1,00,000</td><td>₹1,000/mo</td></tr>
                </tbody>
              </table>
              <Link to="/schemes/monthly-deposit" className="btn-gold">View Full Plan</Link>
            </div>
            <div className="rate-card">
              <div className="rate-icon">🔒</div>
              <h3>Fixed Deposit — सावधि जमा</h3>
              <div className="rate-highlight">Up to 13.0%</div>
              <p>0.5 yr (4.5%) to 11 yrs (13.0%) flexible terms (Min ₹10k)</p>
              <table className="mini-table">
                <thead><tr><th>Term</th><th>Rate</th></tr></thead>
                <tbody>
                  <tr><td>0.5 Year</td><td>4.50%</td></tr>
                  <tr><td>1 Year</td><td>8.50%</td></tr>
                  <tr><td>6 Years</td><td>11.00%</td></tr>
                  <tr><td>11 Years</td><td>13.00%</td></tr>
                </tbody>
              </table>
              <Link to="/schemes/fixed-deposit" className="btn-primary">View Full Plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-content">
          <div className="cta-text">
            <h2>Ready to Start Saving?</h2>
            <p className="cta-hindi">आज ही हमसे जुड़ें और अपनी बचत को बढ़ाएं</p>
            <p>Join thousands of women who trust Mahila Kalyan for their financial security.</p>
          </div>
          <div className="cta-actions">
            <Link to="/membership" className="btn-gold">Become a Member</Link>
            <Link to="/contact" className="btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Map / Address */}
      <section className="address-section">
        <div className="container address-content">
          <div className="address-info">
            <h2>Find Us <span>हमें खोजें</span></h2>
            <div className="address-details">
              <div className="addr-item">
                <span>📍</span>
                <div>
                  <strong>पता / Address</strong>
                  <p>Shikha Arcade, Near Kartar Hotel, Roxy Pul, Jinsi Nala No. 4,<br/>Madhav Ganj, Lashkar, Gwalior, Madhya Pradesh — 474001</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '4px' }}>
                    शिखा आर्केड, करतार बार के पास, रॉक्सी पुल, जिंसी नाला नं. 4, माधव गंज, लश्कर-ग्वालियर (म.प्र.)
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '2px' }}>
                    GPS: 26.193448° N, 78.150164° E (55V2+93P Gwalior)
                  </p>
                  <a
                    href="https://www.google.com/maps?q=26.193448,78.150164"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '8px',
                      color: 'var(--maroon)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      textDecoration: 'underline'
                    }}
                  >
                    📍 View on Google Maps / मैप पर देखें ↗
                  </a>
                </div>
              </div>
              <div className="addr-item">
                <span>📞</span>
                <div>
                  <strong>फोन / Phone</strong>
                  <a href="tel:07514526033">0751-4526033</a>
                </div>
              </div>
              <div className="addr-item">
                <span>✉</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:mahilakalyanbachatsakhsehkarim@gmail.com">mahilakalyanbachatsakhsehkarim@gmail.com</a>
                </div>
              </div>
              <div className="addr-item">
                <span>🕐</span>
                <div>
                  <strong>कार्यालय समय / Office Hours</strong>
                  <p>Monday – Saturday: 10:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe
              title="Office Location"
              src="https://maps.google.com/maps?q=26.193448,78.150164&hl=en&z=17&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
