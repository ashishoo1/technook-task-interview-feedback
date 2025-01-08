import React from 'react';

function AcademicDetails() {
  return (
    <div className="content">
      <h2>Academic Details</h2>
      <form className="form">
        <div className="form-group">
          <label>Highest Qualification</label>
          <input type="text" placeholder="Enter qualification" />
        </div>
        <div className="form-group">
          <label>University/Institution</label>
          <input type="text" placeholder="Enter university name" />
        </div>
        <div className="form-group">
          <label>Year of Completion</label>
          <input type="number" placeholder="Enter year" min="1900" max="2099" />
        </div>
      </form>
    </div>
  );
}

export default AcademicDetails;