import React, { useState } from "react";

interface ContactFormData {
  backTitle: string;
  title: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderSubject: string;
  placeholderMessage: string;
  textSubmit: string;
  myEmail: string;
  last: boolean;
}

const EditContact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    backTitle: "Contact Information",
    title: "Get in Touch",
    placeholderName: "Your Name",
    placeholderEmail: "Your Email",
    placeholderSubject: "Subject",
    placeholderMessage: "Message",
    textSubmit: "Send Message",
    myEmail: "example@email.com",
    last: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1>Edit Contact Form</h1>
      <form>
        <div className="mb-4">
          <label className="form-label">Back Title</label>
          <input
            type="text"
            className="form-control"
            name="backTitle"
            value={formData.backTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Placeholder Name</label>
          <input
            type="text"
            className="form-control"
            name="placeholderName"
            value={formData.placeholderName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Placeholder Email</label>
          <input
            type="email"
            className="form-control"
            name="placeholderEmail"
            value={formData.placeholderEmail}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Placeholder Subject</label>
          <input
            type="text"
            className="form-control"
            name="placeholderSubject"
            value={formData.placeholderSubject}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Placeholder Message</label>
          <input
            type="text"
            className="form-control"
            name="placeholderMessage"
            value={formData.placeholderMessage}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Submit Button Text</label>
          <input
            type="text"
            className="form-control"
            name="textSubmit"
            value={formData.textSubmit}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">My Email</label>
          <input
            type="email"
            className="form-control"
            name="myEmail"
            value={formData.myEmail}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditContact;
