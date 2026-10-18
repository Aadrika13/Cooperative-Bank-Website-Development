import { Link } from 'react-router-dom';
import '../SchemePages.css';

const PersonalLoan = () => (
  <div>
    <div className="page-banner">
      <h1>Personal Loan</h1>
      <p className="hindi-title">व्यक्तिगत ऋण</p>
      <p className="breadcrumb">Home → Loan → <span>Personal Loan</span></p>
    </div>
    <section className="scheme-section">
      <div className="container">
        <div className="loan-types-grid">
          <Link to="/loan/deposit-loan" className="loan-type-card">
            <span>🏦</span><h4>Deposit Loan</h4><p>जमा ऋण</p>
          </Link>
          <Link to="/loan/personal-loan" className="loan-type-card active">
            <span>👤</span><h4>Personal Loan</h4><p>व्यक्तिगत ऋण</p>
          </Link>
          <Link to="/loan/security-loan" className="loan-type-card">
            <span>🔐</span><h4>Security Loan</h4><p>सुरक्षा ऋण</p>
          </Link>
        </div>
        <div className="scheme-intro">
          <div className="scheme-intro-text">
            <h2>व्यक्तिगत ऋण (Personal Loan)</h2>
            <p className="scheme-tagline">Meet your personal financial needs with ease!</p>
            <p>
              व्यक्तिगत ऋण योजना के तहत संस्था के सदस्य अपनी व्यक्तिगत आवश्यकताओं जैसे चिकित्सा, शिक्षा, विवाह, या घर की मरम्मत के लिए ऋण प्राप्त कर सकते हैं।
            </p>
            <p>
              Personal loans are available to active members for various personal needs including medical emergencies, education, marriage, home renovation, and more — at competitive interest rates.
            </p>
            <div className="rate-badges">
              <span className="rate-badge-item">Medical Emergency</span>
              <span className="rate-badge-item">Education</span>
              <span className="rate-badge-item">Marriage</span>
              <span className="rate-badge-item featured-badge">Low Interest</span>
            </div>
          </div>
          <div className="scheme-highlights">
            <h3>पात्रता / Eligibility</h3>
            <ul className="features-list">
              <li>✅ Active member of the society</li>
              <li>✅ Regular savings/deposit record</li>
              <li>✅ 2 guarantors from the society</li>
              <li>✅ Valid KYC documents</li>
              <li>✅ No previous loan default</li>
            </ul>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
              Apply for Loan
            </Link>
          </div>
        </div>
        <div className="how-it-works" style={{ marginBottom: '40px' }}>
          <h3>Required Documents — आवश्यक दस्तावेज</h3>
          <div className="hiw-steps">
            <div className="hiw-step"><div className="step-num">📋</div><h4>Identity Proof</h4><p>Aadhaar Card / Voter ID / PAN Card</p></div>
            <div className="hiw-arrow">+</div>
            <div className="hiw-step"><div className="step-num">🏠</div><h4>Address Proof</h4><p>Any government-issued address document</p></div>
            <div className="hiw-arrow">+</div>
            <div className="hiw-step"><div className="step-num">📷</div><h4>Photographs</h4><p>2 recent passport-size photographs</p></div>
            <div className="hiw-arrow">+</div>
            <div className="hiw-step"><div className="step-num">👥</div><h4>Guarantors</h4><p>2 guarantors who are active society members</p></div>
          </div>
        </div>
        <div className="scheme-terms">
          <h3>नियम एवं शर्तें / Terms & Conditions</h3>
          <div className="terms-grid">
            <div className="term-item"><span className="term-icon">📌</span><p>ऋण राशि सदस्य की जमा एवं गारंटी के आधार पर।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>दो गारंटर (संस्था सदस्य) अनिवार्य हैं।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>मासिक किस्त समय पर जमा करना अनिवार्य।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>ब्याज दर एवं अन्य नियम कार्यकारिणी द्वारा निर्धारित।</p></div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PersonalLoan;
