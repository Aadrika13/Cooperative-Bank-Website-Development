import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SchemePages.css';

const MonthlyDeposit = () => {
  // MIS plans matching request:
  // 12 months (8.5%), 24 months (9.0%), 36 months (9.5%), 48 months (10.0%), 72 months (12.0%)
  const misTenures = [
    { months: 12, years: '1 वर्ष (12 माह)', rate: 8.5, seniorRate: 9.0 },
    { months: 24, years: '2 वर्ष (24 माह)', rate: 9.0, seniorRate: 9.5 },
    { months: 36, years: '3 वर्ष (36 माह)', rate: 9.5, seniorRate: 10.0 },
    { months: 48, years: '4 वर्ष (48 माह)', rate: 10.0, seniorRate: 10.5 },
    { months: 72, years: '6 वर्ष (72 माह)', rate: 12.0, seniorRate: 12.5 },
  ];

  const [activeTenureIdx, setActiveTenureIdx] = useState(4); // Default to 72 months (12%)
  const currentPlan = misTenures[activeTenureIdx];

  const deposits = [10000, 20000, 30000, 40000, 50000, 100000];

  const calculateIncome = (p, annualRate) => {
    const yearly = (p * annualRate) / 100;
    const monthly = yearly / 12;
    const quarterly = yearly / 4;
    const halfyearly = yearly / 2;
    return {
      monthly: Math.round(monthly).toLocaleString('en-IN'),
      quarterly: Math.round(quarterly).toLocaleString('en-IN'),
      halfyearly: Math.round(halfyearly).toLocaleString('en-IN'),
      yearly: Math.round(yearly).toLocaleString('en-IN'),
    };
  };

  return (
    <div>
      <div className="page-banner">
        <h1>Monthly Income Scheme (MIS)</h1>
        <p className="hindi-title">मासिक आय योजना (एम.आई.एस.)</p>
        <p className="breadcrumb">Home → Schemes → <span>Monthly Income Scheme</span></p>
      </div>

      <section className="scheme-section">
        <div className="container">
          <div className="scheme-intro">
            <div className="scheme-intro-text">
              <h2>मासिक आय योजना (Monthly Income Scheme - MIS)</h2>
              <p className="scheme-tagline">Invest Once — Earn Regular Guaranteed Periodic Income</p>
              <p>
                एम.आई.एस. योजना में एकमुश्त जमा राशि पर प्रत्येक माह, तिमाही, छःमाही अथवा वार्षिक रूप से नियमित आय प्राप्त करें।
                12 माह से 72 माह (6 वर्ष) की अवधि में 8.5% से 12.0% तक वार्षिक ब्याज का लाभ लें।
              </p>
              <div className="rate-badges">
                <span className="rate-badge-item">12 Months — 8.5%</span>
                <span className="rate-badge-item">24 Months — 9.0%</span>
                <span className="rate-badge-item">36 Months — 9.5%</span>
                <span className="rate-badge-item">48 Months — 10.0%</span>
                <span className="rate-badge-item featured-badge">72 Months — 12.0%</span>
              </div>
              <div className="senior-citizen-notice">
                ⭐ <strong>वरिष्ठ नागरिक विशेष लाभ:</strong> सीनियर सिटीजन को प्रत्येक अवधि पर <strong>0.5% अतिरिक्त वार्षिक ब्याज</strong> दिया जाएगा।
              </div>
            </div>
            <div className="scheme-highlights">
              <h3>मुख्य विशेषताएं / Key Features</h3>
              <ul className="features-list">
                <li>✅ अवधियाँ: 12, 24, 36, 48 एवं 72 माह</li>
                <li>✅ आकर्षक ब्याज दर: 8.5% से 12.0% वार्षिक</li>
                <li>✅ सीनियर सिटीजन को 0.5% अतिरिक्त ब्याज (Up to 12.5%)</li>
                <li>✅ नियमित मासिक / त्रैमासिक / छःमाही / वार्षिक भुगतान विकल्प</li>
                <li>✅ अवधि पूर्ण होने पर संपूर्ण मूलधन वापसी</li>
                <li>✅ न्यूनतम जमा राशि मात्र ₹10,000</li>
              </ul>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                Open MIS Account — आवेदन करें
              </Link>
            </div>
          </div>

          {/* MIS Tenure Tabs */}
          <div className="scheme-table-wrapper">
            <h3 className="table-title">एम.आई.एस. — मासिक आय चार्ट (MIS Monthly Income Chart)</h3>
            <p className="table-subtitle">Select tenure to see regular income payouts (in ₹)</p>
            <div className="fd-tabs">
              {misTenures.map((t, i) => (
                <button
                  key={i}
                  className={`fd-tab ${activeTenureIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveTenureIdx(i)}
                >
                  {t.years} @ {t.rate}%
                </button>
              ))}
            </div>

            <div className="fd-tab-info" style={{ marginBottom: '16px', color: 'var(--maroon)', fontWeight: '600', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <span>चयनित अवधि: <strong>{currentPlan.years}</strong> — सामान्य ब्याज दर: <strong>{currentPlan.rate}% वार्षिक</strong></span>
              <span style={{ color: 'var(--gold)' }}>👴 सीनियर सिटीजन ब्याज दर: <strong>{currentPlan.seniorRate}% वार्षिक (+0.5%)</strong></span>
            </div>

            <div className="table-scroll">
              <table className="scheme-table">
                <thead>
                  <tr>
                    <th>जमा राशि<br/><small>Deposit (₹)</small></th>
                    <th>मासिक आय<br/><small>Monthly (₹)</small></th>
                    <th>त्रैमासिक आय<br/><small>Quarterly (₹)</small></th>
                    <th>छःमाही आय<br/><small>Half-Yearly (₹)</small></th>
                    <th>वार्षिक आय<br/><small>Yearly (₹)</small></th>
                    <th>अवधि पश्चात् मूलधन<br/><small>Principal Return (₹)</small></th>
                  </tr>
                </thead>
                <tbody>
                  {deposits.map((amt, idx) => {
                    const inc = calculateIncome(amt, currentPlan.rate);
                    return (
                      <tr key={idx} className={idx % 2 === 0 ? '' : 'highlight-row'}>
                        <td><strong>₹{amt.toLocaleString('en-IN')}</strong></td>
                        <td>₹{inc.monthly}</td>
                        <td>₹{inc.quarterly}</td>
                        <td>₹{inc.halfyearly}</td>
                        <td>₹{inc.yearly}</td>
                        <td><strong>₹{amt.toLocaleString('en-IN')}</strong></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Quick comparison of monthly payout across all 5 tenures */}
            <div style={{ marginTop: '24px' }}>
              <h4 style={{ color: 'var(--maroon)', fontSize: '1rem', marginBottom: '10px' }}>
                मासिक आय तुलना तालिका (सभी अवधियों के लिए ₹1,00,000 जमा पर):
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                {misTenures.map((t, idx) => {
                  const mInc = Math.round((100000 * t.rate) / 100 / 12);
                  const mIncSr = Math.round((100000 * t.seniorRate) / 100 / 12);
                  return (
                    <div key={idx} style={{ background: 'var(--beige)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(123,28,46,0.1)', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '600' }}>{t.months} माह ({t.rate}%)</div>
                      <div style={{ fontSize: '1.15rem', color: 'var(--maroon)', fontWeight: '800', marginTop: '4px' }}>₹{mInc}/माह</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: '600' }}>Sr: ₹{mIncSr}/माह</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="how-it-works">
            <h3>How MIS Works — कैसे काम करता है?</h3>
            <div className="hiw-steps">
              <div className="hiw-step">
                <div className="step-num">1</div>
                <h4>Deposit Once</h4>
                <p>Invest a lump sum amount (minimum ₹10,000) for your chosen tenure (12 to 72 months).</p>
              </div>
              <div className="hiw-arrow">→</div>
              <div className="hiw-step">
                <div className="step-num">2</div>
                <h4>Earn Regular Income</h4>
                <p>Receive fixed periodic interest credited monthly, quarterly, half-yearly, or annually.</p>
              </div>
              <div className="hiw-arrow">→</div>
              <div className="hiw-step">
                <div className="step-num">3</div>
                <h4>Get Capital Back</h4>
                <p>Upon maturity of your chosen tenure, receive your complete original principal amount.</p>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="scheme-terms">
            <h3>नियम एवं शर्तें / Terms & Conditions</h3>
            <div className="terms-grid">
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>न्यूनतम जमा राशि ₹10,000 है। / Minimum deposit is ₹10,000.</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>सीनियर सिटीजन (60 वर्ष एवं अधिक) को सभी अवधियों में 0.5% अतिरिक्त ब्याज देय होगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>चयनित अवधि पूर्ण होने पर संपूर्ण मूलधन सुरक्षित वापस किया जाएगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>समय पूर्व बंद करने पर संस्था नियमानुसार आवश्यक समायोजन व प्रपत्र व्यय लागू होंगे।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlyDeposit;
