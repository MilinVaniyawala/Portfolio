import axios from "axios";

const api = "https://nvdiamonds.in/resume/API/";

// Fetch User
export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${api}fetch_user_data.php`, {
      params: {
        user_id: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Fetch Skills
export const fetchSkillData = async (userId) => {
  try {
    const response = await axios.get(`${api}fetch_skill_data.php`, {
      params: {
        user_id: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching skill data:", error);
    return null;
  }
};

// Fetch Projects
export const fetchProjectData = async (userId) => {
  try {
    const response = await axios.get(`${api}fetch_project_data.php`, {
      params: {
        user_id: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
};

// Fetch Experience
export const fetchExperienceData = async (userId) => {
  try {
    const response = await axios.get(`${api}fetch_experience_data.php`, {
      params: {
        user_id: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching experience data:", error);
    return null;
  }
};

// Fetch Education
export const fetchEducationData = async (userId) => {
  try {
    const response = await axios.get(`${api}fetch_education_data.php`, {
      params: {
        user_id: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching education data:", error);
    return null;
  }
};

// Insert Contact Form Data
export const insertInquiryData = async (formData) => {
  try {
    const response = await axios.post(
      `${api}insert_inquiry_data.php`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error inserting inquiry data:", error);
    return {
      success: false,
      message: "An error occurred while submitting the inquiry.",
    };
  }
};
