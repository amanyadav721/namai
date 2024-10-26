"use client"
import { useState } from 'react';
import styles from "./contact.module.scss"
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "7f03b5c4-79e9-4f35-bd0f-d0236b72a3d7");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      
      if (result.success) {
        // Show notification
        setShowNotification(true);
        // Reset form
        event.target.reset();
        // Hide notification after 5 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

return (
<>
<div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit Form'}
          </button>
        </form>
      </div>

      <div className={`${styles.notification} ${showNotification ? styles.show : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.309 17.708L22.706 15.31C22.8999 15.1161 23.0087 14.8554 23.0087 14.583C23.0087 14.3106 22.8999 14.0499 22.706 13.856L13.854 5.00397L5.00195 13.856C4.80808 14.0499 4.69922 14.3106 4.69922 14.583C4.69922 14.8554 4.80808 15.1161 5.00195 15.31L7.39895 17.708C7.59284 17.9019 7.85357 18.0107 8.12595 18.0107C8.39833 18.0107 8.65906 17.9019 8.85295 17.708L11.646 14.914V22.5C11.646 22.7652 11.7513 23.0196 11.9389 23.2071C12.1264 23.3946 12.3808 23.5 12.646 23.5H15.354C15.6192 23.5 15.8736 23.3946 16.0611 23.2071C16.2487 23.0196 16.354 22.7652 16.354 22.5V14.914L19.146 17.708C19.3399 17.9019 19.6006 18.0107 19.873 18.0107C20.1454 18.0107 20.4061 17.9019 20.6 17.708H20.309Z" fill="currentColor"/>
        </svg>
        Message sent successfully!
      </div>
</>
);
}