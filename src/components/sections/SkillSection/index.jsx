import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { ApiContext } from "../../../context/ApiContext";
import "./SkillSection.css";

const SkillSection = () => {
  const { skillData } = useContext(ApiContext);

  return (
    <div className="mt-4" id="skills">
      <h2 className="text-center section-title">Skills</h2>
      <Row className="d-flex align-items-center justify-content-center custom-gutter-x">
        {skillData !== null &&
          skillData.map((skill, index) => (
            <Col
              xs={6}
              lg={1}
              md={2}
              sm={4}
              key={index}
              className="mb-4 skill-item"
            >
              <img src={skill.icon} alt={skill.title} />
              <p>{skill.title}</p>
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default SkillSection;
