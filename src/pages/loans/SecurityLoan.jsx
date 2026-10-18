import { Link } from 'react-router-dom';
import '../SchemePages.css';

const SecurityLoan = () => (
  <div>
    <div className="page-banner">
      <h1>Security Loan</h1>
      <p className="hindi-title">सुरक्षा ऋण</p>
      <p className="breadcrumb">Home → Loan → <span>Security Loan</span></p>
    </div>
    <section className="scheme-section">
      <div className="container">
        <div className="loan-types-grid">
          <Link to="/loan/deposit-loan" className="loan-type-card">
            <span>🏦</span><h4>Deposit Loan</h4><p>जमा ऋण</p>
          </Link>
          <Link to="/loan/personal-loan" className="loan-type-card">
            <span>👤</span><h4>Personal Loan</h4><p>व्यक्तिगत ऋण</p>
          </Link>
          <Link to="/loan/security-loan" className="loan-type-card active">
            <span>🔐</span><h4>Security Loan</h4><p>सुरक्षा ऋण</p>
          </Link>
        </div>
        <div className="scheme-intro">
          <div className="scheme-intro-text">
            <h2>सुरक्षा ऋण (Security Loan)</h2>
            <p className="scheme-tagline">Pledge your assets, access funds instantly!</p>
            <p>
              सुरक्षा ऋण योजना में संपत्ति, आभूषण, या अन्य संपत्तियों को गिरवी रखकर ऋण प्राप्त किया जा सकता है।
              यह उन सदस्यों के लिए उपयुक्त है जिनके पास जमा योजना नहीं है लेकिन उनके पास संपत्ति है।
            </p>
            <p>
              Security Loan allows members to pledge assets like jewellery, property documents, or other collateral to obtain a loan at competitive rates. Quick disbursal with flexible repayment options.
            </p>
            <div className="rate-badges">
              <span className="rate-badge-item">Gold / Jewellery</span>
              <span className="rate-badge-item">Property Documents</span>
              <span className="rate-badge-item featured-badge">Quick Disbursal</span>
            </div>
          </div>
          <div className="scheme-highlights">
            <h3>पात्रता / Eligibility</h3>
            <ul className="features-list">
              <li>✅ Active member of the society</li>
              <li>✅ Valid collateral/security asset</li>
              <li>✅ Valid KYC documents</li>
              <li>✅ Clear title of pledged asset</li>
              <li>✅ No existing loan default</li>
            </ul>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
              Apply for Loan
            </Link>
          </div>
        </div>
        <div className="scheme-table-wrapper" style={{ marginBottom: '30px' }}>
          <h3 className="table-title">Accepted Securities — स्वीकृत प्रतिभूतियां</h3>
          <div className="table-scroll">
            <table className="scheme-table">
              <thead>
                <tr>
                  <th>Security Type</th>
                  <th>प्रकार</th>
                  <th>Loan %</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Gold / Jewellery</td><td>सोना / आभूषण</td><td>Up to 75%</td><td>As per current market value</td></tr>
                <tr className="highlight-row"><td>Fixed Deposit</td><td>सावधि जमा</td><td>Up to 90%</td><td>Against own FD certificate</td></tr>
                <tr><td>Property Documents</td><td>संपत्ति दस्तावेज</td><td>Up to 60%</td><td>Subject to valuation & approval</td></tr>
                <tr className="highlight-row"><td>LIC Policy</td><td>LIC पॉलिसी</td><td>Up to 85%</td><td>Against surrender value</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="scheme-terms">
          <h3>नियम एवं शर्तें / Terms & Conditions</h3>
          <div className="terms-grid">
            <div className="term-item"><span className="term-icon">📌</span><p>प्रतिभूति मूल्यांकन संस्था द्वारा किया जाएगा।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>समय पर ऋण न चुकाने पर प्रतिभूति जब्त की जा सकती है।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>ब्याज दर कार्यकारिणी समिति द्वारा निर्धारित।</p></div>
            <div className="term-item"><span className="term-icon">📌</span><p>विस्तृत जानकारी कार्यालय से प्राप्त करें।</p></div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SecurityLoan;
