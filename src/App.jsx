import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SkeletonLoader from './components/SkeletonLoader';
import './App.css';

// Lazy loaded page components for fast initial load & tailored skeleton outlines
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SavingAccount = lazy(() => import('./pages/schemes/SavingAccount'));
const DailyDeposit = lazy(() => import('./pages/schemes/DailyDeposit'));
const RecurringDeposit = lazy(() => import('./pages/schemes/RecurringDeposit'));
const MonthlyDeposit = lazy(() => import('./pages/schemes/MonthlyDeposit'));
const FixedDeposit = lazy(() => import('./pages/schemes/FixedDeposit'));
const DepositLoan = lazy(() => import('./pages/loans/DepositLoan'));
const PersonalLoan = lazy(() => import('./pages/loans/PersonalLoan'));
const SecurityLoan = lazy(() => import('./pages/loans/SecurityLoan'));
const EMICalculator = lazy(() => import('./pages/EMICalculator'));
const Membership = lazy(() => import('./pages/Membership'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Suspense fallback={<SkeletonLoader page="home" />}><Home /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<SkeletonLoader page="about" />}><About /></Suspense>} />
            <Route path="/schemes/saving-account" element={<Suspense fallback={<SkeletonLoader page="scheme" />}><SavingAccount /></Suspense>} />
            <Route path="/schemes/daily-deposit" element={<Suspense fallback={<SkeletonLoader page="scheme" />}><DailyDeposit /></Suspense>} />
            <Route path="/schemes/recurring-deposit" element={<Suspense fallback={<SkeletonLoader page="scheme" />}><RecurringDeposit /></Suspense>} />
            <Route path="/schemes/monthly-deposit" element={<Suspense fallback={<SkeletonLoader page="scheme" />}><MonthlyDeposit /></Suspense>} />
            <Route path="/schemes/fixed-deposit" element={<Suspense fallback={<SkeletonLoader page="scheme" />}><FixedDeposit /></Suspense>} />
            <Route path="/loan/deposit-loan" element={<Suspense fallback={<SkeletonLoader page="loan" />}><DepositLoan /></Suspense>} />
            <Route path="/loan/personal-loan" element={<Suspense fallback={<SkeletonLoader page="loan" />}><PersonalLoan /></Suspense>} />
            <Route path="/loan/security-loan" element={<Suspense fallback={<SkeletonLoader page="loan" />}><SecurityLoan /></Suspense>} />
            <Route path="/emi-calculator" element={<Suspense fallback={<SkeletonLoader page="calculator" />}><EMICalculator /></Suspense>} />
            <Route path="/membership" element={<Suspense fallback={<SkeletonLoader page="membership" />}><Membership /></Suspense>} />
            <Route path="/career" element={<Suspense fallback={<SkeletonLoader page="career" />}><Career /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<SkeletonLoader page="contact" />}><Contact /></Suspense>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
