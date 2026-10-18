import { Link } from 'react-router-dom';
import '../SchemePages.css';

const DailyDeposit = () => {
  const tableData = [
    { daily: 100, d180: '18,267', d365: '38,092', d500: '53,393', d1450: '1,79,904' },
    { daily: 200, d180: '36,535', d365: '76,184', d500: '1,06,786', d1450: '3,59,808' },
    { daily: 300, d180: '54,802', d365: '1,14,276', d500: '1,60,178', d1450: '5,39,712' },
    { daily: 400, d180: '73,070', d365: '1,52,368', d500: '2,13,571', d1450: '7,19,616' },
    { daily: 500, d180: '91,337', d365: '1,90,460', d500: '2,66,963', d1450: '8,99,519' },
    { daily: 1000, d180: '1,82,675', d365: '3,80,919', d500: '5,33,928', d1450: '17,99,039' },
    { daily: 2000, d180: '3,65,349', d365: '7,61,838', d500: '10,67,856', d1450: '35,98,078' },
    { daily: 5000, d180: '9,13,373', d365: '19,04,595', d500: '26,69,639', d1450: '89,95,194' },
  ];

  return (
    <div>
      <div className="page-banner">
        <h1>Daily Recurring Deposit</h1>
        <p className="hindi-title">दैनिक आवर्ती जमा योजना</p>
        <p className="breadcrumb">Home → Schemes → <span>Daily Deposit</span></p>
      </div>

      <section className="scheme-section">
        <div className="container">
          <div className="scheme-intro">
            <div className="scheme-intro-text">
              <h2>दैनिक आवर्ती जमा योजना</h2>
              <p className="scheme-tagline">Daily Recurring Deposit Scheme — Save a little every day, grow a lot!</p>
              <p>
                हमारी दैनिक आवर्ती जमा योजना आपको रोजाना छोटी-छोटी बचत करने और उच्च ब्याज दर से लाभ उठाने का अवसर देती है।
                180 दिनों से लेकर 1450 दिनों तक की अवधि में 6% से 10.5% तक ब्याज पाएं।
              </p>
              <p>
                This scheme allows members to deposit a fixed daily amount and earn compound interest ranging from <strong>6% to 10.5%</strong> per annum, depending on the chosen duration.
              </p>
              <div className="rate-badges">
                <span className="rate-badge-item">180 Days — 6%</span>
                <span className="rate-badge-item">365 Days — 8.5%</span>
                <span className="rate-badge-item featured-badge">500 Days — 9.5%</span>
                <span className="rate-badge-item featured-badge">1450 Days — 10.5%</span>
              </div>
              <div className="senior-citizen-notice">
                ⭐ <strong>सीनियर सिटीजन विशेष लाभ:</strong> सीनियर सिटीजन को प्रत्येक योजना पर <strong>0.5% अतिरिक्त वार्षिक ब्याज</strong> दिया जाएगा।
              </div>
            </div>
            <div className="scheme-highlights">
              <h3>मुख्य विशेषताएं / Key Features</h3>
              <ul className="features-list">
                <li>✅ Daily deposit starting from just ₹100</li>
                <li>✅ Interest up to 10.5% per annum (11.0% for Senior Citizens)</li>
                <li>✅ 4 flexible duration options (180, 365, 500, 1450 days)</li>
                <li>✅ Safe & government-registered scheme</li>
                <li>✅ Doorstep collection agent facility available</li>
                <li>✅ Maturity amount guaranteed</li>
              </ul>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                Apply Now — आवेदन करें
              </Link>
            </div>
          </div>

          {/* Main Table */}
          <div className="scheme-table-wrapper">
            <h3 className="table-title">दैनिक आवर्ती जमा योजना — मेच्योरिटी चार्ट</h3>
            <p className="table-subtitle">Daily Deposit Maturity Amount Chart (in ₹)</p>
            <div className="table-scroll">
              <table className="scheme-table">
                <thead>
                  <tr>
                    <th rowSpan="2">दैनिक जमा<br/><small>Daily (₹)</small></th>
                    <th colSpan="4">मेच्योरिटी राशि / Maturity Amount (₹)</th>
                  </tr>
                  <tr>
                    <th>180 दिन<br/><small>6% p.a. (Sr: 6.5%)</small></th>
                    <th>365 दिन<br/><small>8.5% p.a. (Sr: 9.0%)</small></th>
                    <th>500 दिन<br/><small>9.5% p.a. (Sr: 10.0%)</small></th>
                    <th>1450 दिन<br/><small>10.5% p.a. (Sr: 11.0%)</small></th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'highlight-row'}>
                      <td><strong>₹{row.daily}</strong></td>
                      <td>₹{row.d180}</td>
                      <td>₹{row.d365}</td>
                      <td>₹{row.d500}</td>
                      <td><strong>₹{row.d1450}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Terms from Pamphlet */}
          <div className="scheme-terms">
            <h3>नियम एवं शर्ते (जमाओं के लिए) / Terms & Conditions</h3>
            <div className="terms-grid">
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>परिपक्वता अवधि पूर्ण होने के पश्चात् ही कोई ब्याज अथवा अन्य लाभ देय होगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>योजना की ब्याज दरों एवं शर्तों में परिवर्तन करने का अधिकार महिला कल्याण बचत साख सहकारी समिति मर्यादित, ग्वालियर को होगा। सभी प्रकार के कार्यक्षेत्र में समिति का निर्णय अंतिम निर्णय होगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>समय पूर्व भुगतान पर — "यदि उपहार/एडवांस/ऋण दिया गया है तो उपहार / एडवांस / ऋण की कीमत मय .........% ब्याज वार्षिक, मासिक चक्रवृद्धि की दर से वसूल की जायेगी।"</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>12 माह तक की जमा योजनाओं का समय से पहले भुगतान नहीं किया जायेगा एवं इससे अधिक समय वाली जमा योजनाओं का समय से पहले भुगतान करने पर संस्था द्वारा केवल साधारण ब्याज देय होगा तथा प्रपत्र खर्चा काट लिया जायेगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>3 वर्ष के लिए खोले गये खाते 24 माह के पूर्व भुगतान नहीं किया जायेगा। 24 माह बाद संस्था द्वारा साधारण ब्याज ही देय होगा तथा प्रपत्र खर्चा काट लिया जायेगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>5 वर्ष एवं अधिक समय के लिए खोले गये सावधि एवं आवर्ती खाते 3 वर्ष के पूर्व भुगतान नहीं किया जायेगा एवं 3 वर्ष पश्चात् संस्था द्वारा साधारण ब्याज ही देय होगा तथा प्रपत्र खर्चा काट लिया जायेगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>आवर्ती बचत योजनाओं में किस्तों में चूक करने पर सदस्य खातेदार को प्रति किस्त पर लेट फीस देनी होगी।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>संस्था के स्थायी सदस्यों की जमाओं पर ब्याज पर टीडीएस कटौती नहीं होगी लेकिन अस्थायी सदस्यों की जमाओं पर टीडीएस काट लिया जायेगा।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyDeposit;
