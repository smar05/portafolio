import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";
import { IaboutMe } from "../interfaces/IaboutMe";
import { Alert } from "../services/alert";
import { BackService, EnumDbEndPoints } from "../services/back";

interface AboutMe {
  backTitle: string;
  title: string;
  subTitle: string;
  content: string;
  name: string;
  degree: string;
  birthday: string;
  experienceSince: number;
  phone: string;
  email: string;
  freelance: string;
  last: boolean;
}

const EditAboutMe: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AboutMe>({
    backTitle: "",
    title: "",
    subTitle: "",
    content: "",
    name: "",
    degree: "",
    birthday: "",
    experienceSince: 0,
    phone: "",
    email: "",
    freelance: "",
    last: false,
  });
  const [dbAboutMe, setDbAboutMe] = useState<IaboutMe>(null as any);

  useEffect(() => {
    consultarInfo();
  }, []);

  function consultarInfo(): void {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(EnumDbEndPoints.ABOUT_ME);
        setDbAboutMe(response.data);
        setFormData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let resAboutMe;
    try {
      resAboutMe = await BackService.putData(
        `${EnumDbEndPoints.ABOUT_ME}/${dbAboutMe._id}`,
        formData
      );
    } catch (error) {
      Alert.basicAlert(
        "Error",
        "An error has occurred updating the information",
        "error"
      );
    }

    if (!resAboutMe?.data.actualizado) {
      Alert.basicAlert(
        "Error",
        "An error has occurred updating the information",
        "error"
      );
      return;
    }

    Alert.basicAlert("Success", "The information has been updated", "success");
    navigate(EnumPages.ADMIN);
  };

  return (
    <div className="container mt-4">
      <h2>Edit About Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="backTitle" className="form-label">
            Background Title
          </label>
          <input
            type="text"
            id="backTitle"
            name="backTitle"
            className="form-control"
            value={formData.backTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subTitle" className="form-label">
            Subtitle
          </label>
          <input
            type="text"
            id="subTitle"
            name="subTitle"
            className="form-control"
            value={formData.subTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="degree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            className="form-control"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="birthday" className="form-label">
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="form-control"
            value={formData.birthday}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="experienceSince" className="form-label">
            Experience Since (Year)
          </label>
          <input
            type="number"
            id="experienceSince"
            name="experienceSince"
            className="form-control"
            value={formData.experienceSince}
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
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
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
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="freelance" className="form-label">
            Freelance Availability
          </label>
          <input
            type="text"
            id="freelance"
            name="freelance"
            className="form-control"
            value={formData.freelance}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditAboutMe;
