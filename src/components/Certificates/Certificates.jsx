import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

// import images (correct relative paths from this file)
import javaImg from "../../assets/certificates/java.png";
import dsaImg from "../../assets/certificates/dsa.png";
import webImg from "../../assets/certificates/web_development.png";
import genAIImg from "../../assets/certificates/Gen_AI.png";
import cloudImg from "../../assets/certificates/cloud_computing.png";
import backendImg from "../../assets/certificates/backend.png";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Java FullStack",
      image: javaImg,               // use imported variable
      date: "July 2025",
      issuedBy: "Cipher Schools",
      credentialLink: "https://drive.google.com/file/d/1RyMCxJwpXTANbfrDLSX1stC7KBMVcw6W/view?usp=drive_link",
      description:
        "This certificate demonstrates my successful completion of the Java Full Stack Development program offered by Cipher Schools..."
    },
    {
      id: 2,
      title: "Data Structures and Algorithms - Self-Paced",
      image: dsaImg,
      date: "August 2024",
      issuedBy: "GeeksforGeeks",
      credentialLink: "https://drive.google.com/file/d/1o7ldjhC928wUSbJ3BzBLaZKcvT9qQzce/view?usp=drive_link",
      description:
        "Successfully completed a comprehensive 16-week Data Structures and Algorithms course..."
    },
    {
      id: 3,
      title: "HTML, CSS, JavaScript for Web Developers",
      image: webImg,
      date: "March 2024",
      issuedBy: "Johns Hopkins University",
      credentialLink: "https://drive.google.com/file/d/1igMkuFHIqrlXdc3MFG9MzxF5xdDAnfKz/view?usp=drive_link",
      description:
        "Successfully completed the HTML, CSS, and JavaScript for Web Developers course..."
    },
    {
      id: 4,
      title: "Generative AI for Everyone",
      image: genAIImg,
      date: "January 2024",
      issuedBy: "Coursera",
      credentialLink: "https://drive.google.com/file/d/1obXClmz4No-taERT8dq50ll5-JR27K-6/view?usp=drive_link",
      description:
        "Successfully completed the Generative AI for Everyone course..."
    },
    {
      id: 5,
      title: "Cloud Computing",
      image: cloudImg,
      date: "June 2023",
      issuedBy: "IIT Kharagpur",
      credentialLink: "https://drive.google.com/file/d/1MNZfb7ZhKKMMqHKRW1v2A3uj93g9KFH0/view?usp=drive_link",
      description:
        "Successfully completed the NPTEL Online Certification in Cloud Computing..."
    },
    {
      id: 6,
      title: "Server side JavaScript with Node.js",
      image: backendImg,
      date: "March 2024",
      issuedBy: "Coursera",
      credentialLink: "https://drive.google.com/file/d/1KP3Vz6CUmxWbcpO_JtwTiMOOduokKXII/view?usp=drive_link",
      description:
        "I completed the Server Side JavaScript with Node.js course..."
    }
  ];

  // ...the rest of your component stays the same
  // (no /src/ prefixes anywhere)


  return (
    <section id="certificates" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">
      <div className="text-center">
        <h2 className="text-4xl font-bold dark:text-content-dark text-content-light">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-primary mx-auto mt-4"></div>
        <p className="dark:text-gray-400 text-gray-600 mt-4 text-lg font-semibold">
          My Professional Certifications and Achievements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            onClick={() => setSelectedCertificate(certificate)}
            className="border border-primary dark:bg-surface-dark bg-surface-light backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative aspect-video">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold dark:text-content-dark text-content-light mb-2">
                {certificate.title}
              </h3>
              <p className="dark:text-gray-500 text-gray-600 text-sm mb-4">
                {certificate.date} • {certificate.issuedBy}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center dark:bg-black/90 bg-black/50 p-4">
          <div className="dark:bg-surface-dark bg-surface-light rounded-xl shadow-lg lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10"
            >
              <FiX className="text-2xl dark:text-content-dark text-content-light hover:text-primary transition-colors" />
            </button>

            <div className="p-6">
              <div className="w-full flex justify-center dark:bg-surface-dark bg-surface-light px-4">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold dark:text-content-dark text-content-light mb-2">
                  {selectedCertificate.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-600 mb-4">
                  {selectedCertificate.date} • {selectedCertificate.issuedBy}
                </p>
                <p className="dark:text-gray-400 text-gray-600 mb-6">
                  {selectedCertificate.description}
                </p>
                <a
                  href={selectedCertificate.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;