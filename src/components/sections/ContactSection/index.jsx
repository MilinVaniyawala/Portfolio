import { useContext, useState } from "react";
import { InsertContext } from "../../../context/InsertContext";
import "./ContactSection.css";

const ContactSection = () => {
  const insertInquiry = useContext(InsertContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      await insertInquiry(formData);
      // On Submit Form Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        comment: "",
      });
      console.log("Inquiry submitted successfully!");
    } catch (exception) {
      console.error("Error submitting inquiry:", exception);
    }
  };

  return (
    <div className="container" id="contact">
      <h2 className="text-center section-title">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <textarea
            className="form-control"
            id="comment"
            name="comment"
            rows="4"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactSection;
