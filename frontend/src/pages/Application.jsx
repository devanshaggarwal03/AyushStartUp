import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import "./Application.css";

function Application() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    startupName: "",
    founderName: "",
    email: "",
    phoneNumber: "",
    website: "",
    description: "",
    ayushDomain: "",
    dateOfIncorporation: "",
    address: "",
    businessModel: "",
    documents: {
      companyRegistration: null,
      panCard: null,
      aadhaarCard: null,
      proofOfAddress: null,
      licenses: null,
      ayushCertifications: null,
      moaAOA: null,
      gstCertificate: null,
      bankDetails: null,
      qualityAssurance: null,
      rAndD: null,
      complianceCertificates: null,
      declarationOfCompliance: null,
      lettersOfIntent: null,
    },
  });
  const [showDocuments, setShowDocuments] = useState(false);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e, docType) => {
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [docType]: e.target.files[0],
      },
    });
  };

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const Page1 = () => (
    <div className="basic-info">
      <h2>Basic Information</h2>
      <label>Startup Name*</label>
      <input
        type="text"
        name="startupName"
        value={formData.startupName}
        onChange={handleChange}
      />

      <label>Founder Name*</label>
      <input
        type="text"
        name="founderName"
        value={formData.founderName}
        onChange={handleChange}
      />

      <label>Email Address*</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Phone Number*</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <label>Website</label>
      <input
        type="url"
        name="website"
        value={formData.website}
        onChange={handleChange}
      />

      <div className="pagination-buttons">
        <button type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );

  const Page2 = () => (
    <div className="business-info">
      <h2>Business Information</h2>
      <label>Description of your Startup*</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>AYUSH Domain*</label>
      <select
        name="ayushDomain"
        value={formData.ayushDomain}
        onChange={handleChange}
      >
        <option value="">Select Domain</option>
        <option value="Ayurveda">Ayurveda</option>
        <option value="Yoga">Yoga</option>
        <option value="Naturopathy">Naturopathy</option>
        <option value="Unani">Unani</option>
        <option value="Siddha">Siddha</option>
        <option value="Homeopathy">Homeopathy</option>
      </select>

      <label>Date of Incorporation*</label>
      <input
        type="date"
        name="dateOfIncorporation"
        value={formData.dateOfIncorporation}
        onChange={handleChange}
      />

      <label>Business Model*</label>
      <select
        name="businessModel"
        value={formData.businessModel}
        onChange={handleChange}
      >
        <option value="">Select Model</option>
        <option value="B2B">B2B</option>
        <option value="B2C">B2C</option>
        <option value="D2C">D2C</option>
      </select>

      <div className="pagination-buttons">
        <button type="button" onClick={prevPage}>
          Previous
        </button>
        <button type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );

  const Page3 = () => (
    <div className="document-form">
      <h2>Upload Documents</h2>
      <label>Company Registration Documents*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "companyRegistration")}
      />

      <label>PAN Card*</label>
      <input type="file" onChange={(e) => handleFileChange(e, "panCard")} />

      <label>Aadhaar Card*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "aadhaarCard")}
      />

      <label>Proof of Address*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "proofOfAddress")}
      />

      <label>License and Certifications*</label>
      <input type="file" onChange={(e) => handleFileChange(e, "licenses")} />

      <label>AYUSH-specific Certifications*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "ayushCertifications")}
      />

      <label>MOA and AOA*</label>
      <input type="file" onChange={(e) => handleFileChange(e, "moaAOA")} />

      <label>GST Registration Certificate*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "gstCertificate")}
      />

      <label>Bank Account Details*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "bankDetails")}
      />

      <label>Quality Assurance Documentation*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "qualityAssurance")}
      />

      <label>Research and Development Details*</label>
      <input type="file" onChange={(e) => handleFileChange(e, "rAndD")} />

      <label>Compliance Certificates*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "complianceCertificates")}
      />

      <label>Declaration of Compliance*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "declarationOfCompliance")}
      />

      <label>Letters of Intent or Agreements*</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(e, "lettersOfIntent")}
      />

      <div className="pagination-buttons">
        <button type="button" onClick={prevPage}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
    </div>
  );

  return (
    <div className={`application-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form-container">
          {page === 1 && <Page1 />}
          {page === 2 && <Page2 />}
          {page === 3 && <Page3 />}
        </form>
      </div>
    </div>
  );
}

export default Application;
