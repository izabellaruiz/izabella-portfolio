import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Normally you'd send the form here with fetch or axios
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Let’s Connect</h2>
      <p>If you’d like to work together or just say hi, reach out anytime 💌</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send Message</button>
        {submitted && <p className="thank-you">Thanks for reaching out! 💖</p>}
</form>

<div className="contact-details">
  <p><strong>Phone:</strong> <a href="tel:4074578833">(407) 457-8833</a></p>
  <p><strong>Email:</strong> <a href="mailto:izabellaruiz8@gmail.com">izabellaruiz8@gmail.com</a></p>
  <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/izabella-ruiz-4b7b76264" target="_blank" rel="noopener noreferrer">/in/izabella-ruiz</a></p>
</div>
</section>

  );
};

export default Contact;
