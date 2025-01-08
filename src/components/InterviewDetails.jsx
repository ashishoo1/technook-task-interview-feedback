import React, { useState } from 'react';
import StarRating from './StarRating';

function InterviewDetails() {
  const rounds = [
    { id: 1, label: 'Interview Round 1', status: 'Completed' },
    { id: 2, label: 'Interview Round 2', status: 'In Progress' },
    { id: 3, label: 'Interview Round 3', status: 'Pending' },
    { id: 4, label: 'HR Round', status: 'Pending' },
  ];

  const [expanded, setExpanded] = useState({
    overall: false,
    skillsPanel: false,
    deveshPanel: false,
  });

  const [categories, setCategories] = useState([
    { name: 'Skills and Qualifications', score: 2 },
    { name: 'Cultural Fit', score: 2 },
    { name: 'Problem-solving and Critical Thinking', score: 2 },
    { name: 'Communication and Interpersonal Skills', score: 2 },
  ]);

  const [panelists, setPanelists] = useState({
    'Smit Patel': {
      'Skills and Qualifications': 2,
      'Cultural Fit': 2,
      'Problem-solving and Critical Thinking': 2,
      'Communication and Interpersonal Skills': 2,
    },
    'Devesh Patel': {
      'Skills and Qualifications': 2,
      'Cultural Fit': 2,
      'Problem-solving and Critical Thinking': 2,
      'Communication and Interpersonal Skills': 2,
    },
  });

  const updatePanelistRating = (panelist, category, newScore) => {
    setPanelists(prev => ({
      ...prev,
      [panelist]: {
        ...prev[panelist],
        [category]: newScore
      }
    }));
  };

  const overallScore = Math.round(
    Object.values(categories).reduce((sum, cat) => sum + cat.score, 0) / categories.length
  );

  return (
    <div>
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
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              cursor: 'pointer'
            }}
            onClick={() => setExpanded({ ...expanded, overall: !expanded.overall })}
          >
            <h3>Overall Ratings</h3>
            <span>{expanded.overall ? '▼' : '▶'}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{overallScore}/5</span>
            <StarRating score={overallScore} />
          </div>

          {expanded.overall && (
            <div style={{ marginTop: '1rem' }}>
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
          )}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Category Wise Ratings</h3>
          
          {/* Smit's Panel */}
          <div style={{ marginTop: '1rem' }}>
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                cursor: 'pointer',
                padding: '0.5rem',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px'
              }}
              onClick={() => setExpanded({ ...expanded, skillsPanel: !expanded.skillsPanel })}
            >
              <h4>Smit Patel's Ratings</h4>
              <span>{expanded.skillsPanel ? '▼' : '▶'}</span>
            </div>
            
            {expanded.skillsPanel && (
              <div style={{ marginTop: '1rem' }}>
                {Object.entries(panelists['Smit Patel']).map(([category, score]) => (
                  <div key={category} style={{ marginTop: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{category}</span>
                      <StarRating 
                        score={score} 
                        onRate={(newScore) => updatePanelistRating('Smit Patel', category, newScore)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Devesh's Panel */}
          <div style={{ marginTop: '1rem' }}>
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                cursor: 'pointer',
                padding: '0.5rem',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px'
              }}
              onClick={() => setExpanded({ ...expanded, deveshPanel: !expanded.deveshPanel })}
            >
              <h4>Devesh Patel's Ratings</h4>
              <span>{expanded.deveshPanel ? '▼' : '▶'}</span>
            </div>
            
            {expanded.deveshPanel && (
              <div style={{ marginTop: '1rem' }}>
                {Object.entries(panelists['Devesh Patel']).map(([category, score]) => (
                  <div key={category} style={{ marginTop: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{category}</span>
                      <StarRating 
                        score={score} 
                        onRate={(newScore) => updatePanelistRating('Devesh Patel', category, newScore)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewDetails;