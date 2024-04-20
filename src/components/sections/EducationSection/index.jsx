import React, { useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";
import "./EducationSection.css";

const EducationSection = () => {
  const { educationData } = useContext(ApiContext);

  return (
    <div className="mt-4" id="education">
      <h2 className="text-center section-title">Education</h2>
      <div className="education-container">
        {educationData !== null &&
          educationData.map((item, index) => {
            return (
              <div key={index} className="education-item">
                <h3>{item.degree}</h3>
                <p>{item.location}</p>
                <p>Passing Year: {item.passing_year}</p>
                {item.grade && <p>Grade: {item.grade}</p>}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default EducationSection;
