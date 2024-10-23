import React, { useEffect, useState } from 'react';
import './Schemes.css';
import Navbar from '../components/navbar/Navbar';

const SchemeCard = ({ title, imageSrc, content, linkUrl, theme }) => (
  <div className={`scheme-card ${theme}`}>
    <img src={imageSrc} alt={title} className={`scheme-image ${theme}`} />
    <div className="scheme-content">
      <h2>{title}</h2>
      <div className={`scheme-text ${theme}`} dangerouslySetInnerHTML={{ __html: content }} />
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className={`site-refer ${theme}`}>
        Visit Site
      </a>
    </div>
  </div>
);

function Schemes() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme || 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  const schemes = [
    {
      title: "Central Sector Scheme for AYURGYAN",
      imageSrc: "/schemesimage1.jpg",
      content: `
        <p>The Ministry of AYUSH was implementing two separate schemes for the promotion of AYUSH's education and Research. It was proposed to merge both schemes under one umbrella scheme namely "AYURGYAN Scheme" which has two components:</p>
        <ol>
          <li>Capacity Building and Continuing Medical Education (CME) in AYUSH</li>
          <li>Research and Innovation in AYUSH</li>
        </ol>

        <h3>1. CAPACITY BUILDING AND CONTINUING MEDICAL EDUCATION (CME) IN AYUSH:</h3>
        <p>The overall structure of the Scheme is aimed to encourage AYUSH personnel to undergo need-based professional training and bridge the knowledge gaps. The objectives of the scheme are:</p>
        <ul>
          <li>To encourage AYUSH professionals to undergo need-based professional orientation and professional skill development in an organized manner.</li>
          <li>To update the professional knowledge of teachers and doctors to adopt good teaching practices and good clinical practices respectively.</li>
          <li>To encourage the use of Information technology and web-based education programmes for widespread dissemination of AYUSH developments and updates.</li>
        </ul>

        <h3>2. RESEARCH & INNOVATION IN AYUSH (erstwhile Extra Mural Research Scheme)</h3>
        <p>The Research and Innovation component was introduced to tap the potential of medical, scientific and research & development institution, university, organizations for the research needs of AYUSH sector, with aim to expand the ambit of research in AYUSH systems.</p>
        <p>Research and Innovation component AYURGYAN Scheme of Ministry of AYUSH is designed to encourage Research & Development in priority areas based on disease burden in alignment to National Health programme.</p>
        <p>The priority areas of support are:</p>
        <ul>
          <li>Fundamental concepts</li>
          <li>Basic principles</li>
          <li>Theories of AYUSH systems</li>
          <li>Standardization/validation of AYUSH drugs</li>
          <li>New drug development</li>
        </ul>
        <p>Outcomes of the Research Scheme have successfully demonstrated the effectiveness of AYUSH systems and were successful in developing novel technology and are expected to harness the potential of AYUSH in the interest of public health delivery.</p>
      `,
      linkUrl: "https://ngo.ayush.gov.in/ayurgyan"
    },
    {
      title: "Central Sector Scheme for Promotion of Information, Education, and Communication (IEC) in AYUSH",
      imageSrc: "/schemesimage2.png",
      content: `
        <p>The scheme aims to achieve several objectives related to AYUSH:</p>
        <ul>
          <li>Raise awareness among the community about the efficacy and cost-effectiveness of AYUSH practices, emphasizing the availability of herbal remedies for common ailments.</li>
          <li>Share the successful outcomes of research and development in AYUSH systems at national and international platforms.</li>
          <li>Facilitate interaction and collaboration among stakeholders through conferences, seminars, and fairs, fostering horizontal and vertical engagement.</li>
          <li>Encourage stakeholders to actively participate in these events to create a collaborative ecosystem for the AYUSH sector.</li>
        </ul>
      `,
      linkUrl: "https://ngo.ayush.gov.in/scheme2"
    }
  ];

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className={`schemes-container ${theme}`}>
        {schemes.map((scheme, index) => (
          <SchemeCard key={index} {...scheme} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default Schemes;