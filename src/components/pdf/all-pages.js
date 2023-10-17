import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "./AllPages.css";
import Logo from "./bh_logo.png";

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  const pageWidth = 800;
  const pageHeight = 1000;

  const departments = [
    {
      name: "Department 1",
      semesters: [
        {
          semesterNumber: 1,
          subjects: ["Subject A", "Subject B", "Subject C"],
        },
        {
          semesterNumber: 2,
          subjects: ["Subject X", "Subject Y", "Subject Z"],
        },
        // Add more semesters as needed
      ],
    },
    {
      name: "Department 2",
      semesters: [
        {
          semesterNumber: 1,
          subjects: ["Subject 1", "Subject 2", "Subject 3"],
        },
        {
          semesterNumber: 2,
          subjects: ["Subject I", "Subject II", "Subject III"],
        },
        // Add more semesters as needed
      ],
    },
    // Add more departments as needed
  ];

  useEffect(() => {
    // Logic to change the displayed subject based on selectedSubject
    // You can set the selected subject in your state and update the component's behavior accordingly
  }, [selectedSubject]);

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
          </div>
        ))}
      </div>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {pages}
      </Document>
    </div>
  );
}
