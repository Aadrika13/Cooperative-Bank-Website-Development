import { Link } from 'react-router-dom';
import '../SchemePages.css';

const FixedDeposit = () => {
  // Fixed Deposit scheme matching screenshot 2:
  // Periods: 0.5 वर्ष (4.50%), 1 वर्ष (8.50%), 2 वर्ष (9.00%), 3 वर्ष (9.50%), 4 वर्ष (10.00%), 5 वर्ष (10.50%), 6 वर्ष (11.00%), 11 वर्ष (13.00%)
  const fdData = [
    { deposit: '10,000', m0_5: '10,225', y1: '10,850', y2: '11,881', y3: '13,129', y4: '14,641', y5: '16,474', y6: '18,704', y11: '38,359' },
    { deposit: '20,000', m0_5: '20,450', y1: '21,700', y2: '23,762', y3: '26,259', y4: '29,282', y5: '32,949', y6: '37,408', y11: '76,717' },
    { deposit: '30,000', m0_5: '30,675', y1: '32,550', y2: '35,643', y3: '39,388', y4: '43,923', y5: '49,423', y6: '56,112', y11: '1,15,076' },
    { deposit: '40,000', m0_5: '40,900', y1: '43,400', y2: '47,524', y3: '52,517', y4: '58,564', y5: '65,898', y6: '74,817', y11: '1,53,434' },
    { deposit: '50,000', m0_5: '51,125', y1: '54,250', y2: '59,405', y3: '65,647', y4: '73,205', y5: '82,372', y6: '93,520', y11: '1,91,793' },
    { deposit: '1,00,000', m0_5: '1,02,250', y1: '1,08,500', y2: '1,18,810', y3: '1,31,293', y4: '1,46,410', y5: '1,64,745', y6: '1,87,041', y11: '3,83,586' },
  ];

  const ratesOverview = [
    { tenure: '0.5 वर्ष (6 माह)', rate: '4.50%', senior: '5.00%' },
    { tenure: '1 वर्ष', rate: '8.50%', senior: '9.00%' },
    { tenure: '2 वर्ष', rate: '9.00%', senior: '9.50%' },
    { tenure: '3 वर्ष', rate: '9.50%', senior: '10.00%' },
    { tenure: '4 वर्ष', rate: '10.00%', senior: '10.50%' },
    { tenure: '5 वर्ष', rate: '10.50%', senior: '11.00%' },
    { tenure: '6 वर्ष', rate: '11.00%', senior: '11.50%' },
    { tenure: '11 वर्ष', rate: '13.00%', senior: '13.50%' },
  ];

  return (
    <div>
      <div className="page-banner">
        <h1>Fixed Deposit (FD) Scheme</h1>
        <p className="hindi-title">सावधि जमा योजना</p>
        <p className="breadcrumb">Home → Schemes → <span>Fixed Deposit</span></p>
      </div>

      <section className="scheme-section">
        <div className="container">
          <div className="scheme-intro">
            <div className="scheme-intro-text">
              <h2>सावधि जमा (Fixed Deposit) योजना</h2>
              <p className="scheme-tagline">Safe, Secure & High Returns — Minimum Deposit ₹10,000</p>
              <p>
                सावधि जमा योजना में एकमुश्त राशि निश्चित अवधि के लिए सुरक्षित जमा करें और अधिकतम <strong>13% वार्षिक ब्याज</strong> प्राप्त करें।
                0.5 वर्ष से लेकर 11 वर्ष तक की विभिन्न अवधियों के साथ अपनी बचत को तेजी से बढ़ाएं।
              </p>
              <div className="rate-badges">
                <span className="rate-badge-item">0.5 Yr — 4.50%</span>
                <span className="rate-badge-item">1 Yr — 8.50%</span>
                <span className="rate-badge-item">2 Yrs — 9.00%</span>
                <span className="rate-badge-item">3 Yrs — 9.50%</span>
                <span className="rate-badge-item">4 Yrs — 10.00%</span>
                <span className="rate-badge-item">5 Yrs — 10.50%</span>
                <span className="rate-badge-item">6 Yrs — 11.00%</span>
                <span className="rate-badge-item featured-badge">11 Yrs — 13.00%</span>
              </div>
              <div className="senior-citizen-notice">
                ⭐ <strong>सीनियर सिटीजन विशेष लाभ:</strong> सीनियर सिटीजन को <strong>0.5 प्रतिशत ब्याज अतिरिक्त</strong> दिया जाएगा।
              </div>
            </div>
            <div className="scheme-highlights">
              <h3>मुख्य विशेषताएं / Key Features</h3>
              <ul className="features-list">
                <li>✅ <strong>न्यूनतम जमा राशि ₹10,000</strong> (Minimum deposit ₹10,000)</li>
                <li>✅ अवधियाँ: 0.5 वर्ष, 1 वर्ष, 2 वर्ष, 3 वर्ष, 4 वर्ष, 5 वर्ष, 6 वर्ष, 11 वर्ष</li>
                <li>✅ 4.50% से लेकर 13.00% वार्षिक ब्याज दर</li>
                <li>✅ सीनियर सिटीजन को 0.5% अतिरिक्त ब्याज (Up to 13.50%)</li>
                <li>✅ एफडी प्रमाण पत्र के विरुद्ध 70-80% ऋण सुविधा उपलब्ध</li>
                <li>✅ सुरक्षित एवं सरकारी नियमों के अधीन संचालित</li>
              </ul>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                Apply for FD — आवेदन करें
              </Link>
            </div>
          </div>

          {/* Rates Overview Cards */}
          <div style={{ marginBottom: '35px' }}>
            <h3 style={{ color: 'var(--maroon)', fontSize: '1.25rem', marginBottom: '14px' }}>
              सावधि जमा ब्याज दर तालिका / FD Interest Rate Schedule
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
              {ratesOverview.map((item, idx) => (
                <div key={idx} style={{ background: 'var(--white)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(123,28,46,0.1)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-medium)', fontWeight: '600' }}>{item.tenure}</div>
                  <div style={{ fontSize: '1.25rem', color: 'var(--maroon)', fontWeight: '800', marginTop: '4px' }}>{item.rate}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: '600', marginTop: '2px' }}>Sr. Citizen: {item.senior}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Pamphlet Table */}
          <div className="scheme-table-wrapper">
            <h3 className="table-title">सावधि जमा — परिपक्वता राशि चार्ट (Maturity Chart)</h3>
            <p className="table-subtitle">एकमुश्त जमा राशि एवं अवधि अनुसार देय परिपक्वता राशि (₹ में)</p>
            <div className="table-scroll">
              <table className="scheme-table">
                <thead>
                  <tr>
                    <th>जमा राशि<br/><small>Deposit (₹)</small></th>
                    <th>0.5 वर्ष<br/><small>4.50%</small></th>
                    <th>1 वर्ष<br/><small>8.50%</small></th>
                    <th>2 वर्ष<br/><small>9.00%</small></th>
                    <th>3 वर्ष<br/><small>9.50%</small></th>
                    <th>4 वर्ष<br/><small>10.00%</small></th>
                    <th>5 वर्ष<br/><small>10.50%</small></th>
                    <th>6 वर्ष<br/><small>11.00%</small></th>
                    <th>11 वर्ष<br/><small>13.00%</small></th>
                  </tr>
                </thead>
                <tbody>
                  {fdData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'highlight-row'}>
                      <td><strong>₹{row.deposit}</strong></td>
                      <td>₹{row.m0_5}</td>
                      <td>₹{row.y1}</td>
                      <td>₹{row.y2}</td>
                      <td>₹{row.y3}</td>
                      <td>₹{row.y4}</td>
                      <td>₹{row.y5}</td>
                      <td>₹{row.y6}</td>
                      <td><strong style={{ color: 'var(--maroon)' }}>₹{row.y11}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: '16px', background: 'rgba(201, 150, 58, 0.1)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--gold)', fontSize: '0.88rem', color: 'var(--text-dark)' }}>
              📌 <strong>नोट:</strong> सीनियर सिटीजन (60 वर्ष व अधिक) के लिए सभी अवधियों में <strong>+0.5% अतिरिक्त ब्याज</strong> लागू होगा। न्यूनतम जमा राशि ₹10,000 है।
            </div>
          </div>

          {/* Terms */}
          <div className="scheme-terms">
            <h3>नियम एवं शर्तें / Terms & Conditions</h3>
            <div className="terms-grid">
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>परिपक्वता अवधि पूर्ण होने के पश्चात् ही कोई ब्याज अथवा अन्य लाभ देय होगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>न्यूनतम जमा राशि ₹10,000 से प्रारंभ होगी।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>सीनियर सिटीजन को 0.5 प्रतिशत ब्याज अतिरिक्त दिया जाएगा।</p>
              </div>
              <div className="term-item">
                <span className="term-icon">📌</span>
                <p>5 वर्ष एवं अधिक समय के लिए खोले गये सावधि एवं आवर्ती खाते 3 वर्ष के पूर्व भुगतान नहीं किया जायेगा एवं 3 वर्ष पश्चात् संस्था द्वारा साधारण ब्याज ही देय होगा तथा प्रपत्र खर्चा काट लिया जायेगा।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FixedDeposit;
