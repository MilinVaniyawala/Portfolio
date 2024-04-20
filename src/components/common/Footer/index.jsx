import { useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const { userData } = useContext(ApiContext);
  const githubLink = "https://github.com/MilinVaniyawala";
  const linkedinLink = "https://www.linkedin.com/in/milin-vaniyawala-510aa7141";

  return (
    <>
      {userData && (
        <footer className="bg-dark text-light py-4 mt-4">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <h5>Contact Information</h5>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
              </div>
              <div className="col-md-4">
                <h5>Connect with Me</h5>
                <p>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link px-2"
                  >
                    <FaGithub className="social-icon" size={32} />
                  </a>
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link px-2"
                  >
                    <FaLinkedin className="social-icon" size={32} />
                  </a>
                </p>
                <h5>Download Resume</h5>
                <p>
                  <a
                    href={userData.resume_upload}
                    download
                    className="footer-link"
                  >
                    Resume
                  </a>
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-center">
              <p>
                &copy; {new Date().getFullYear()} {userData.fname}{" "}
                {userData.lname}. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
export default Footer;
