import { useState } from 'react';
import '../styles/contactform.css';

export default function NewsletterSignup({
  title = "Subscribe to our Newsletter",
  subtitle = "Get updates about wellness, promotions, and more.",
  placeholder = "Enter your email",
  buttonText = "Subscribe"
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Replace with actual email service logic here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="newsletter-container">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{buttonText}</button>
      </form>
      {submitted && <p className="thank-you-msg">Thanks for subscribing!</p>}
    </div>
  );
}