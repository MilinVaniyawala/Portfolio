import { useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";
import "./ProjectSection.css";

const ProjectSection = () => {
  const { projectData } = useContext(ApiContext);

  return (
    <div className="mt-4" id="projects">
      <h2 className="text-center section-title">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 custom-gutter-x">
        {projectData !== null &&
          projectData.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <a
                href={project.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <div className="card h-100 project-card">
                  <img
                    className="card-img-top project-img"
                    src={project.image}
                    alt={project.project_name}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{project.project_name}</h4>
                    <p className="card-text">{project.technologies_stack}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ProjectSection;
