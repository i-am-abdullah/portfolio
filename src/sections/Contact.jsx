import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = ({reff}) => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    subject: '',
    message: '' 
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbytEQBBYByYqfUNaGze3Pvfxaza2gFFtwJrc4sdq2p4M-x_-C4XDbH6V9CmtSr5GZUEfw/exec';

      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('subject', form.subject);
      formData.append('message', form.message);
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setLoading(false);
        showAlert({
          show: true,
          text: 'Thank you for your message 😃',
          type: 'success',
        });

        setTimeout(() => {
          hideAlert(false);
          setForm({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      showAlert({
        show: true,
        text: "Failed to send message 😢",
        type: 'danger',
      });
    }
  };

  return (
    <section className="c-space my-20" id="contact" ref={reff}>
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen hidden lg:block" />

        <div className="contact-container pt-12">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            {/* First row: Name and Email */}
            <div className="flex flex-col md:flex-row gap-7">
              <div className="flex-1">
                <label className="space-y-3 block">
                  <span className="field-label">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input w-full"
                    placeholder="ex., John Doe"
                  />
                </label>
              </div>
              <div className="flex-1">
                <label className="space-y-3 block">
                  <span className="field-label">Email address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input w-full"
                    placeholder="ex., johndoe@gmail.com"
                  />
                </label>
              </div>
            </div>

            {/* Second row: Phone and Subject */}
            <div className="flex flex-col md:flex-row gap-7">
              <div className="flex-1">
                <label className="space-y-3 block">
                  <span className="field-label">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="field-input w-full"
                    placeholder="ex., +1 (555) 123-4567"
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    title="Please enter a valid phone number"
                  />
                </label>
              </div>
              <div className="flex-1">
                <label className="space-y-3 block">
                  <span className="field-label">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="field-input w-full"
                    placeholder="ex., Project Inquiry"
                  />
                </label>
              </div>
            </div>

            {/* Message textarea */}
            <label className="space-y-3 block">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input w-full"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;