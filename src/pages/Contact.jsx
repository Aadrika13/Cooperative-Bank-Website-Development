import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailBody = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`mailto:mahilakalyanbachatsakhsehkarim@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${mailBody}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <div className="page-banner">
        <h1>Contact Us</h1>
        <p className="hindi-title">संपर्क करें</p>
        <p className="breadcrumb">Home → <span>Contact</span></p>
      </div>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="ci-icon">📍</div>
              <h3>Office Address</h3>
              <p className="ci-hindi">कार्यालय का पता</p>
              <p>Shikha Arcade, Near Kartar Bar, Roxy Pul, Jinsi Nala No. 4, Madhav Ganj, Lashkar, Gwalior (M.P.) — 474001</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '4px' }}>
                शिखा आर्केड, करतार बार के पास, रॉक्सी पुल, जिंसी नाला नं. 4, माधव गंज, लश्कर-ग्वालियर (म.प्र.)
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '2px' }}>
                Lat 26.193448° Long 78.150164°
              </p>
              <a
                href="https://www.google.com/maps?q=26.193448,78.150164"
                target="_blank"
                rel="noopener noreferrer"
                className="ci-link"
                style={{ marginTop: '8px', display: 'inline-block', fontWeight: 600 }}
              >
                📍 Open in Google Maps ↗
              </a>
            </div>
            <div className="contact-info-card featured-ci">
              <div className="ci-icon">📞</div>
              <h3>Phone Number</h3>
              <p className="ci-hindi">फोन नंबर</p>
              <a href="tel:07514526033" className="ci-link">0751-4526033</a>
              <p className="ci-note">Mon–Sat: 10:00 AM – 5:00 PM</p>
            </div>
            <div className="contact-info-card">
              <div className="ci-icon">✉</div>
              <h3>Email Address</h3>
              <p className="ci-hindi">ईमेल पता</p>
              <a href="mailto:mahilakalyanbachatsakhsehkarim@gmail.com" className="ci-link" style={{ fontSize: '0.75rem' }}>
                mahilakalyanbachatsakhsehkarim@gmail.com
              </a>
            </div>
            <div className="contact-info-card">
              <div className="ci-icon">🕐</div>
              <h3>Office Hours</h3>
              <p className="ci-hindi">कार्यालय समय</p>
              <p><strong>Monday – Saturday</strong><br/>10:00 AM to 5:00 PM</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '6px' }}>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">हमें संदेश भेजें — हम जल्द उत्तर देंगे</p>

              {submitted && (
                <div className="success-msg">
                  ✅ Your message has been sent! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name — नाम *</label>
                    <input name="name" type="text" placeholder="Enter your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-field">
                    <label>Phone — फोन *</label>
                    <input name="phone" type="tel" placeholder="Your mobile number" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-field">
                  <label>Email — ईमेल</label>
                  <input name="email" type="email" placeholder="your@email.com (optional)" value={form.email} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label>Subject — विषय *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a subject — विषय चुनें</option>
                    <option value="Membership Inquiry">Membership Inquiry — सदस्यता जानकारी</option>
                    <option value="Saving Account">Saving Account — बचत खाता</option>
                    <option value="Daily Deposit Scheme">Daily Deposit — दैनिक जमा</option>
                    <option value="MIS Scheme">MIS Scheme — मासिक आय</option>
                    <option value="Fixed Deposit">Fixed Deposit — सावधि जमा</option>
                    <option value="Loan Inquiry">Loan Inquiry — ऋण जानकारी</option>
                    <option value="Career">Career — करियर</option>
                    <option value="Other">Other — अन्य</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Message — संदेश *</label>
                  <textarea name="message" rows="5" placeholder="Write your message here..." value={form.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit-btn">
                  Send Message — भेजें →
                </button>
              </form>
            </div>

            {/* Map & Extra Info */}
            <div className="contact-map-col">
              <div className="map-frame">
                <iframe
                  title="Office Map"
                  src="https://maps.google.com/maps?q=26.193448,78.150164&hl=en&z=17&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="contact-quick-info">
                <h3>Quick Contact — त्वरित संपर्क</h3>
                <div className="qc-items">
                  <a href="tel:07514526033" className="qc-item">
                    <span>📞</span>
                    <div><strong>Call Us</strong><p>0751-4526033</p></div>
                  </a>
                  <a href="mailto:mahilakalyanbachatsakhsehkarim@gmail.com" className="qc-item">
                    <span>✉</span>
                    <div><strong>Email Us</strong><p>mahilakalyanbachatsakhsehkarim@gmail.com</p></div>
                  </a>
                  <a
                    href="https://www.google.com/maps?q=26.193448,78.150164"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qc-item"
                  >
                    <span>📍</span>
                    <div><strong>Google Maps</strong><p>Open Exact Location in Maps ↗</p></div>
                  </a>
                </div>
                <div className="reg-info-box">
                  <p>📋 पंजीयन संख्या: <strong>117221/2022</strong></p>
                  <p>म.प्र. सहकारी सोसाइटी अधिनियम 1960 के अधीन पंजीकृत</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
