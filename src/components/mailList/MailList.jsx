import "./mailList.css"
import React, { useState } from 'react';


const MailList = () => {
  const [recipient, setRecipient] = useState('');

  const sendEmail = async () => {
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipient })
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        // Reset form fields or handle success
      } else {
        console.error('Failed to send email.');
        // Handle error
      }
    } catch (error) {
      console.error('Error sending the email:', error);
    }
  };


  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder={setRecipient}/>
        <button onClick={sendEmail}>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList