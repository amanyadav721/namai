"use client"
import React, { useState } from 'react';
import styles from './contact.module.scss';


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('../../services/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', description: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className={styles.contactBox}>
      <p>Contact Us</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </div>
        <div className={styles.inputBox}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
        <div className={styles.inputBox}>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
          <label>Description</label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
