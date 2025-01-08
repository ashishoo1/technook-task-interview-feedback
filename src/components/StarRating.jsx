import React from 'react';

function StarRating({ score, onRate }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          className={`star ${star <= score ? 'filled' : 'empty'}`}
          style={{ cursor: 'pointer' }}
          onClick={() => onRate && onRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;