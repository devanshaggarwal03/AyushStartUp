import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './home.css';

function Home() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('current_theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className={`home-container ${theme}`}>
        <section className={`hero-section ${theme}`}>
          <h1>Welcome to the AYUSH Startup Registration Portal</h1>
          <p>Empowering Innovation in Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy</p>
          <button className="cta-button">Register Your AYUSH Startup Now</button>
        </section>

        <section className={`about-portal ${theme}`}>
          <h2>About the Portal</h2>
          <p>This portal simplifies AYUSH startup registration. It offers an intuitive interface for easy document submission and status tracking, streamlining your registration journey.</p>
        </section>

        <section className={`features-container ${theme}`}>
          <h2>Features</h2>
          <div className="features">
            {[
              { title: "Secure Authentication", description: "Protect your credentials with advanced encryption. Our secure login ensures your information remains confidential and safe from unauthorized access." },
              { title: "Status Tracking", description: "Monitor your application progress in real-time. Get timely updates and notifications to stay informed about your registration status effortlessly." },
              { title: "Document Management", description: "Upload and organize documents easily. Our platform provides a secure and efficient way to manage your compliance documents and ensure smooth processing." },
              { title: "Support & Resources", description: "Access helpful resources and FAQs. Our support team is available to assist with any questions, making the registration process as smooth as possible." }
            ].map((feature, index) => (
              <div key={index} className={theme}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`steps-container ${theme}`}>
          <h2>How It Works</h2>
          <div className="steps">
            {[
              { title: "1. Register/Login", description: "Create an account or log in to get started. This ensures secure and personalized access to the registration features." },
              { title: "2. Submit Application", description: "Fill out forms and upload documents. Our streamlined process simplifies application submission and reduces paperwork." },
              { title: "3. Track Status", description: "Keep track of your application's progress. Real-time updates and notifications keep you informed about any changes or requirements." },
              { title: "4. Get Approval", description: "Receive approval once your application is processed. Your startup will be officially registered in the AYUSH ecosystem." }
            ].map((step, index) => (
              <div key={index} className={theme}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`cta-section ${theme}`}>
          <h2>Ready to Register?</h2>
          <p>Join the AYUSH community and register your startup today. Our streamlined process and dedicated support ensure a smooth registration experience.</p>
          <button className="cta-button">Get Started</button>
        </section>
      </div>
    </div>
  );
}

export default Home;