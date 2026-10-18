import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#7B1C2E"/>
        </svg>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img src="/logo.jpg" alt="Logo" className="footer-logo" />
            <h3>महिला कल्याण</h3>
            <p className="footer-org">बचत साख सहकारी समिति मर्यादित</p>
            <p className="footer-tagline">
              महिलाओं की आर्थिक स्वतंत्रता के लिए समर्पित<br/>
              <em>Dedicated to Women's Financial Empowerment</em>
            </p>
            <div className="footer-reg">
              <span>पंजीयन सं: <strong>117221/2022</strong></span>
              <span>म.प्र. सहकारी सोसाइटी अधिनियम 1960 के अधीन पंजीकृत</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Schemes <span>योजनाएं</span></h4>
            <ul>
              <li><Link to="/schemes/saving-account">Saving Account — बचत खाता</Link></li>
              <li><Link to="/schemes/daily-deposit">Daily Deposit — दैनिक जमा</Link></li>
              <li><Link to="/schemes/recurring-deposit">Recurring Deposit (RD) — आवर्ती जमा</Link></li>
              <li><Link to="/schemes/monthly-deposit">MIS Scheme — मासिक आय</Link></li>
              <li><Link to="/schemes/fixed-deposit">Fixed Deposit — सावधि जमा</Link></li>
              <li><Link to="/membership">Membership — सदस्यता</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services <span>सेवाएं</span></h4>
            <ul>
              <li><Link to="/loan/deposit-loan">Deposit Loan — जमा ऋण</Link></li>
              <li><Link to="/loan/personal-loan">Personal Loan — व्यक्तिगत ऋण</Link></li>
              <li><Link to="/loan/security-loan">Security Loan — सुरक्षा ऋण</Link></li>
              <li><Link to="/emi-calculator">EMI Calculator — EMI कैलकुलेटर</Link></li>
              <li><Link to="/career">Career — करियर</Link></li>
              <li><Link to="/contact">Contact Us — संपर्क करें</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us <span>संपर्क करें</span></h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <span className="fc-icon">📍</span>
                <div>
                  <strong>पता / Address</strong>
                  <p>Shikha Arcade, Near Kartar Hotel, Roxy Pul, Jinsi Nala No. 4, Madhav Ganj, Gwalior (M.P.) — 474001</p>
                  <a
                    href="https://www.google.com/maps?q=26.193448,78.150164"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--gold)', fontSize: '0.78rem', textDecoration: 'underline', display: 'inline-block', marginTop: '4px' }}
                  >
                    Google Maps पर देखें ↗
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="fc-icon">📞</span>
                <div>
                  <strong>फोन / Phone</strong>
                  <a href="tel:07514526033">0751-4526033</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="fc-icon">✉</span>
                <div>
                  <strong>ईमेल / Email</strong>
                  <a href="mailto:mahilakalyanbachatsakhsehkarim@gmail.com">
                    mahilakalyanbachatsakhsehkarim@gmail.com
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="fc-icon">🕐</span>
                <div>
                  <strong>समय / Hours</strong>
                  <p>Mon–Sat: 10:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© {currentYear} महिला कल्याण बचत साख सहकारी समिति मर्यादित — All Rights Reserved.</p>
          <p className="footer-disclaimer">
            Registered under M.P. Cooperative Societies Act 1960 | Reg. No. 117221/2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
