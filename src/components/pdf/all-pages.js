import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "./AllPages.css";
import Logo from "./bh_logo.png";

export default function AllPages() {
  const [numPages, setNumPages] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [pdfFile, setPdfFile] = useState("./sample.pdf"); // Initial PDF file

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pageWidth = 800;
  const pageHeight = 1000;

  // Your department data here
  const departments = [
    {
      name: "Computer Science",
      semesters: [
        {
          semesterNumber: 1,
          subjects: [
            "Programming Fundamentals",
            "Mathematics for Computer Science",
          ],
        },
        {
          semesterNumber: 2,
          subjects: ["Data Structures and Algorithms", "Computer Architecture"],
        },
      ],
    },
    {
      name: "Mechanical Engineering",
      semesters: [
        {
          semesterNumber: 1,
          subjects: ["Engineering Mechanics", "Engineering Drawing"],
        },
        {
          semesterNumber: 2,
          subjects: ["Thermodynamics", "Machine Design"],
        },
      ],
    },
  ];

  useEffect(() => {
    // Logic to change the displayed subject based on selectedSubject
    // You can set the selected subject in your state and update the component's behavior accordingly
  }, [selectedSubject]);

  const handlePdfSwitch = () => {
    // Function to switch the PDF file
    if (pdfFile === "./sample.pdf") {
      setPdfFile("./pp1.pdf"); // Set the path to the second PDF
    } else {
      setPdfFile("./sample.pdf"); // Set the path back to the first PDF
    }
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
    <div className="pdf-container">
      <div className="departments-section">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="section-title">
          <h2>Brainheaters imps</h2>
        </div>
        {departments.map((department, departmentIndex) => (
          <div key={departmentIndex} className="department-item">
            <h3>{department.name}</h3>
            <select
              onChange={(e) => setSelectedSubject(e.target.value)}
              value={selectedSubject}
            >
              <option value="">Select a subject</option>
              {department.semesters.map((semester, semesterIndex) => (
                <optgroup
                  key={semesterIndex}
                  label={`Semester ${semester.semesterNumber}`}
                >
                  {semester.subjects.map((subject, subjectIndex) => (
                    <option key={subjectIndex}>{subject}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <select onChange={handlePdfSwitch}>
              <option value="./sample.pdf">PDF 1</option>
              <option value="./pp1.pdf">PDF 2</option>
            </select>
          </div>
        ))}
      </div>
      <Document
        file={pdfFile} // Use the selected PDF file
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {pages}
      </Document>
    </div>
  );
}
