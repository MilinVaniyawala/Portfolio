import React, { createContext, useState, useEffect } from "react";
import {
  fetchUserData,
  fetchEducationData,
  fetchSkillData,
  fetchProjectData,
  fetchExperienceData,
} from "../utils/api";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userId = 1; // Here user ID 1 means fetching data of user id 1 from the datatable
      const user = await fetchUserData(userId);
      const education = await fetchEducationData(userId);
      const skills = await fetchSkillData(userId);
      const projects = await fetchProjectData(userId);
      const experience = await fetchExperienceData(userId);

      setUserData(user);
      setEducationData(education);
      setSkillData(skills);
      setProjectData(projects);
      setExperienceData(experience);
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        userData,
        educationData,
        skillData,
        projectData,
        experienceData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
