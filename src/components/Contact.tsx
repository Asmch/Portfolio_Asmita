import React, { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/asmitachoudhary08@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="eyebrow"><span className="num">06</span> // contact</div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-status"><span className="dot"></span>Currently available</div>
            <h3>Let's build something</h3>
            <p>Open to full-time roles and freelance work. Usually replies within a day.</p>
            
            <div className="info-item">
              <div className="ii-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg></div>
              <div><span className="ii-label">email</span><div className="ii-value">asmitachoudhary08@gmail.com</div></div>
            </div>
            <div className="info-item">
              <div className="ii-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
              <div><span className="ii-label">phone</span><div className="ii-value">+91 7061333651</div></div>
            </div>
            <div className="info-item">
              <div className="ii-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div><span className="ii-label">location</span><div className="ii-value">India · Available for remote work</div></div>
            </div>
            <div className="info-item">
              <div className="ii-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><span className="ii-label">response time</span><div className="ii-value">12–24 hours</div></div>
            </div>
            
            <div className="contact-social">
              <a href="https://github.com/Asmch" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/asmita-x/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://drive.google.com/file/d/1PNyzIyKl4qhZuoRkPsabNtA1aYScdGLO/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
          
          <div className="contact-form-card reveal">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div><label>Name</label><input type="text" name="name" placeholder="Your full name" required /></div>
                <div><label>Email</label><input type="email" name="email" placeholder="you@example.com" required /></div>
              </div>
              <div><label>Subject</label><input type="text" name="subject" placeholder="What's this regarding?" required /></div>
              <div><label>Message</label><textarea name="message" placeholder="Tell me about your project or how I can help..." required></textarea></div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;