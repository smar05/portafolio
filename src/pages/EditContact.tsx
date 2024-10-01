import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";
import { Icontact } from "../interfaces/Icontact";
import { BackService, EnumDbEndPoints } from "../services/back";

const EditContact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Icontact>({
    _id: "",
    backTitle: "",
    title: "",
    placeholderName: "",
    placeholderEmail: "",
    placeholderSubject: "",
    placeholderMessage: "",
    textSubmit: "",
    myEmail: "",
    last: true,
  });

  const [dbContact, setDbContact] = useState<Icontact>(null as any);

  useEffect(() => {
    consultarInfo();
  }, []);

  function consultarInfo(): void {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(
          EnumDbEndPoints.CONTACT_ME
        );
        setDbContact(response.data);
        setFormData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let resContact;
    try {
      resContact = await BackService.putData(
        `${EnumDbEndPoints.CONTACT_ME}/${dbContact._id}`,
        formData
      );
    } catch (error) {
      alert("An error has occurred updating the information");
      return;
    }

    if (!resContact?.data.actualizado) {
      alert("An error has occurred updating the information");
      return;
    }

    alert("The information has been updated");
    navigate(EnumPages.ADMIN);
  };

  return (
    <div className="container">
      <h1>Edit Contact Form</h1>
      <form onSubmit={handleSubmit}>
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
            type="text"
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
