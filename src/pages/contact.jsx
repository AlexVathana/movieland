import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import HomeIcon from '../homeicon.svg';
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    regarding: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a backend server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      email: '',
      name: '',
      regarding: ''
    });
    alert("Submitted successfully!")
  };


  return (
    <div className="contact-container"> {/* Apply a container class for styling */}
      <h2>Contact Us</h2>
      <Link to="/home" className="home-link">
        <img src={HomeIcon} alt="Home" className="home-icon2" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Apply a class for form elements grouping */}
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control" // Apply a class for input styling
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Regarding:</label>
          <input
            type="text"
            name="regarding"
            value={formData.regarding}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button> {/* Apply a class for button styling */}
      </form>

      

    </div>
  );
};

export default Contact;
