import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for contacting us, ${formData.name}! We'll get back to you soon.`);
    // You can add form submission logic here (API call, etc.)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea><br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>Contact Info</h2>
      <p>Email: info@sritcollege.edu</p>
      <p>Phone: +1 234 567 8900</p>
      <p>Address: 123 SRIT Road, City, Country</p>
    </div>
  );
};

export default Contact;

