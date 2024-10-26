// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const { name, email, description } = req.body;

//     // Create email transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_APP_PASSWORD
//       }
//     });

//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'ad721603@gmail.com',
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
        
//         Message:
//         ${description}
//       `,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <h3>Message:</h3>
//         <p>${description}</p>
//       `
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Error sending email' });
//   }
// }

// // Modified ContactForm component
// "use client"
// import React, { useState } from 'react';
// import styles from './contact.module.scss';

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     description: '',
//   });
//   const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('sending');

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setStatus('success');
//         setFormData({ name: '', email: '', description: '' });
//         setTimeout(() => setStatus('idle'), 3000);
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       setStatus('error');
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className={styles.contactBox}>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.inputBox}>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             disabled={status === 'sending'}
//           />
//           <label>Name</label>
//         </div>
//         <div className={styles.inputBox}>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             disabled={status === 'sending'}
//           />
//           <label>Email</label>
//         </div>
//         <div className={styles.inputBox}>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows={4}
//             required
//             disabled={status === 'sending'}
//           />
//           <label>Description</label>
//         </div>
//         <button 
//           type="submit" 
//           className={styles.submitButton}
//           disabled={status === 'sending'}
//         >
//           {status === 'sending' ? 'Sending...' : 'Submit'}
//         </button>
//         {status === 'success' && (
//           <p className={styles.successMessage}>Message sent successfully!</p>
//         )}
//         {status === 'error' && (
//           <p className={styles.errorMessage}>Failed to send message. Please try again.</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;