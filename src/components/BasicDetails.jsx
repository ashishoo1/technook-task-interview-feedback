import React from 'react';

function BasicDetails() {
  return (
    <div className="content">
      <h2>Basic Details</h2>
      <form className="form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default BasicDetails;