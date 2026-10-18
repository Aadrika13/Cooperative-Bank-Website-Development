import { Link } from 'react-router-dom';
import '../SchemePages.css';

const DepositLoan = () => (
  <div>
    <div className="page-banner">
      <h1>Deposit Loan</h1>
      <p className="hindi-title">जमा ऋण</p>
      <p className="breadcrumb">Home → Loan → <span>Deposit Loan</span></p>
    </div>
    <section className="scheme-section">
      <div className="container">
        <div className="loan-types-grid">
          <Link to="/loan/deposit-loan" className="loan-type-card active">
            <span>🏦</span><h4>Deposit Loan</h4><p>जमा ऋण</p>
          </Link>
          <Link to="/loan/personal-loan" className="loan-type-card">
            <span>👤</span><h4>Personal Loan</h4><p>व्यक्तिगत ऋण</p>
          </Link>
          <Link to="/loan/security-loan" className="loan-type-card">
            <span>🔐</span><h4>Security Loan</h4><p>सुरक्षा ऋण</p>
          </Link>
        </div>
        <div className="scheme-intro">
          <div className="scheme-intro-text">
            <h2>जमा ऋण (Deposit Loan)</h2>
            <p className="scheme-tagline">Borrow against your own deposits — instant & easy!</p>
            <p>
              जमा ऋण योजना के तहत आप अपनी जमा राशि के विरुद्ध ऋण प्राप्त कर सकते हैं।
              यह आपकी जमा योजना को बाधित किए बिना तत्काल धनराशि की व्यवस्था करने का सबसे आसान तरीका है।
            </p>
            <p>
              Under the Deposit Loan scheme, members can avail a loan against their fixed deposit, recurring deposit, or MIS balance. The loan amount can be up to <strong>70-80%</strong> of the deposit value.
            </p>
            <div className="rate-badges">
              <span className="rate-badge-item">Up to 70–80% of Deposit</span>
              <span className="rate-badge-item">Low Interest Rate</span>
              <span className="rate-badge-item featured-badge">Instant Approval</span>
            </div>
          </div>
          <div className="scheme-highlights">
            <h3>पात्रता / Eligibility</h3>
            <ul className="features-list">
              <li>✅ Must be a registered member</li>
              <li>✅ Must have an active deposit account (<strong>applicable only when the customer has 90 and above days with any RD/DD scheme with the bank</strong>)</li>
              <li>✅ Valid ID & address proof</li>
              <li>✅ No existing default on loans</li>
              <li>✅ Deposit must be in good standing</li>
            </ul>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
              Apply for Loan
            </Link>
          </div>
        </div>
        <div className="how-it-works" style={{ marginBottom: '40px' }}>
          <h3>Loan Process — ऋण प्रक्रिया</h3>
          <div className="hiw-steps">
            <div className="hiw-step"><div className="step-num">1</div><h4>Apply</h4><p>Submit loan application form at the office with required documents.</p></div>
            <div className="hiw-arrow">→</div>
            <div className="hiw-step"><div className="step-num">2</div><h4>Verification</h4><p>Committee reviews your deposit records (90+ days) and eligibility.</p></div>
            <div className="hiw-arrow">→</div>
            <div className="hiw-step"><div className="step-num">3</div><h4>Approval</h4><p>Loan approved by management committee within stipulated time.</p></div>
            <div className="hiw-arrow">→</div>
            <div className="hiw-step"><div className="step-num">4</div><h4>Disbursement</h4><p>Loan amount disbursed to your account or in cash as per rules.</p></div>
          </div>
        </div>
        <div className="scheme-terms">
          <h3>नियम एवं शर्तें / Terms & Conditions</h3>
          <div className="terms-grid">
            <div className="term-item"><span className="term-icon">📌</span><p>ऋण राशि जमा के 70-80% तक देय होगी।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>यह ऋण केवल तभी लागू होगा जब ग्राहक का बैंक के साथ किसी भी RD/DD योजना में 90 दिन या उससे अधिक समय पूरा हो गया हो।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>ब्याज दर संस्था के नियमों के अनुसार देय।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>समय पर किस्त भुगतान अनिवार्य है।</p></div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DepositLoan;
