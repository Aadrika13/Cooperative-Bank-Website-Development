import { Link } from 'react-router-dom';
import './Membership.css';

const Membership = () => {
  const benefits = [
    { icon: '📊', title: 'Access All Schemes', hindi: 'सभी योजनाओं में भागीदारी', desc: 'Open saving accounts, daily/monthly/fixed deposits, and MIS accounts.' },
    { icon: '💳', title: 'Loan Eligibility', hindi: 'ऋण पात्रता', desc: 'Become eligible for deposit loans, personal loans, and security loans.' },
    { icon: '💰', title: 'Higher Returns', hindi: 'उच्च रिटर्न', desc: 'Earn up to 12% interest per annum — far better than regular banks.' },
    { icon: '🗳️', title: 'Voting Rights', hindi: 'मतदान अधिकार', desc: 'Participate in annual general meetings and vote on key decisions.' },
    { icon: '🛡️', title: 'Financial Security', hindi: 'वित्तीय सुरक्षा', desc: 'Your funds are safe under a government-regulated cooperative society.' },
    { icon: '👩‍👧', title: 'Women Community', hindi: 'महिला समुदाय', desc: 'Join a network of empowered women working towards financial freedom.' },
  ];

  const steps = [
    { num: '01', title: 'Download Form', hindi: 'फॉर्म लें', desc: 'Collect the membership application form from our office or download online.' },
    { num: '02', title: 'Fill & Submit', hindi: 'भरें व जमा करें', desc: 'Fill the form with correct details and submit with required documents.' },
    { num: '03', title: 'Pay Membership Fee', hindi: 'शुल्क जमा करें', desc: 'Pay the membership fee (share amount) as per society norms.' },
    { num: '04', title: 'Approval', hindi: 'अनुमोदन', desc: 'The management committee reviews and approves your membership.' },
    { num: '05', title: 'Welcome!', hindi: 'स्वागत है!', desc: 'Receive your membership card & passbook. Start your financial journey!' },
  ];

  return (
    <div>
      <div className="page-banner">
        <h1>Membership</h1>
        <p className="hindi-title">सदस्यता</p>
        <p className="breadcrumb">Home → <span>Membership</span></p>
      </div>

      <section className="membership-hero">
        <div className="container">
          <div className="mem-hero-grid">
            <div>
              <div className="mem-badge">🌟 संस्था के सदस्यों के लिए विशेष सुविधाएं</div>
              <h2>Join Our Cooperative Society</h2>
              <p className="mem-subtitle">सदस्य बनें और अनेक वित्तीय सुविधाओं का लाभ उठाएं</p>
              <p>
                Becoming a member of Mahila Kalyan Bachat Sakh Sahakari Samiti Maryadit opens the door to all our financial products and services. Members get exclusive access to high-interest deposit schemes, affordable loans, and voting rights in the society.
              </p>
              <div className="mem-cta-group">
                <Link to="/contact" className="btn-primary">Apply for Membership</Link>
                <a href="tel:07514526033" className="btn-outline">📞 Call Us</a>
              </div>
            </div>
            <div className="mem-info-card">
              <h3>Membership Details</h3>
              <div className="mem-detail-list">
                <div className="mem-detail-item">
                  <span>👥</span>
                  <div><strong>Eligibility</strong><p>Women residents of Gwalior district</p></div>
                </div>
                <div className="mem-detail-item">
                  <span>💰</span>
                  <div><strong>Share Amount</strong><p>As per society norms (contact office)</p></div>
                </div>
                <div className="mem-detail-item">
                  <span>📋</span>
                  <div><strong>Documents Required</strong><p>Aadhaar, Photo, Address Proof</p></div>
                </div>
                <div className="mem-detail-item">
                  <span>⏱️</span>
                  <div><strong>Processing Time</strong><p>3-7 working days</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Member Benefits</h2>
            <div className="hindi-subtitle">सदस्यों को मिलने वाले लाभ</div>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <span className="benefit-icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p className="benefit-hindi">{b.hindi}</p>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="steps-section">
        <div className="container">
          <div className="section-title">
            <h2>How to Become a Member</h2>
            <div className="hindi-subtitle">सदस्यता कैसे लें?</div>
          </div>
          <div className="steps-timeline">
            {steps.map((s, i) => (
              <div key={i} className={`step-item ${i % 2 === 0 ? 'step-left' : 'step-right'}`}>
                <div className="step-content">
                  <div className="step-number">{s.num}</div>
                  <h3>{s.title} <span>{s.hindi}</span></h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="docs-section">
        <div className="container">
          <div className="section-title">
            <h2>Required Documents</h2>
            <div className="hindi-subtitle">आवश्यक दस्तावेज</div>
          </div>
          <div className="docs-grid">
            {[
              { icon: '🪪', doc: 'Aadhaar Card', hindi: 'आधार कार्ड', note: 'Original + Photocopy' },
              { icon: '🗳️', doc: 'Voter ID', hindi: 'मतदाता पहचान पत्र', note: 'Or any govt. ID' },
              { icon: '📷', doc: '2 Photographs', hindi: '2 पासपोर्ट फोटो', note: 'Recent passport size' },
              { icon: '🏠', doc: 'Address Proof', hindi: 'पते का प्रमाण', note: 'Any valid document' },
              { icon: '📞', doc: 'Mobile Number', hindi: 'मोबाइल नंबर', note: 'Active number required' },
              { icon: '✍️', doc: 'Filled Form', hindi: 'भरा हुआ फॉर्म', note: 'From office / office visit' },
            ].map((d, i) => (
              <div key={i} className="doc-card">
                <span className="doc-icon">{d.icon}</span>
                <h4>{d.doc}</h4>
                <p className="doc-hindi">{d.hindi}</p>
                <span className="doc-note">{d.note}</span>
              </div>
            ))}
          </div>
          <div className="docs-cta">
            <p>सदस्यता संबंधी किसी भी जानकारी के लिए कार्यालय में संपर्क करें</p>
            <Link to="/contact" className="btn-primary">Contact Office — संपर्क करें</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
