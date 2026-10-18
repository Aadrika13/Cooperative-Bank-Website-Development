import { useState } from 'react';
import './EMICalculator.css';

const EMICalculator = () => {
  const [mode, setMode] = useState('emi'); // 'emi' or 'maturity'

  // EMI State
  const [emiType, setEmiType] = useState('flat'); // 'flat' or 'reducing'
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);

  // Maturity State
  const [selectedScheme, setSelectedScheme] = useState('fd'); // 'fd', 'rd', 'daily', 'mis', 'custom'
  const [depositAmount, setDepositAmount] = useState('');
  const [matUnit, setMatUnit] = useState('months'); // 'days', 'months', 'years'
  const [matDuration, setMatDuration] = useState('');
  const [matRate, setMatRate] = useState('8.5');
  const [isSeniorCitizen, setIsSeniorCitizen] = useState(false);
  const [matResult, setMatResult] = useState(null);

  // Presets aligned with bank's schemes
  const schemePresets = [
    { id: 'fd', label: 'Fixed Deposit (FD) — सावधि जमा', defaultRate: 8.5, minDeposit: 10000, defaultUnit: 'years', defaultDuration: 1 },
    { id: 'rd', label: 'Recurring Deposit (RD) — मासिक जमा', defaultRate: 8.0, minDeposit: 500, defaultUnit: 'years', defaultDuration: 1 },
    { id: 'daily', label: 'Daily Deposit (DD) — दैनिक जमा', defaultRate: 8.5, minDeposit: 100, defaultUnit: 'days', defaultDuration: 365 },
    { id: 'mis', label: 'Monthly Income Scheme (MIS) — मासिक आय', defaultRate: 12.0, minDeposit: 10000, defaultUnit: 'months', defaultDuration: 72 },
    { id: 'saving', label: 'Saving Account — बचत खाता', defaultRate: 5.0, minDeposit: 500, defaultUnit: 'years', defaultDuration: 1 },
    { id: 'custom', label: 'Custom / अन्य दर', defaultRate: 8.0, minDeposit: 1000, defaultUnit: 'months', defaultDuration: 12 },
  ];

  const handleSchemeChange = (schemeId) => {
    setSelectedScheme(schemeId);
    const preset = schemePresets.find(p => p.id === schemeId);
    if (preset) {
      setMatRate(preset.defaultRate.toString());
      setMatUnit(preset.defaultUnit);
      setMatDuration(preset.defaultDuration.toString());
      setDepositAmount(preset.minDeposit.toString());
      setMatResult(null);
    }
  };

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const n = parseInt(tenure);
    if (!P || isNaN(annualRate) || !n) return;

    let emi = 0;
    let totalPayment = 0;
    let totalInterest = 0;

    if (emiType === 'flat') {
      // Flat Rate: Total Interest = P * (AnnualRate / 100) * (n / 12)
      // Total Payment = P + Total Interest
      // Monthly EMI = Total Payment / n
      totalInterest = P * (annualRate / 100) * (n / 12);
      totalPayment = P + totalInterest;
      emi = totalPayment / n;
    } else {
      // Reducing Balance: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
      const r = annualRate / 12 / 100;
      if (r === 0) {
        emi = P / n;
        totalPayment = P;
        totalInterest = 0;
      } else {
        emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        totalPayment = emi * n;
        totalInterest = totalPayment - P;
      }
    }

    setResult({
      type: emiType,
      emi: emi.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      principal: P.toFixed(2),
      tenure: n,
      rate: annualRate,
    });
  };

  const calculateMaturity = () => {
    const P = parseFloat(depositAmount);
    const baseRate = parseFloat(matRate);
    const dur = parseFloat(matDuration);

    if (!P || isNaN(baseRate) || !dur) return;

    // Apply Senior Citizen +0.5% ROI
    const effectiveAnnualRate = baseRate + (isSeniorCitizen ? 0.5 : 0.0);
    const r = effectiveAnnualRate / 100;

    // Convert duration to years and months
    let years = 0;
    let months = 0;
    let days = 0;

    if (matUnit === 'days') {
      days = dur;
      years = dur / 365;
      months = dur / 30.416;
    } else if (matUnit === 'months') {
      months = dur;
      years = dur / 12;
      days = dur * 30.416;
    } else {
      years = dur;
      months = dur * 12;
      days = dur * 365;
    }

    let maturityAmount = 0;
    let totalDeposit = 0;
    let totalInterest = 0;
    let periodicIncome = null;

    if (selectedScheme === 'rd') {
      // Monthly recurring deposit
      const mRate = r / 12;
      const numMonths = Math.max(1, Math.round(months));
      totalDeposit = P * numMonths;
      maturityAmount = P * ((Math.pow(1 + mRate, numMonths) - 1) / mRate) * (1 + mRate);
      totalInterest = maturityAmount - totalDeposit;
    } else if (selectedScheme === 'daily') {
      // Daily recurring deposit (approx compound based on daily deposits)
      const numDays = Math.max(1, Math.round(days));
      totalDeposit = P * numDays;
      // Daily compounding / compound growth
      const dRate = r / 365;
      maturityAmount = P * ((Math.pow(1 + dRate, numDays) - 1) / dRate) * (1 + dRate);
      totalInterest = maturityAmount - totalDeposit;
    } else if (selectedScheme === 'mis') {
      // MIS returns principal at end + periodic interest paid out
      totalDeposit = P;
      const annualInc = P * r;
      const monthlyInc = annualInc / 12;
      periodicIncome = {
        monthly: Math.round(monthlyInc),
        quarterly: Math.round(annualInc / 4),
        halfyearly: Math.round(annualInc / 2),
        yearly: Math.round(annualInc),
      };
      totalInterest = annualInc * years;
      maturityAmount = P + totalInterest;
    } else {
      // Lump sum FD / Saving Account (compounded annually/quarterly)
      totalDeposit = P;
      // Quarterly compounding for standard Indian FDs
      maturityAmount = P * Math.pow(1 + r / 4, 4 * years);
      totalInterest = maturityAmount - totalDeposit;
    }

    setMatResult({
      maturity: maturityAmount.toFixed(2),
      totalDeposit: totalDeposit.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      effectiveRate: effectiveAnnualRate.toFixed(2),
      periodicIncome,
      tenureDescription: `${dur} ${matUnit === 'days' ? 'Days (दिन)' : matUnit === 'months' ? 'Months (माह)' : 'Years (वर्ष)'}`,
    });
  };

  const formatNum = (n) => parseFloat(n).toLocaleString('en-IN', { minimumFractionDigits: 2 });

  return (
    <div>
      <div className="page-banner">
        <h1>EMI & Maturity Calculator</h1>
        <p className="hindi-title">EMI और मेच्योरिटी कैलकुलेटर</p>
        <p className="breadcrumb">Home → <span>Calculator</span></p>
      </div>

      <section className="calc-section">
        <div className="container">
          {/* Mode Toggle */}
          <div className="calc-mode-toggle">
            <button className={`mode-btn ${mode === 'maturity' ? 'active' : ''}`} onClick={() => { setMode('maturity'); setMatResult(null); }}>
              📈 Deposit Maturity Calculator <span>जमा मेच्योरिटी कैलकुलेटर</span>
            </button>
            <button className={`mode-btn ${mode === 'emi' ? 'active' : ''}`} onClick={() => { setMode('emi'); setResult(null); }}>
              🧮 Loan EMI Calculator <span>ऋण EMI कैलकुलेटर</span>
            </button>
          </div>

          {/* Maturity Calculator */}
          {mode === 'maturity' && (
            <div className="calc-wrapper">
              <div className="calc-form">
                <h2>Deposit Maturity Calculator</h2>
                <p className="calc-desc">
                  Calculate maturity returns across Daily, Monthly RD, FD, and MIS schemes with flexible Day, Month, or Year tenures.
                </p>

                {/* Scheme Selector */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--maroon)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Select Scheme — योजना चुनें:
                  </label>
                  <select
                    value={selectedScheme}
                    onChange={(e) => handleSchemeChange(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '2px solid rgba(123,28,46,0.15)', background: 'var(--beige)', fontSize: '0.92rem', fontWeight: '600' }}
                  >
                    {schemePresets.map((sp) => (
                      <option key={sp.id} value={sp.id}>{sp.label}</option>
                    ))}
                  </select>
                </div>

                {/* Senior Citizen Toggle */}
                <div style={{ background: 'rgba(201, 150, 58, 0.12)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gold)', marginBottom: '22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <div>
                    <strong style={{ color: 'var(--maroon)', fontSize: '0.9rem', display: 'block' }}>
                      👴 Senior Citizen (60+ Years)? / क्या आप वरिष्ठ नागरिक हैं?
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-medium)' }}>
                      Senior citizens receive an additional <strong>+0.5% ROI</strong> on all schemes!
                    </span>
                  </div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={isSeniorCitizen}
                      onChange={(e) => setIsSeniorCitizen(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--maroon)' }}
                    />
                    <span style={{ color: 'var(--maroon)' }}>Apply +0.5%</span>
                  </label>
                </div>

                <div className="calc-grid">
                  <div className="calc-field">
                    <label>
                      {selectedScheme === 'daily' ? 'Daily Deposit (₹) — दैनिक जमा' : selectedScheme === 'rd' ? 'Monthly Deposit (₹) — मासिक किस्त' : 'Deposit Amount (₹) — जमा राशि'}
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 10000"
                      value={depositAmount}
                      onChange={e => setDepositAmount(e.target.value)}
                    />
                  </div>

                  <div className="calc-field">
                    <label>Annual Interest Rate (%) — वार्षिक ब्याज दर</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="number"
                        placeholder="e.g. 8.5"
                        value={matRate}
                        onChange={e => setMatRate(e.target.value)}
                        step="0.05"
                      />
                      {isSeniorCitizen && (
                        <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.75rem', color: '#2E7D32', fontWeight: '700' }}>
                          +0.5% Sr = {(parseFloat(matRate || 0) + 0.5).toFixed(2)}%
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Flexible Tenure with Days, Months, Years */}
                  <div className="calc-field">
                    <label>Tenure / अवधि (दिन, माह अथवा वर्ष में)</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '8px' }}>
                      <input
                        type="number"
                        placeholder="e.g. 12"
                        value={matDuration}
                        onChange={e => setMatDuration(e.target.value)}
                      />
                      <select
                        value={matUnit}
                        onChange={(e) => setMatUnit(e.target.value)}
                        style={{ padding: '11px', borderRadius: 'var(--radius-sm)', border: '2px solid rgba(123,28,46,0.15)', background: 'var(--beige)', fontWeight: '600' }}
                      >
                        <option value="days">Days (दिन)</option>
                        <option value="months">Months (माह)</option>
                        <option value="years">Years (वर्ष)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="btn-primary calc-btn" onClick={calculateMaturity}>
                  Calculate Maturity — गणना करें
                </button>

                {matResult && (
                  <div className="calc-result">
                    <div className="result-card featured-result">
                      <div className="result-label">
                        {selectedScheme === 'mis' ? 'Total Payout (Principal + Total Income)' : 'Maturity Amount — परिपक्वता राशि'}
                      </div>
                      <div className="result-value">₹{formatNum(matResult.maturity)}</div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>
                        Applied ROI: <strong>{matResult.effectiveRate}% p.a.</strong> {isSeniorCitizen && '(includes 0.5% Sr Citizen bonus)'} | {matResult.tenureDescription}
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-label">Total Principal Deposited — कुल जमा</div>
                      <div className="result-value">₹{formatNum(matResult.totalDeposit)}</div>
                    </div>

                    <div className="result-card">
                      <div className="result-label">Total Interest Earned — कुल अर्जित ब्याज</div>
                      <div className="result-value interest">₹{formatNum(matResult.totalInterest)}</div>
                    </div>

                    {matResult.periodicIncome && (
                      <div className="result-card" style={{ gridColumn: '1 / -1', background: 'var(--white)', border: '2px solid var(--gold)' }}>
                        <div className="result-label" style={{ color: 'var(--maroon)', fontWeight: '700' }}>
                          MIS Periodic Payout Schedule — मासिक आय विवरण
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '10px' }}>
                          <div><strong>₹{matResult.periodicIncome.monthly.toLocaleString('en-IN')}</strong><br/><small>मासिक / Month</small></div>
                          <div><strong>₹{matResult.periodicIncome.quarterly.toLocaleString('en-IN')}</strong><br/><small>त्रैमासिक / Quarter</small></div>
                          <div><strong>₹{matResult.periodicIncome.halfyearly.toLocaleString('en-IN')}</strong><br/><small>छःमाही / 6-Month</small></div>
                          <div><strong>₹{matResult.periodicIncome.yearly.toLocaleString('en-IN')}</strong><br/><small>वार्षिक / Year</small></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Quick reference guide */}
              <div className="calc-info">
                <h3>Verified Bank Schemes & ROI Table</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-medium)' }}>
                  All rates verified from official society pamphlets. Senior Citizens get an additional <strong>+0.5%</strong>.
                </p>

                <div className="quick-rates-table">
                  <table className="scheme-table">
                    <thead>
                      <tr><th>योजना / Scheme</th><th>अवधि / Tenure</th><th>ROI (Regular)</th><th>Sr. Citizen</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Saving Account</td><td>Daily Balance</td><td>5.00%</td><td style={{ color: 'var(--maroon)', fontWeight: '700' }}>5.50%</td></tr>
                      <tr><td>Daily RD (DD)</td><td>180 दिन</td><td>6.00%</td><td>6.50%</td></tr>
                      <tr><td>Daily RD (DD)</td><td>365 दिन</td><td>8.50%</td><td>9.00%</td></tr>
                      <tr><td>Daily RD (DD)</td><td>500 दिन</td><td>9.50%</td><td>10.00%</td></tr>
                      <tr><td>Daily RD (DD)</td><td>1450 दिन</td><td>10.50%</td><td>11.00%</td></tr>
                      <tr><td>Fixed Deposit (FD)</td><td>0.5 वर्ष (6 माह)</td><td>4.50%</td><td>5.00%</td></tr>
                      <tr><td>Fixed Deposit (FD)</td><td>1 वर्ष</td><td>8.50%</td><td>9.00%</td></tr>
                      <tr><td>Fixed Deposit (FD)</td><td>2 वर्ष</td><td>9.00%</td><td>9.50%</td></tr>
                      <tr><td>Fixed Deposit (FD)</td><td>3 वर्ष</td><td>9.50%</td><td>10.00%</td></tr>
                      <tr><td>Fixed Deposit (FD)</td><td>4 वर्ष</td><td>10.00%</td><td>10.50%</td></tr>
                      <tr><td>Fixed Deposit (FD)</td><td>5 वर्ष</td><td>10.50%</td><td>11.00%</td></tr>
                      <tr><td>Fixed Deposit (FD)</td><td>6 वर्ष</td><td>11.00%</td><td>11.50%</td></tr>
                      <tr><td>Fixed Deposit (FD)</td><td>11 वर्ष</td><td>13.00%</td><td>13.50%</td></tr>
                      <tr><td>Monthly Income (MIS)</td><td>12 माह</td><td>8.50%</td><td>9.00%</td></tr>
                      <tr><td>Monthly Income (MIS)</td><td>24 माह</td><td>9.00%</td><td>9.50%</td></tr>
                      <tr><td>Monthly Income (MIS)</td><td>36 माह</td><td>9.50%</td><td>10.00%</td></tr>
                      <tr><td>Monthly Income (MIS)</td><td>48 माह</td><td>10.00%</td><td>10.50%</td></tr>
                      <tr><td>Monthly Income (MIS)</td><td>72 माह (6 वर्ष)</td><td>12.00%</td><td>12.50%</td></tr>
                      <tr><td>Monthly RD</td><td>1 वर्ष – 6 वर्ष</td><td>8.0% – 10.5%</td><td>8.5% – 11.0%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* EMI Calculator */}
          {mode === 'emi' && (
            <div className="calc-wrapper">
              <div className="calc-form">
                <h2>Loan EMI Calculator</h2>
                <p className="calc-desc">Calculate your monthly EMI using either Flat Rate or Reducing Balance interest.</p>

                {/* Flat vs Reducing Toggle */}
                <div style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--maroon)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Select Interest Type / ब्याज का प्रकार चुनें:
                  </label>
                  <div className="deposit-type-toggle" style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <button
                      type="button"
                      className={`dtype-btn ${emiType === 'flat' ? 'active' : ''}`}
                      onClick={() => { setEmiType('flat'); setResult(null); }}
                      style={{ padding: '12px 14px', textAlign: 'center' }}
                    >
                      <strong>Flat Rate (फ्लैट ब्याज दर)</strong>
                      <span style={{ display: 'block', fontSize: '0.72rem', opacity: 0.85, marginTop: '2px' }}>ब्याज पूरे मूलधन पर स्थिर रहता है</span>
                    </button>
                    <button
                      type="button"
                      className={`dtype-btn ${emiType === 'reducing' ? 'active' : ''}`}
                      onClick={() => { setEmiType('reducing'); setResult(null); }}
                      style={{ padding: '12px 14px', textAlign: 'center' }}
                    >
                      <strong>Reducing Balance (घटती ब्याज दर)</strong>
                      <span style={{ display: 'block', fontSize: '0.72rem', opacity: 0.85, marginTop: '2px' }}>बकाया मूलधन पर ही ब्याज लगता है</span>
                    </button>
                  </div>
                </div>

                <div className="calc-grid">
                  <div className="calc-field">
                    <label>Loan Amount (₹) — ऋण राशि</label>
                    <input type="number" placeholder="e.g. 50000" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} />
                  </div>
                  <div className="calc-field">
                    <label>Annual Interest Rate (%) — वार्षिक ब्याज दर</label>
                    <input type="number" placeholder="e.g. 12" value={interestRate} onChange={e => setInterestRate(e.target.value)} step="0.1" />
                  </div>
                  <div className="calc-field">
                    <label>Loan Tenure (Months) — अवधि (महीने)</label>
                    <input type="number" placeholder="e.g. 24" value={tenure} onChange={e => setTenure(e.target.value)} />
                  </div>
                </div>
                <button className="btn-primary calc-btn" onClick={calculateEMI}>
                  Calculate EMI ({emiType === 'flat' ? 'Flat Rate' : 'Reducing Rate'}) — गणना करें
                </button>

                {result && (
                  <div className="calc-result">
                    <div className="result-card featured-result">
                      <div className="result-label">
                        Monthly EMI — मासिक किस्त ({result.type === 'flat' ? 'फ्लैट दर' : 'घटती दर'})
                      </div>
                      <div className="result-value">₹{formatNum(result.emi)}</div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>
                        Method: <strong>{result.type === 'flat' ? 'Flat Interest Rate' : 'Reducing Balance Rate'}</strong> | {result.rate}% for {result.tenure} months
                      </div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Principal Amount — मूलधन</div>
                      <div className="result-value">₹{formatNum(result.principal)}</div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Total Interest — कुल ब्याज</div>
                      <div className="result-value interest">₹{formatNum(result.totalInterest)}</div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Total Amount Payable — कुल देय राशि</div>
                      <div className="result-value">₹{formatNum(result.totalPayment)}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="calc-info">
                <h3>Flat vs Reducing Rate Comparison</h3>
                
                <div className="formula-box">
                  <p><strong style={{ color: 'var(--maroon)' }}>1. Flat Rate Method (फ्लैट ब्याज दर):</strong></p>
                  <p style={{ fontSize: '0.82rem', marginBottom: '6px' }}>
                    ब्याज पूरे ऋण अवधि में पूरी मूलधन राशि पर गणना किया जाता है।
                  </p>
                  <div className="formula" style={{ fontSize: '0.8rem' }}>
                    Total Interest = P × (Rate/100) × (Tenure/12)<br/>
                    EMI = (Principal + Total Interest) ÷ Tenure
                  </div>
                </div>

                <div className="formula-box">
                  <p><strong style={{ color: 'var(--maroon)' }}>2. Reducing Balance Method (घटती ब्याज दर):</strong></p>
                  <p style={{ fontSize: '0.82rem', marginBottom: '6px' }}>
                    ब्याज प्रत्येक माह केवल शेष बकाया मूलधन पर लगाया जाता है।
                  </p>
                  <div className="formula" style={{ fontSize: '0.8rem' }}>
                    EMI = [P × r × (1+r)ⁿ] ÷ [(1+r)ⁿ - 1]<br/>
                    <small>जहाँ r = मासिक ब्याज (Rate ÷ 1200), n = कुल माह</small>
                  </div>
                </div>

                <div className="quick-rates">
                  <h4>Deposit Loan Eligibility Reminder</h4>
                  <p>
                    Deposit loan available up to <strong>70-80%</strong> of active deposit. Applicable only when the customer has <strong>90 or more days</strong> of active deposit history.
                  </p>
                  <a href="tel:07514526033" className="btn-outline">📞 Helpline: 0751-4526033</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EMICalculator;
