import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "./MainTabs.css";

export default function MainTabs() {
  const [numPages, setNumPages] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    university: "",
    department: "",
    semester: "",
    subject: "",
  });

  const [pdfFile, setPdfFile] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pageWidth = 800;
  const pageHeight = 1000;

  const universities = ["University of Mumbai", "University of Pune"];
  const departments = ["Computer Science", "Information Technology"];
  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  // Mapping of subjects to PDF files
  const subjectToPdfMapping = {
    "Data Structures": "./sample.pdf",
    Algorithms: "/pdfs/algori",
    "Programming in C++": "/pdfs/cplusplus.pdf",
    "Java Programming": "./py.pdf",
    "Python Programming": "./ada.pdf",
  };

  useEffect(() => {
    const pdfFilePath = determinePdfFilePath(selectedOptions);
    setPdfFile(pdfFilePath);
  }, [selectedOptions]);

  const determinePdfFilePath = (selectedOptions) => {
    const { subject } = selectedOptions;
    return subjectToPdfMapping[subject] || null;
  };

  const pages = Array.from(new Array(numPages), (el, index) => (
    <Page
      key={`page_${index + 1}`}
      pageNumber={index + 1}
      width={pageWidth}
      height={pageHeight}
    />
  ));

  return (
    <div className="main-tabs">
      <select
        onChange={(e) =>
          setSelectedOptions({
            ...selectedOptions,
            university: e.target.value,
          })
        }
        value={selectedOptions.university}
      >
        <option value="">Select a university</option>
        {universities.map((university, index) => (
          <option key={index} value={university}>
            {university}
          </option>
        ))}
      </select>
      <select
        onChange={(e) =>
          setSelectedOptions({
            ...selectedOptions,
            department: e.target.value,
          })
        }
        value={selectedOptions.department}
      >
        <option value="">Select a department</option>
        {departments.map((department, index) => (
          <option key={index} value={department}>
            {department}
          </option>
        ))}
      </select>
      <select
        onChange={(e) =>
          setSelectedOptions({
            ...selectedOptions,
            semester: e.target.value,
          })
        }
        value={selectedOptions.semester}
      >
        <option value="">Select a semester</option>
        {semesters.map((semester, index) => (
          <option key={index} value={semester}>
            {semester}
          </option>
        ))}
      </select>
      <span className="subject-label">Subjects:</span>
      <select
        id="subject"
        onChange={(e) =>
          setSelectedOptions({
            ...selectedOptions,
            subject: e.target.value,
          })
        }
        value={selectedOptions.subject}
      >
        <option value="">Select a subject</option>
        {Object.keys(subjectToPdfMapping).map((subject, index) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </select>
      <div className="pdf-reader">
        {pdfFile ? (
          <Document
            file={pdfFile}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {pages}
          </Document>
        ) : (
          <p>This is the pdf reader div.</p>
        )}
      </div>
    </div>
  );
}
