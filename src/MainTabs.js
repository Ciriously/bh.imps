import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "./MainTabs.css";
import CustomDropdown from "./CustomDropdown";
import Tabs from "./Tabs";

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

  const universities = ["Mumbai University", "Gujarat Technical University"];
  const departments = [
    "Computer Science",
    "Information Technology",
    "Electronics and Telecommunication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
  ];
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

  const subjectToPdfMapping = {
    "Data Structures": "./sample.pdf",
    Algorithms: "/pdfs/algorithms.pdf",
    "Programming in C++": "/pdfs/cplusplus.pdf",
    "Java Programming": "./java.pdf",
    "Python Programming": "./py.pdf",
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

  const isMobile = window.innerWidth <= 768;
  const responsiveUniversities = isMobile
    ? ["MU", "GTU"]
    : ["Mumbai University", "Gujarat Technical University"];
  const responsiveSemesters = isMobile
    ? ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"]
    : [
        "Semester 1",
        "Semester 2",
        "Semester 3",
        "Semester 4",
        "Semester 5",
        "Semester 6",
        "Semester 7",
        "Semester 8",
      ];

  const responsivedepartments = isMobile
    ? ["CMPN", "INFT", "EXTC", "ELEC", "MECH", "CIVIL"]
    : [
        "Computer Science",
        "Information Technology",
        "Electronics and Telecommunication",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
      ];

  return (
    <div className="main-tabs">
      <CustomDropdown
        label="University"
        options={responsiveUniversities}
        value={selectedOptions.university}
        onChange={(value) =>
          setSelectedOptions({ ...selectedOptions, university: value })
        }
      />
      <CustomDropdown
        label="Department"
        options={responsivedepartments}
        value={selectedOptions.department}
        onChange={(value) =>
          setSelectedOptions({ ...selectedOptions, department: value })
        }
      />
      <CustomDropdown
        label="Semester"
        options={responsiveSemesters}
        value={selectedOptions.semester}
        onChange={(value) =>
          setSelectedOptions({ ...selectedOptions, semester: value })
        }
      />
      <span className="subject-label">Subjects:</span>
      <CustomDropdown
        label="Subject"
        options={Object.keys(subjectToPdfMapping)}
        value={selectedOptions.subject}
        onChange={(value) =>
          setSelectedOptions({ ...selectedOptions, subject: value })
        }
      />
      <Tabs />
      <div className="pdf-container">
        {pdfFile ? (
          <Document
            file={pdfFile}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {pages}
          </Document>
        ) : (
          <div className="unavailable-text">
            IMPs are not uploaded yet!!!
            <br /> Do you need this urgently?
            <br />
            <span className="blue-text">DM us on Instagram</span>
          </div>
        )}
      </div>
    </div>
  );
}
