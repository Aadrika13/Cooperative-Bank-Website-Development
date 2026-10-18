import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SchemePages.css';

const RecurringDeposit = () => {
  const [activeTab, setActiveTab] = useState(0);

  const rdPlans = [
    {
      year: '1 Year', hindi: '1 वर्ष', rate: '8.0%', seniorRate: '8.5%',
      data: [
        { deposit: '500', monthly: '1,500', quarterly: '3,000', halfyearly: '6,000', maturity: '6,266' },
        { deposit: '1,000', monthly: '3,000', quarterly: '6,000', halfyearly: '12,000', maturity: '12,530' },
        { deposit: '1,500', monthly: '4,500', quarterly: '9,000', halfyearly: '18,000', maturity: '18,800' },
        { deposit: '2,000', monthly: '6,000', quarterly: '12,000', halfyearly: '24,000', maturity: '25,060' },
        { deposit: '3,000', monthly: '9,000', quarterly: '18,000', halfyearly: '36,000', maturity: '37,590' },
        { deposit: '5,000', monthly: '15,000', quarterly: '30,000', halfyearly: '60,000', maturity: '62,665' },
        { deposit: '10,000', monthly: '30,000', quarterly: '60,000', halfyearly: '1,20,000', maturity: '1,25,330' },
      ]
    },
    {
      year: '2 Years', hindi: '2 वर्ष', rate: '8.5%', seniorRate: '9.0%',
      data: [
        { deposit: '500', monthly: '1,500', quarterly: '3,000', halfyearly: '6,000', maturity: '13,123' },
        { deposit: '1,000', monthly: '3,000', quarterly: '6,000', halfyearly: '12,000', maturity: '26,245' },
        { deposit: '1,500', monthly: '4,500', quarterly: '9,000', halfyearly: '18,000', maturity: '39,368' },
        { deposit: '2,000', monthly: '6,000', quarterly: '12,000', halfyearly: '24,000', maturity: '52,490' },
        { deposit: '3,000', monthly: '9,000', quarterly: '18,000', halfyearly: '36,000', maturity: '78,735' },
        { deposit: '5,000', monthly: '15,000', quarterly: '30,000', halfyearly: '60,000', maturity: '1,31,228' },
        { deposit: '10,000', monthly: '30,000', quarterly: '60,000', halfyearly: '1,20,000', maturity: '2,62,450' },
      ]
    },
    {
      year: '3 Years', hindi: '3 वर्ष', rate: '9.0%', seniorRate: '9.5%',
      data: [
        { deposit: '500', monthly: '1,500', quarterly: '3,000', halfyearly: '6,000', maturity: '20,731' },
        { deposit: '1,000', monthly: '3,000', quarterly: '6,000', halfyearly: '12,000', maturity: '41,461' },
        { deposit: '1,500', monthly: '4,500', quarterly: '9,000', halfyearly: '18,000', maturity: '62,192' },
        { deposit: '2,000', monthly: '6,000', quarterly: '12,000', halfyearly: '24,000', maturity: '82,923' },
        { deposit: '3,000', monthly: '9,000', quarterly: '18,000', halfyearly: '36,000', maturity: '1,24,384' },
        { deposit: '5,000', monthly: '15,000', quarterly: '30,000', halfyearly: '60,000', maturity: '2,07,307' },
        { deposit: '10,000', monthly: '30,000', quarterly: '60,000', halfyearly: '1,20,000', maturity: '4,14,614' },
      ]
    },
    {
      year: '4 Years', hindi: '4 वर्ष', rate: '9.5%', seniorRate: '10.0%',
      data: [
        { deposit: '500', monthly: '1,500', quarterly: '3,000', halfyearly: '6,000', maturity: '29,289' },
        { deposit: '1,000', monthly: '3,000', quarterly: '6,000', halfyearly: '12,000', maturity: '58,580' },
        { deposit: '1,500', monthly: '4,500', quarterly: '9,000', halfyearly: '18,000', maturity: '87,869' },
        { deposit: '2,000', monthly: '6,000', quarterly: '12,000', halfyearly: '24,000', maturity: '1,17,156' },
        { deposit: '3,000', monthly: '9,000', quarterly: '18,000', halfyearly: '36,000', maturity: '1,75,735' },
        { deposit: '5,000', monthly: '15,000', quarterly: '30,000', halfyearly: '60,000', maturity: '2,92,889' },
        { deposit: '10,000', monthly: '30,000', quarterly: '60,000', halfyearly: '1,20,000', maturity: '5,85,778' },
      ]
    },
    {
      year: '5 Years', hindi: '5 वर्ष', rate: '10.5%', seniorRate: '11.0%',
      data: [
        { deposit: '500', monthly: '1,500', quarterly: '3,000', halfyearly: '6,000', maturity: '39,041' },
        { deposit: '1,000', monthly: '3,000', quarterly: '6,000', halfyearly: '12,000', maturity: '78,082' },
        { deposit: '1,500', monthly: '4,500', quarterly: '9,000', halfyearly: '18,000', maturity: '1,17,124' },
        { deposit: '2,000', monthly: '6,000', quarterly: '12,000', halfyearly: '24,000', maturity: '1,56,165' },
        { deposit: '3,000', monthly: '9,000', quarterly: '18,000', halfyearly: '36,000', maturity: '2,34,247' },
        { deposit: '5,000', monthly: '15,000', quarterly: '30,000', halfyearly: '60,000', maturity: '3,90,412' },
        { deposit: '10,000', monthly: '30,000', quarterly: '60,000', halfyearly: '1,20,000', maturity: '7,80,824' },
      ]
    },
    {
      year: '6 Years', hindi: '6 वर्ष', rate: '10.5%', seniorRate: '11.0%',
      data: [
        { deposit: '500', monthly: '1,500', quarterly: '3,000', halfyearly: '6,000', maturity: '50,292' },
        { deposit: '1,000', monthly: '3,000', quarterly: '6,000', halfyearly: '12,000', maturity: '1,00,584' },
        { deposit: '1,500', monthly: '4,500', quarterly: '9,000', halfyearly: '18,000', maturity: '1,50,875' },
        { deposit: '2,000', monthly: '6,000', quarterly: '12,000', halfyearly: '24,000', maturity: '2,01,167' },
        { deposit: '3,000', monthly: '9,000', quarterly: '18,000', halfyearly: '36,000', maturity: '3,02,918' },
        { deposit: '5,000', monthly: '15,000', quarterly: '30,000', halfyearly: '60,000', maturity: '5,02,918' },
        { deposit: '10,000', monthly: '30,000', quarterly: '60,000', halfyearly: '1,20,000', maturity: '10,05,836' },
      ]
    },
  ];

  const plan = rdPlans[activeTab];

  return (
    <div>
      <div className="page-banner">
        <h1>Recurring Deposit (RD) Scheme</h1>
        <p className="hindi-title">मासिक आवर्ती जमा योजना (आर.डी.)</p>
        <p className="breadcrumb">Home → Schemes → <span>Recurring Deposit</span></p>
      </div>

      <section className="scheme-section">
        <div className="container">
          <div className="scheme-intro">
            <div className="scheme-intro-text">
              <h2>मासिक आवर्ती जमा योजना (Recurring Deposit)</h2>
              <p className="scheme-tagline">Disciplined Monthly Savings — High Guaranteed Returns</p>
              <p>
                मासिक आवर्ती जमा (RD) योजना में हर महीने एक निश्चित राशि जमा करें और परिपक्वता पर आकर्षक ब्याज सहित बड़ी पूंजी प्राप्त करें।
                1 वर्ष से 6 वर्ष तक की अवधि में 8% से 10.5% तक वार्षिक ब्याज प्राप्त करें।
              </p>
              <div className="rate-badges">
                <span className="rate-badge-item">1 Yr — 8.0%</span>
                <span className="rate-badge-item">2 Yrs — 8.5%</span>
                <span className="rate-badge-item">3 Yrs — 9.0%</span>
                <span className="rate-badge-item">4 Yrs — 9.5%</span>
                <span className="rate-badge-item featured-badge">5–6 Yrs — 10.5%</span>
              </div>
              <div className="senior-citizen-notice">
                ⭐ <strong>वरिष्ठ नागरिक विशेष लाभ:</strong> सीनियर सिटीजन को प्रत्येक योजना पर <strong>0.5% अतिरिक्त वार्षिक ब्याज</strong> दिया जाएगा।
              </div>
            </div>
            <div className="scheme-highlights">
              <h3>मुख्य विशेषताएं / Key Features</h3>
              <ul className="features-list">
                <li>✅ Monthly deposit starts from just ₹500</li>
                <li>✅ Flexible terms: 1 to 6 years</li>
                <li>✅ Interest up to 10.5% p.a. (11.0% for Senior Citizens)</li>
                <li>✅ Disciplined monthly saving habit</li>
                <li>✅ Loan facility against RD balance</li>
                <li>✅ Guaranteed payout at maturity</li>
              </ul>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                Apply Now — आवेदन करें
              </Link>
            </div>
          </div>

          {/* RD Tab Selector */}
          <div className="scheme-table-wrapper">
            <h3 className="table-title">मासिक आवर्ती जमा (RD) — मेच्योरिटी चार्ट</h3>
            <p className="table-subtitle">Select a plan to view the recurring deposit maturity chart (in ₹)</p>
            <div className="fd-tabs">
              {rdPlans.map((p, i) => (
                <button key={i} className={`fd-tab ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                  {p.year} @ {p.rate}
                </button>
              ))}
            </div>
            <div className="fd-tab-info" style={{ marginBottom: '16px', color: 'var(--maroon)', fontWeight: '600', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <span>{plan.hindi} — {plan.rate} वार्षिक ब्याज (Regular)</span>
              <span style={{ color: 'var(--gold)' }}>👴 Senior Citizen: {plan.seniorRate} वार्षिक ब्याज (+0.5%)</span>
            </div>
            <div className="table-scroll">
              <table className="scheme-table">
                <thead>
                  <tr>
                    <th>मासिक जमा<br/><small>Monthly (₹)</small></th>
                    <th>मासिक कुल<br/><small>Total Monthly</small></th>
                    <th>त्रैमासिक कुल<br/><small>Total Quarterly</small></th>
                    <th>छःमाही कुल<br/><small>Half-Yearly Total</small></th>
                    <th>परिपक्वता राशि<br/><small>Maturity (₹)</small></th>
                  </tr>
                </thead>
                <tbody>
                  {plan.data.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'highlight-row'}>
                      <td><strong>₹{row.deposit}</strong></td>
                      <td>₹{row.monthly}</td>
                      <td>₹{row.quarterly}</td>
                      <td>₹{row.halfyearly}</td>
                      <td><strong>₹{row.maturity}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Terms */}
          <div className="scheme-terms">
            <h3>नियम एवं शर्तें / Terms & Conditions</h3>
            <div className="terms-grid">
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>न्यूनतम मासिक जमा ₹500 से प्रारंभ। / Minimum monthly deposit starts from ₹500.</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>आवर्ती बचत योजनाओं में किस्तों में चूक करने पर सदस्य खातेदार को प्रति किस्त पर लेट फीस देनी होगी।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>सीनियर सिटीजन (60 वर्ष एवं अधिक) को 0.5% अतिरिक्त वार्षिक ब्याज का लाभ।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>12 माह तक की जमा योजनाओं का समय से पहले भुगतान नहीं किया जाएगा।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecurringDeposit;
