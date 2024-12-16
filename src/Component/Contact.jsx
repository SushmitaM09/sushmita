import React, { useState } from 'react'; 
import './Contact.css';

function Contact({isDarkMode}) {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "146d8f86-ec0c-4003-b54f-e7bfd42e2ac8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : 'light'}`}>
      <form onSubmit={onSubmit}>
        <h2>Contact</h2>
        <div className="input-box">
          <label>Name:</label>
          <input
            type="text"
            className="field"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address:</label>
          <input
            type="email"
            className="field"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-box">
          <label>Message:</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
        {result && <p className="result-message">{result}</p>}
      </form>
    </section>
  );
}

export default Contact;
