import './SkeletonLoader.css';

const BannerSkeleton = ({ title = true }) => (
  <div className="sk-banner">
    <div className="sk-banner-title sk-shimmer" />
    <div className="sk-banner-sub sk-shimmer" />
    <div className="sk-banner-crumb sk-shimmer" />
  </div>
);

const SectionHeadSkeleton = () => (
  <div className="sk-section-header">
    <div className="sk-head-title sk-shimmer" />
    <div className="sk-head-sub sk-shimmer" />
    <div className="sk-head-desc sk-shimmer" />
  </div>
);

export default function SkeletonLoader({ page = 'generic' }) {
  if (page === 'home') {
    return (
      <div className="skeleton-page">
        {/* Hero */}
        <div className="sk-hero">
          <div className="sk-hero-grid">
            <div>
              <div className="sk-hero-badge sk-shimmer" />
              <div className="sk-hero-h1 sk-shimmer" />
              <div className="sk-hero-text sk-shimmer" />
              <div className="sk-hero-text sk-shimmer" style={{ width: '80%' }} />
              <div className="sk-hero-actions">
                <div className="sk-btn-placeholder sk-shimmer" />
                <div className="sk-btn-placeholder sk-shimmer" />
              </div>
            </div>
            <div className="sk-hero-visual">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="sk-bubble sk-shimmer" />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="sk-container">
          <div className="sk-stats-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="sk-stat-card">
                <div className="sk-line-title sk-shimmer" style={{ width: '50%', height: '28px' }} />
                <div className="sk-line-sub sk-shimmer" style={{ width: '70%' }} />
              </div>
            ))}
          </div>

          {/* Schemes & Services Grid */}
          <SectionHeadSkeleton />
          <div className="sk-grid-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="sk-card">
                <div className="sk-card-icon sk-shimmer" />
                <div className="sk-line-sub sk-shimmer" style={{ width: '40%' }} />
                <div className="sk-line-title sk-shimmer" />
                <div className="sk-line-desc sk-shimmer" />
                <div className="sk-line-desc sk-shimmer" style={{ width: '85%' }} />
              </div>
            ))}
          </div>

          {/* Rates Table / Highlight */}
          <div style={{ marginTop: '50px' }}>
            <SectionHeadSkeleton />
            <div className="sk-grid-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="sk-card" style={{ height: '320px' }}>
                  <div className="sk-card-icon sk-shimmer" />
                  <div className="sk-line-title sk-shimmer" />
                  <div className="sk-line-desc sk-shimmer" style={{ height: '35px', marginTop: '10px' }} />
                  <div className="sk-line-desc sk-shimmer" style={{ height: '110px', marginTop: '10px' }} />
                  <div className="sk-btn-placeholder sk-shimmer" style={{ width: '100%', marginTop: 'auto' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'about') {
    return (
      <div className="skeleton-page">
        <BannerSkeleton />
        <div className="sk-container">
          {/* Who We Are */}
          <div className="sk-grid-2" style={{ alignItems: 'center', marginBottom: '60px' }}>
            <div className="sk-card" style={{ height: '340px', alignItems: 'center', justifyContent: 'center' }}>
              <div className="sk-bubble sk-shimmer" style={{ width: '140px', height: '140px' }} />
              <div className="sk-line-title sk-shimmer" style={{ width: '60%' }} />
              <div className="sk-line-sub sk-shimmer" style={{ width: '40%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="sk-line-sub sk-shimmer" style={{ width: '30%' }} />
              <div className="sk-line-title sk-shimmer" style={{ height: '34px', width: '90%' }} />
              <div className="sk-line-desc sk-shimmer" />
              <div className="sk-line-desc sk-shimmer" />
              <div className="sk-line-desc sk-shimmer" style={{ width: '85%' }} />
              <div style={{ display: 'flex', gap: '16px', marginTop: '14px' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="sk-stat-card" style={{ flex: 1, height: '70px' }}>
                    <div className="sk-line-title sk-shimmer" style={{ width: '60%', height: '18px' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Slideshow Frame */}
          <SectionHeadSkeleton />
          <div className="sk-slideshow-frame sk-shimmer" />
          <div className="sk-thumbs-row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="sk-thumb-item sk-shimmer" />
            ))}
          </div>

          {/* Mission & Vision */}
          <div style={{ marginTop: '60px' }}>
            <div className="sk-grid-2">
              <div className="sk-card" style={{ height: '220px', background: 'rgba(123, 28, 46, 0.15)' }}>
                <div className="sk-card-icon sk-shimmer" />
                <div className="sk-line-title sk-shimmer" />
                <div className="sk-line-desc sk-shimmer" />
                <div className="sk-line-desc sk-shimmer" style={{ width: '90%' }} />
              </div>
              <div className="sk-card" style={{ height: '220px', background: 'rgba(123, 28, 46, 0.15)' }}>
                <div className="sk-card-icon sk-shimmer" />
                <div className="sk-line-title sk-shimmer" />
                <div className="sk-line-desc sk-shimmer" />
                <div className="sk-line-desc sk-shimmer" style={{ width: '90%' }} />
              </div>
            </div>
          </div>

          {/* Management Committee (3 cards) */}
          <div style={{ marginTop: '60px' }}>
            <SectionHeadSkeleton />
            <div className="sk-grid-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="sk-card" style={{ alignItems: 'center', textAlign: 'center' }}>
                  <div className="sk-bubble sk-shimmer" style={{ width: '70px', height: '70px' }} />
                  <div className="sk-line-title sk-shimmer" style={{ width: '50%' }} />
                  <div className="sk-line-sub sk-shimmer" style={{ width: '70%' }} />
                  <div className="sk-line-desc sk-shimmer" style={{ width: '85%' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'scheme') {
    return (
      <div className="skeleton-page">
        <BannerSkeleton />
        <div className="sk-container">
          {/* Scheme Overview Card */}
          <div className="sk-card" style={{ marginBottom: '40px', padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '60%' }}>
                <div className="sk-line-sub sk-shimmer" style={{ width: '30%', marginBottom: '8px' }} />
                <div className="sk-line-title sk-shimmer" style={{ height: '30px', width: '80%' }} />
              </div>
              <div className="sk-bubble sk-shimmer" style={{ width: '80px', height: '80px', borderRadius: '12px' }} />
            </div>
            <div className="sk-line-desc sk-shimmer" style={{ marginTop: '16px' }} />
            <div className="sk-line-desc sk-shimmer" style={{ width: '80%' }} />
          </div>

          {/* Rates Table */}
          <SectionHeadSkeleton />
          <div className="sk-table-box">
            <div className="sk-table-header sk-shimmer" />
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="sk-table-row sk-shimmer" />
            ))}
          </div>

          {/* Features / Eligibility Grid */}
          <div style={{ marginTop: '50px' }}>
            <div className="sk-grid-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="sk-card">
                  <div className="sk-card-icon sk-shimmer" />
                  <div className="sk-line-title sk-shimmer" style={{ width: '80%' }} />
                  <div className="sk-line-desc sk-shimmer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'loan') {
    return (
      <div className="skeleton-page">
        <BannerSkeleton />
        <div className="sk-container">
          {/* Overview Banner */}
          <div className="sk-card" style={{ padding: '30px', marginBottom: '40px' }}>
            <div className="sk-line-title sk-shimmer" style={{ height: '32px', width: '50%' }} />
            <div className="sk-line-desc sk-shimmer" style={{ marginTop: '12px' }} />
            <div className="sk-line-desc sk-shimmer" style={{ width: '85%' }} />
          </div>

          {/* Key Loan Highlights */}
          <div className="sk-grid-3" style={{ marginBottom: '40px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="sk-card" style={{ height: '180px' }}>
                <div className="sk-card-icon sk-shimmer" />
                <div className="sk-line-title sk-shimmer" style={{ width: '70%' }} />
                <div className="sk-line-desc sk-shimmer" />
              </div>
            ))}
          </div>

          {/* Terms & Conditions Box */}
          <div className="sk-card" style={{ padding: '30px' }}>
            <div className="sk-line-title sk-shimmer" style={{ width: '40%', marginBottom: '20px' }} />
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="sk-line-desc sk-shimmer" style={{ marginBottom: '12px' }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (page === 'calculator') {
    return (
      <div className="skeleton-page">
        <BannerSkeleton />
        <div className="sk-container">
          <SectionHeadSkeleton />
          <div className="sk-grid-2" style={{ gap: '40px' }}>
            {/* Controls Pane */}
            <div className="sk-card" style={{ padding: '30px', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div className="sk-btn-placeholder sk-shimmer" style={{ flex: 1, height: '40px' }} />
                <div className="sk-btn-placeholder sk-shimmer" style={{ flex: 1, height: '40px' }} />
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="sk-line-sub sk-shimmer" style={{ width: '40%' }} />
                    <div className="sk-line-sub sk-shimmer" style={{ width: '25%' }} />
                  </div>
                  <div className="sk-input-field sk-shimmer" style={{ height: '20px' }} />
                </div>
              ))}
            </div>

            {/* Result Pane */}
            <div className="sk-card" style={{ padding: '30px', alignItems: 'center', justifyContent: 'center' }}>
              <div className="sk-line-sub sk-shimmer" style={{ width: '40%' }} />
              <div className="sk-line-title sk-shimmer" style={{ width: '60%', height: '44px', margin: '14px 0' }} />
              <div className="sk-bubble sk-shimmer" style={{ width: '160px', height: '160px', margin: '20px 0' }} />
              <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'space-around' }}>
                <div className="sk-stat-card" style={{ flex: 1, height: '60px' }}>
                  <div className="sk-line-sub sk-shimmer" style={{ width: '80%' }} />
                </div>
                <div className="sk-stat-card" style={{ flex: 1, height: '60px' }}>
                  <div className="sk-line-sub sk-shimmer" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'contact') {
    return (
      <div className="skeleton-page">
        <BannerSkeleton />
        <div className="sk-container">
          {/* 4 Info Cards */}
          <div className="sk-grid-4" style={{ marginBottom: '40px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="sk-card">
                <div className="sk-card-icon sk-shimmer" />
                <div className="sk-line-title sk-shimmer" style={{ width: '60%' }} />
                <div className="sk-line-desc sk-shimmer" />
                <div className="sk-line-sub sk-shimmer" style={{ width: '80%' }} />
              </div>
            ))}
          </div>

          {/* Form + Map Split */}
          <div className="sk-grid-2">
            <div className="sk-form-box">
              <div className="sk-line-title sk-shimmer" style={{ width: '50%' }} />
              <div className="sk-input-field sk-shimmer" />
              <div className="sk-input-field sk-shimmer" />
              <div className="sk-input-field sk-shimmer" />
              <div className="sk-textarea-field sk-shimmer" />
              <div className="sk-btn-placeholder sk-shimmer" style={{ width: '100%', height: '48px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="sk-card sk-shimmer" style={{ height: '280px' }} />
              <div className="sk-card" style={{ height: '180px' }}>
                <div className="sk-line-title sk-shimmer" style={{ width: '40%' }} />
                <div className="sk-line-desc sk-shimmer" />
                <div className="sk-line-desc sk-shimmer" style={{ width: '70%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'membership' || page === 'career') {
    return (
      <div className="skeleton-page">
        <BannerSkeleton />
        <div className="sk-container">
          <SectionHeadSkeleton />
          <div className="sk-grid-3" style={{ marginBottom: '40px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="sk-card" style={{ height: '200px' }}>
                <div className="sk-card-icon sk-shimmer" />
                <div className="sk-line-title sk-shimmer" style={{ width: '70%' }} />
                <div className="sk-line-desc sk-shimmer" />
              </div>
            ))}
          </div>
          <div className="sk-form-box" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="sk-line-title sk-shimmer" style={{ width: '40%' }} />
            <div className="sk-input-field sk-shimmer" />
            <div className="sk-input-field sk-shimmer" />
            <div className="sk-textarea-field sk-shimmer" />
            <div className="sk-btn-placeholder sk-shimmer" style={{ width: '160px', height: '46px' }} />
          </div>
        </div>
      </div>
    );
  }

  // Generic fallback
  return (
    <div className="skeleton-page">
      <BannerSkeleton />
      <div className="sk-container">
        <SectionHeadSkeleton />
        <div className="sk-grid-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="sk-card" style={{ height: '220px' }}>
              <div className="sk-card-icon sk-shimmer" />
              <div className="sk-line-title sk-shimmer" />
              <div className="sk-line-desc sk-shimmer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
