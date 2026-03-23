import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const captchaInputRef = useRef(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!executeRecaptcha) {
      toast.error('Captcha not ready. Please try again.');
      return;
    }

    const token = await executeRecaptcha('contact_form');

    if (!token) {
      toast.error('Captcha failed. Please retry.');
      return;
    }

    if (captchaInputRef.current) {
      captchaInputRef.current.value = token;
    }
    setSubmitting(true);

    emailjs
      .sendForm(
       "service_l9uj6b9",
        "template_x3reatk",
        formRef.current,
        "Yawfaofskhwps-_9a"
      )
      .then(() => {
        toast.success('Inquiry sent successfully. We will reach out soon.');
        formRef.current.reset();
        if (captchaInputRef.current) {
          captchaInputRef.current.value = '';
        }
      })
      .catch(() => {
        toast.error('Unable to send right now. Please try again.');
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section className="section fade-up delay-2" id="contact">
      <div className="container contact-grid">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p className="contact-meta">Connect for cybersecurity consulting, Identity &amp; Access Management advisory, architecture reviews, and strategic security guidance.</p>

          <div className="contact-list">
            <div className="contact-item">
              <strong>Address</strong>
              <div className="contact-meta">Pune, Maharashtra, India</div>
            </div>
            <div className="contact-item">
              <strong>Email</strong>
              <div className="contact-meta"><a href="mailto:neerajshukla1897@gmail.com">neerajshukla1897@gmail.com</a></div>
            </div>
            <div className="contact-item">
              <strong>Follow Us</strong>
              <div className="contact-meta social-links">
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/neeraj-kumar-shukla-561782124/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow on LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      fill="currentColor"
                      d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5C1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.49 1 3.86 1 4.98 2.12 4.98 3.5zM.2 8.4h4.58V24H.2zM8.61 8.4h4.39v2.13h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.78v-7.22c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V24H8.61z"
                    />
                  </svg>
                </a>
                <a
                  className="social-link"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow on Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      fill="currentColor"
                      d="M21.54 7.2c.01.15.01.3.01.46 0 4.71-3.58 10.15-10.15 10.15-2.02 0-3.9-.59-5.48-1.6.28.03.57.05.86.05 1.67 0 3.21-.57 4.43-1.53a3.58 3.58 0 0 1-3.34-2.48c.22.04.45.06.69.06.33 0 .65-.04.95-.12a3.58 3.58 0 0 1-2.87-3.51v-.05c.48.27 1.03.43 1.62.45a3.58 3.58 0 0 1-1.6-2.98c0-.66.18-1.27.5-1.8a10.17 10.17 0 0 0 7.39 3.74 3.58 3.58 0 0 1 6.1-3.26 7.12 7.12 0 0 0 2.27-.87 3.6 3.6 0 0 1-1.58 1.98 7.16 7.16 0 0 0 2.05-.56 7.62 7.62 0 0 1-1.79 1.86z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="contact-item">
              <strong>Focus Areas</strong>
              <div className="contact-meta">IAM • Cybersecurity Risk Assessment • Zero Trust • Security Architecture • Compliance Strategy</div>
            </div>
            <div className="contact-item">
              <strong>Consultation Format</strong>
              <div className="contact-meta">Remote consulting, advisory workshops, architecture reviews, and implementation guidance</div>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <h3>Request a Consultation</h3>
          <p>Share your requirement and JM Consulting can connect with you for a focused discussion on access security, architecture, or cyber strategy.</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="field-grid">
              <input type="text" name="user_name" placeholder="Your name" aria-label="Your name" required />
              <input type="email" name="user_email" placeholder="Work email" aria-label="Work email" required />
            </div>
            <div className="field-grid">
              <input type="text" name="company" placeholder="Company" aria-label="Company" />
              <input type="text" name="topic" placeholder="Topic of interest" aria-label="Topic of interest" />
            </div>
            <textarea name="message" placeholder="Tell us about your requirement" aria-label="Requirement" required></textarea>
            <input type="hidden" name="g-recaptcha-response" ref={captchaInputRef} />
            <button type="submit" className="btn" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" newestOnTop closeOnClick pauseOnHover={false} autoClose={3500} theme="dark" />
    </section>
  );
};

export default Contact;
