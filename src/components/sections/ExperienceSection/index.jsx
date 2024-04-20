import { useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const { experienceData } = useContext(ApiContext);

  return (
    <div className="container" id="experience">
      <div className="experience-section">
        <h2 className="text-center section-title">Work Experience</h2>
        <div className="experience-container">
          {experienceData !== null &&
            experienceData.map((experience, index) => {
              const startDate = new Date(experience.start_date).getFullYear();
              const endDate = new Date(experience.end_date).getFullYear();
              return (
                <div
                  key={index}
                  className={`experience-card ${
                    index % 2 === 0 ? "even" : "odd"
                  }`}
                >
                  <div className="icon-container">
                    <img
                      src={experience.icon_of_company}
                      alt="Company Icon"
                      className={
                        experience.company_name !== "Letmegrab"
                          ? "company-icon"
                          : "company-icon-modify"
                      }
                    />
                  </div>
                  <div className="experience-details">
                    <h3 className="company-name">{experience.company_name}</h3>
                    <p className="position">{experience.position}</p>
                    <p className="company-address">
                      {experience.company_address}
                    </p>
                    <p className="experience-years">
                      {startDate} - {endDate}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ExperienceSection;
