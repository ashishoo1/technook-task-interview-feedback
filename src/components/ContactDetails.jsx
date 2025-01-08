import React from 'react';

function ContactDetails() {
  return (
    <div className="content">
      <h2>Contact Details</h2>
      <form className="form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email address" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Enter phone number" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea placeholder="Enter address"></textarea>
        </div>
      </form>
    </div>
  );
}

export default ContactDetails;