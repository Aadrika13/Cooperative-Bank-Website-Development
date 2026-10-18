import { Link } from 'react-router-dom';
import '../SchemePages.css';

const SavingAccount = () => {
  const features = [
    { icon: '💰', title: '5.00% Annual Interest', hindi: '5% वार्षिक ब्याज दर', desc: 'बचत खाते पर 5 प्रतिशत वार्षिक ब्याज देय। (सीनियर सिटीजन को 5.50% वार्षिक ब्याज देय)।' },
    { icon: '🔒', title: 'Safe Savings', hindi: 'सुरक्षित बचत', desc: 'Your deposits are fully secure under a government-registered cooperative society.' },
    { icon: '🔓', title: 'Easy Withdrawal', hindi: 'आसान निकासी', desc: 'Access your money anytime during office hours with easy withdrawal.' },
    { icon: '📋', title: 'Passbook Facility', hindi: 'पासबुक सुविधा', desc: 'Maintain full records with a physical passbook for all transactions.' },
    { icon: '👩', title: 'Women First', hindi: 'महिला प्राथमिकता', desc: 'Designed specifically for women members of the cooperative society.' },
    { icon: '🏛️', title: 'Govt. Registered', hindi: 'सरकारी मान्यता', desc: 'Registered under M.P. Cooperative Societies Act 1960. Fully compliant.' },
  ];

  const steps = [
    { step: '1', title: 'Become a Member', hindi: 'सदस्य बनें', desc: 'First become a member of Mahila Kalyan Samiti by filling the membership form.' },
    { step: '2', title: 'Submit Documents', hindi: 'दस्तावेज जमा करें', desc: 'Provide ID proof, address proof, 2 passport photos, and membership fee.' },
    { step: '3', title: 'Open Account', hindi: 'खाता खोलें', desc: 'Your saving account will be opened with a passbook within 1 working day.' },
    { step: '4', title: 'Start Saving', hindi: 'बचत शुरू करें', desc: 'Begin depositing and start earning interest on your growing balance.' },
  ];

  return (
    <div>
      <div className="page-banner">
        <h1>Saving Account</h1>
        <p className="hindi-title">बचत खाता</p>
        <p className="breadcrumb">Home → Schemes → <span>Saving Account</span></p>
      </div>

      <section className="scheme-section">
        <div className="container">
          <div className="scheme-intro">
            <div className="scheme-intro-text">
              <h2>बचत खाता (Saving Account) — 5% वार्षिक ब्याज</h2>
              <p className="scheme-tagline">बचत खाते पर 5 प्रतिशत वार्षिक ब्याज देय!</p>
              <p>
                महिला कल्याण बचत साख सहकारी समिति में बचत खाता खोलें और अपनी दैनिक बचत पर <strong>5% वार्षिक ब्याज</strong> प्राप्त करें।
                हमारी संस्था के सदस्यों के लिए सुरक्षित, सुलभ और विश्वसनीय बचत खाता सुविधा।
              </p>
              <div className="rate-badges">
                <span className="rate-badge-item featured-badge">5.0% Annual Interest</span>
                <span className="rate-badge-item">Passbook Facility</span>
                <span className="rate-badge-item">Members Only</span>
              </div>
              <div className="senior-citizen-notice">
                ⭐ <strong>सीनियर सिटीजन विशेष लाभ:</strong> वरिष्ठ नागरिकों को बचत खाते पर भी <strong>0.5% अतिरिक्त ब्याज (कुल 5.50% वार्षिक)</strong> प्रदान किया जाता है।
              </div>
            </div>
            <div className="scheme-highlights">
              <h3>खाता खोलने के लिए / To Open Account</h3>
              <ul className="features-list">
                <li>✅ Mahila Kalyan Membership (mandatory)</li>
                <li>✅ Aadhaar Card / Voter ID (Identity proof)</li>
                <li>✅ Address proof document</li>
                <li>✅ 2 Passport-size photographs</li>
                <li>✅ Nominee details</li>
                <li>✅ Initial deposit amount</li>
              </ul>
              <Link to="/membership" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                Become a Member First
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ textAlign: 'center', color: 'var(--maroon)', fontSize: '1.4rem', marginBottom: '24px' }}>
              Account Benefits — खाते के लाभ
            </h3>
            <div className="saving-features-grid">
              {features.map((f, i) => (
                <div key={i} className="sf-card">
                  <span className="sf-icon">{f.icon}</span>
                  <h4>{f.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '6px' }}>{f.hindi}</p>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Open */}
          <div className="how-it-works" style={{ marginBottom: '40px' }}>
            <h3>How to Open — खाता कैसे खोलें?</h3>
            <div className="hiw-steps">
              {steps.map((s, i) => (
                <div key={i} className="hiw-step">
                  <div className="step-num">{s.step}</div>
                  <h4>{s.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '4px' }}>{s.hindi}</p>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="scheme-terms">
            <h3>नियम एवं शर्तें / Terms & Conditions</h3>
            <div className="terms-grid">
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>बचत खाता केवल संस्था के सदस्यों के लिए उपलब्ध है।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>बचत खाते पर 5 प्रतिशत वार्षिक ब्याज देय होगा (सीनियर सिटीजन 5.50%)।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>सभी लेन-देन पासबुक में विधिवत दर्ज किए जाएंगे।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>कार्यालय समय (सोमवार से शनिवार 10 AM - 5 PM) में ही निकासी संभव है।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavingAccount;
