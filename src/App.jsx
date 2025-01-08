import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import BasicDetails from './components/BasicDetails';
import ContactDetails from './components/ContactDetails';
import AcademicDetails from './components/AcademicDetails';
import InterviewDetails from './components/InterviewDetails';

const tabs = [
  { id: 'basic', label: 'Basic Details', path: '/' },
  { id: 'contact', label: 'Contact Details', path: '/contact' },
  { id: 'academic', label: 'Academic Details', path: '/academic' },
  { id: 'interview', label: 'Interview Rounds & Ratings', path: '/interview' },
];

function MainContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const currentIndex = tabs.findIndex(tab => tab.path === location.pathname);
    if (currentIndex > 0) {
      navigate(tabs[currentIndex - 1].path);
    }
  };

  const handleSubmit = () => {
    const currentIndex = tabs.findIndex(tab => tab.path === location.pathname);
    if (currentIndex < tabs.length - 1) {
      navigate(tabs[currentIndex + 1].path);
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <button>☰</button>
          <input type="search" placeholder="Search..." className="search" />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>?</span>
            <span>🔔</span>
            <span>👤</span>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`tab ${location.pathname === tab.path ? 'active' : ''}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <Routes>
          <Route path="/" element={<BasicDetails />} />
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="/academic" element={<AcademicDetails />} />
          <Route path="/interview" element={<InterviewDetails />} />
        </Routes>

        <div className="footer">
          <button className="btn btn-text" onClick={handleBack}>Back</button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            {location.pathname === '/interview' ? 'Submit' : 'Next'}
          </button>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;