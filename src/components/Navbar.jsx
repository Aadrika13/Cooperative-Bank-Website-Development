import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navLinks = [
    { path: '/', label: 'Home', hindi: 'होम' },
    { path: '/about', label: 'About Us', hindi: 'हमारे बारे में' },
    {
      label: 'Schemes', hindi: 'योजनाएं',
      dropdown: [
        { path: '/schemes/saving-account', label: 'Saving Account', hindi: 'बचत खाता' },
        { path: '/schemes/daily-deposit', label: 'Daily Deposit (DD)', hindi: 'दैनिक आवर्ती जमा' },
        { path: '/schemes/recurring-deposit', label: 'Recurring Deposit (RD)', hindi: 'मासिक आवर्ती जमा' },
        { path: '/schemes/monthly-deposit', label: 'Monthly Income Scheme (MIS)', hindi: 'मासिक आय योजना' },
        { path: '/schemes/fixed-deposit', label: 'Fixed Deposit (FD)', hindi: 'सावधि जमा' },
        { path: '/membership', label: 'Membership', hindi: 'सदस्यता' },
      ]
    },
    {
      label: 'Loan', hindi: 'ऋण',
      dropdown: [
        { path: '/loan/deposit-loan', label: 'Deposit Loan', hindi: 'जमा ऋण' },
        { path: '/loan/personal-loan', label: 'Personal Loan', hindi: 'व्यक्तिगत ऋण' },
        { path: '/loan/security-loan', label: 'Security Loan', hindi: 'सुरक्षा ऋण' },
      ]
    },
    { path: '/emi-calculator', label: 'EMI Calculator', hindi: 'EMI कैलकुलेटर' },
    { path: '/career', label: 'Career', hindi: 'करियर' },
    { path: '/contact', label: 'Contact', hindi: 'संपर्क' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span>🕐 Mon–Sat: 10:00 AM – 5:00 PM</span>
            <span>📞 0751-4526033</span>
          </div>
          <div className="top-bar-right">
            <span className="reg-no">पंजीयन सं: 117221/2022</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <Link to="/" className="logo-wrapper">
            <img src="/logo.jpg" alt="Mahila Kalyan Bank Logo" className="logo-img" />
            <div className="logo-text">
              <h1 className="logo-name">महिला कल्याण</h1>
              <p className="logo-sub">बचत साख सहकारी समिति मर्यादित</p>
              <p className="logo-location">ग्वालियर (म.प्र.)</p>
            </div>
          </Link>

          <div className="header-contact">
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <span className="contact-label">Email Us</span>
                <a href="mailto:mahilakalyanbachatsakhsehkarim@gmail.com" className="contact-value">
                  mahilakalyanbachatsakhsehkarim@gmail.com
                </a>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=26.193448,78.150164"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              title="Open exact location on Google Maps"
            >
              <span className="contact-icon">📍</span>
              <div>
                <span className="contact-label">Visit Us ↗</span>
                <span className="contact-value">Shikha Arcade, Roxy Pul</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'sticky' : ''}`}>
        <div className="container nav-content">
          <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
            {navLinks.map((link, idx) => (
              <li key={idx} className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}>
                {link.dropdown ? (
                  <>
                    <button
                      className={`nav-btn ${activeDropdown === link.label ? 'active' : ''}`}
                      onClick={() => toggleDropdown(link.label)}
                    >
                      <span>{link.label}</span>
                      <span className="hindi-nav">{link.hindi}</span>
                      <span className="dropdown-arrow">▾</span>
                    </button>
                    <ul className={`dropdown-menu ${activeDropdown === link.label ? 'dropdown-open' : ''}`}>
                      {link.dropdown.map((item, i) => (
                        <li key={i}>
                          <NavLink to={item.path} className="dropdown-link">
                            <span>{item.label}</span>
                            <span className="hindi-nav">{item.hindi}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink to={link.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    <span>{link.label}</span>
                    <span className="hindi-nav">{link.hindi}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn-request-quote">
            Request Info
          </Link>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <span className={`bar ${isOpen ? 'bar-open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'bar-open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'bar-open' : ''}`}></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
