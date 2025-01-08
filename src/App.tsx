import React, { useState } from 'react';
import './App.css';

const tabs = [
  { id: 'basic', label: 'Basic Details' },
  { id: 'contact', label: 'Contact Details' },
  { id: 'academic', label: 'Academic Details' },
  { id: 'interview', label: 'Interview Rounds & Ratings' },
];

const rounds = [
  { id: 1, label: 'Interview Round 1', status: 'Completed' },
  { id: 2, label: 'Interview Round 2', status: 'In Progress' },
  { id: 3, label: 'Interview Round 3', status: 'Pending' },
  { id: 4, label: 'HR Round', status: 'Pending' },
];

const categories = [
  { name: 'Skills and Qualifications', score: 2 },
  { name: 'Cultural Fit', score: 2 },
  { name: 'Problem-solving and Critical Thinking', score: 2 },
  { name: 'Communication and Interpersonal Skills', score: 2 },
];

function StarRating({ score }: { score: number }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`star ${star <= score ? 'filled' : 'empty'}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('interview');

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
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounds">
          {rounds.map((round) => (
            <div key={round.id} className="round">
              <div className={`round-number ${round.status === 'Completed' ? 'completed' : ''}`}>
                {round.id}
              </div>
              <div style={{ marginTop: '0.5rem' }}>{round.label}</div>
              {round.status === 'Completed' && (
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  ● {round.status}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="feedback-card">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Interview Round 1</h2>
            <span style={{ color: '#666' }}>Completed</span>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <h3>Feedback Given</h3>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#f97316' }}>2/2</div>
            </div>
            <div className="stat-box">
              <h3>Feedback Pending</h3>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#f97316' }}>0/2</div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>Overall Ratings</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>2/5</span>
              <StarRating score={2} />
              <span style={{ color: '#666' }}>Poor+</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            {categories.map((category) => (
              <div key={category.name} style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{category.name}</span>
                  <span>{category.score}/5</span>
                </div>
                <div className="rating-bar">
                  <div 
                    className="rating-progress"
                    style={{ width: `${(category.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer">
          <button className="btn btn-text">Back</button>
          <button className="btn btn-primary">Submit</button>
        </div>
      </main>
    </div>
  );
}

export default App;