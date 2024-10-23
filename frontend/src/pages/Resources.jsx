import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './Resources.css'; 

function Resources() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Resources page content */}
      <div className="resources-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Resources for AYUSH Startups</h1>
          <p>Explore valuable information and guidance to support your startup journey in the AYUSH sector.</p>
        </div>

        {/* Resource Categories */}
        <div className="resource-category">
          <h2>Explore Our Resources</h2>
          <div className="category">
            <h3>Regulatory Guidelines</h3>
            <p>Understand key regulations and compliance requirements.</p>
            <ul>
              <li><a href="#guidelines-doc">Guidelines Document</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#regulatory-links">Regulatory Links</a></li>
            </ul>
          </div>
          <div className="category">
            <h3>Application Assistance</h3>
            <p>Guides and tutorials for the registration process.</p>
            <ul>
              <li><a href="#application-guide">Application Guide</a></li>
              <li><a href="#video-tutorials">Video Tutorials</a></li>
              <li><a href="#sample-forms">Sample Forms</a></li>
            </ul>
          </div>
          <div className="category">
            <h3>Technical Support</h3>
            <p>Assistance with technical issues related to the portal.</p>
            <ul>
              <li><a href="#troubleshooting-guide">Troubleshooting Guide</a></li>
              <li><a href="#technical-support-contact">Technical Support Contact</a></li>
              <li><a href="#live-chat">Live Chat</a></li>
            </ul>
          </div>
          <div className="category">
            <h3>Funding and Grants</h3>
            <p>Information on funding opportunities and grants.</p>
            <ul>
              <li><a href="#funding-opportunities-list">Funding Opportunities List</a></li>
              <li><a href="#application-tips">Application Tips</a></li>
              <li><a href="#funding-bodies">Links to Funding Bodies</a></li>
            </ul>
          </div>
          <div className="category">
            <h3>Networking and Community</h3>
            <p>Connect with the AYUSH startup community.</p>
            <ul>
              <li><a href="#community-forums">Community Forums</a></li>
              <li><a href="#events-calendar">Events Calendar</a></li>
              <li><a href="#success-stories">Success Stories</a></li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          {[ 
            { question: "What is the AYUSH Startup Registration Portal?", answer: "The AYUSH Startup Registration Portal is a platform designed to facilitate the registration of startups in the AYUSH (Ayurveda, Yoga, Unani, Siddha, and Homeopathy) sector." },
            { question: "Who can register on the portal?", answer: "Any individual or group with a startup related to AYUSH can register on the portal." },
            { question: "How do I register my startup?", answer: "To register, click on the 'Register' button, fill out the required details, and submit the form." },
            { question: "Is there a registration fee?", answer: "No, registration on the portal is free of cost." },
            { question: "What documents are needed for registration?", answer: "You will need documents such as a business plan, founder details, and other necessary startup credentials." },
            { question: "How long does it take to get approval?", answer: "The approval process usually takes between 2 to 4 weeks." },
            { question: "Can I update my startup details after registration?", answer: "Yes, you can log in to your account and update your details anytime." },
            { question: "How can I contact support?", answer: "You can contact support by emailing us at support@ayushstartup.com or using the contact form on the website." },
            { question: "What are the benefits of registering on this portal?", answer: "Registered startups gain access to government schemes, grants, and mentorship programs." },
            { question: "Is the portal only for Indian startups?", answer: "Yes, the AYUSH Startup Registration Portal is currently open for Indian startups only." }
          ].map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={`arrow ${openIndex === index ? 'open' : ''}`}></span>
              </h3>
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="contact">
          <h2>Need More Help?</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
          <p>For additional support, you can also contact us via:</p>
          <p>Email: support@ayushportal.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
