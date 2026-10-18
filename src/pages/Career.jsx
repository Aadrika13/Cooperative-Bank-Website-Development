import './Career.css';

const Career = () => {
  return (
    <div>
      <div className="page-banner">
        <h1>Career with Us</h1>
        <p className="hindi-title">हमारे साथ करियर</p>
        <p className="breadcrumb">Home → <span>Career</span></p>
      </div>

      {/* Career Hero */}
      <section className="career-hero">
        <div className="container">
          <div className="career-hero-grid">
            <div>
              <h2>Build Your Career With Us</h2>
              <p className="career-subtitle">महिला सशक्तिकरण के मिशन का हिस्सा बनें</p>
              <p>
                Join Mahila Kalyan Bachat Sakh Sahakari Samiti and be part of a growing cooperative society that is making a real difference in the lives of thousands of women in Gwalior.
              </p>
              <p>
                We offer a supportive work environment, growth opportunities, and the satisfaction of contributing to financial empowerment of women across our cooperative network.
              </p>
              <a href="mailto:mahilakalyanbachatsakhsehkarim@gmail.com" className="btn-primary" style={{ display: 'inline-block', marginTop: '10px' }}>
                Send Resume — रिज्यूम भेजें
              </a>
            </div>
            <div className="career-benefits-card">
              <h3>Why Join Us? — हमें क्यों चुनें?</h3>
              <ul className="career-benefits-list">
                <li>✅ Stable employment with a registered cooperative society</li>
                <li>✅ Growth and professional development opportunities</li>
                <li>✅ Work directly in a women-empowerment mission</li>
                <li>✅ Transparent and supportive work environment</li>
                <li>✅ On-job training and skill building</li>
                <li>✅ Rewarding performance incentives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Submission Section */}
      <section className="openings-section">
        <div className="container">
          <div className="general-apply" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="general-apply-content">
              <h3>Submit Your Resume / अपना बायोडाटा भेजें</h3>
              <p>
                We are always looking for passionate and hardworking candidates for administrative, accounting, field outreach, and member relations roles. Send us your resume and we will contact you when a suitable position aligns with your skills.
              </p>
              <p className="hindi-text">
                अपना रिज्यूम हमें ईमेल पर भेजें — हमारी टीम आपकी योग्यता के अनुसार उपयुक्त अवसर होने पर संपर्क करेगी।
              </p>
              <div style={{ marginTop: '16px', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                📧 <strong>ईमेल:</strong> mahilakalyanbachatsakhsehkarim@gmail.com<br/>
                📞 <strong>फोन:</strong> 0751-4526033
              </div>
            </div>
            <div className="general-apply-actions">
              <a href="mailto:mahilakalyanbachatsakhsehkarim@gmail.com?subject=Job Application - Mahila Kalyan Samiti" className="btn-gold">
                Send Resume via Email →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
