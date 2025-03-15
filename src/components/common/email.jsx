// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// // Initialize EmailJS with your Public Key
// emailjs.init("UXDTvLz9oDsQTIb5r");

// const SendEmailComponent = () => {
//   const [toEmail, setToEmail] = useState('');
//   const [status, setStatus] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Hard-coded values for the template parameters
//     const templateParams = {
//       name: 'Agent Zawar',
//       time: new Date().toLocaleString(),
//       message: 'hello',
//       email: toEmail, // recipient email from the form
//     };

//     emailjs
//       .send('service_qciqu5c', 'template_0ryiqqb', templateParams)
//       .then(
//         (response) => {
//           console.log('SUCCESS!', response.status, response.text);
//           setStatus('Email sent successfully!');
//         },
//         (error) => {
//           console.error('FAILED...', error);
//           setStatus('Failed to send email.');
//         }
//       );
//   };

//   return (
//     <div>
//       <h2>Send Email</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="toEmail">Recipient Email:</label>
//         <input
//           type="email"
//           id="toEmail"
//           name="toEmail"
//           value={toEmail}
//           onChange={(e) => setToEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Send Email</button>
//       </form>
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default SendEmailComponent;
