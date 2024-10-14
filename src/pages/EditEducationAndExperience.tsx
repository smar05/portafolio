import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";
import {
  IEducation,
  IeducationAndExperience,
  IExperience,
} from "../interfaces/IeducationAndExperience";
import { Alert } from "../services/alert";
import { BackService, EnumDbEndPoints } from "../services/back";

const defaultEducation: IEducation = {
  name: "",
  school: "",
  begin: "",
  end: "",
  description: "",
};

const defaultExperience: IExperience = {
  name: "",
  company: "",
  begin: "",
  end: "",
  time: "",
  description: "",
};

const EditEducationAndExperience = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IeducationAndExperience>({
    _id: "",
    backTitle: "",
    title: "",
    educationSection: {
      title: "",
      education: [defaultEducation],
    },
    experienceSection: {
      title: "",
      experience: [defaultExperience],
    },
  });

  const [dbEAE, setDbEAE] = useState<IeducationAndExperience>(null as any);

  useEffect(() => {
    consultarInfo();
  }, []);

  function consultarInfo(): void {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(
          EnumDbEndPoints.EDUCATION_AND_EXPERIENCE
        );
        setDbEAE(response.data);
        setFormData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: "education" | "experience",
    index: number,
    field: string
  ) => {
    const { value } = e.target;

    if (section === "education") {
      const updatedEducation = [...formData.educationSection.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      };
      setFormData({
        ...formData,
        educationSection: {
          ...formData.educationSection,
          education: updatedEducation,
        },
      });
    } else if (section === "experience") {
      const updatedExperience = [...formData.experienceSection.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      };
      setFormData({
        ...formData,
        experienceSection: {
          ...formData.experienceSection,
          experience: updatedExperience,
        },
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addNewEducation = () => {
    setFormData((prevState) => ({
      ...prevState,
      educationSection: {
        ...prevState.educationSection,
        education: [...prevState.educationSection.education, defaultEducation],
      },
    }));
  };

  const addNewExperience = () => {
    setFormData((prevState) => ({
      ...prevState,
      experienceSection: {
        ...prevState.experienceSection,
        experience: [
          ...prevState.experienceSection.experience,
          defaultExperience,
        ],
      },
    }));
  };

  const removeItem = (section: "education" | "experience", index: number) => {
    if (section === "education") {
      const updatedEducation = formData.educationSection.education.filter(
        (_, i) => i !== index
      );
      setFormData({
        ...formData,
        educationSection: {
          ...formData.educationSection,
          education: updatedEducation,
        },
      });
    } else if (section === "experience") {
      const updatedExperience = formData.experienceSection.experience.filter(
        (_, i) => i !== index
      );
      setFormData({
        ...formData,
        experienceSection: {
          ...formData.experienceSection,
          experience: updatedExperience,
        },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let resAboutMe;
    try {
      resAboutMe = await BackService.putData(
        `${EnumDbEndPoints.EDUCATION_AND_EXPERIENCE}/${dbEAE._id}`,
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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={formData.title}
          name="title"
          onChange={handleChange}
        />

        {/* Educación */}
        <div className="mb-5">
          <h2 className="my-2">{formData.educationSection.title}</h2>
          {formData.educationSection.education.map((education, index) => (
            <div key={index} className="mb-4">
              <label className="form-label">Degree</label>
              <input
                type="text"
                className="form-control"
                value={education.name}
                onChange={(e) =>
                  handleInputChange(e, "education", index, "name")
                }
              />
              <label className="form-label mt-2">School</label>
              <input
                type="text"
                className="form-control"
                value={education.school}
                onChange={(e) =>
                  handleInputChange(e, "education", index, "school")
                }
              />
              <label className="form-label mt-2">Start Date</label>
              <input
                type="text"
                className="form-control"
                value={education.begin}
                onChange={(e) =>
                  handleInputChange(e, "education", index, "begin")
                }
              />
              <label className="form-label mt-2">End Date</label>
              <input
                type="text"
                className="form-control"
                value={education.end}
                onChange={(e) =>
                  handleInputChange(e, "education", index, "end")
                }
              />
              <label className="form-label mt-2">Description</label>
              <textarea
                className="form-control"
                value={education.description}
                onChange={(e) =>
                  handleInputChange(e, "education", index, "description")
                }
              />

              <button
                type="button"
                className="btn btn-danger mt-3"
                onClick={() => removeItem("education", index)}
              >
                Remove Education
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addNewEducation}
          >
            Add New Education
          </button>
        </div>

        {/* Experiencia */}
        <div className="mb-5">
          <h2>{formData.experienceSection.title}</h2>
          {formData.experienceSection.experience.map((experience, index) => (
            <div key={index} className="mb-4">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                className="form-control"
                value={experience.name}
                onChange={(e) =>
                  handleInputChange(e, "experience", index, "name")
                }
              />
              <label className="form-label mt-2">Company</label>
              <input
                type="text"
                className="form-control"
                value={experience.company}
                onChange={(e) =>
                  handleInputChange(e, "experience", index, "company")
                }
              />
              <label className="form-label mt-2">Start Date</label>
              <input
                type="text"
                className="form-control"
                value={experience.begin}
                onChange={(e) =>
                  handleInputChange(e, "experience", index, "begin")
                }
              />
              <label className="form-label mt-2">End Date</label>
              <input
                type="text"
                className="form-control"
                value={experience.end}
                onChange={(e) =>
                  handleInputChange(e, "experience", index, "end")
                }
              />
              <label className="form-label mt-2">Duration</label>
              <input
                type="text"
                className="form-control"
                value={experience.time}
                onChange={(e) =>
                  handleInputChange(e, "experience", index, "time")
                }
              />
              <label className="form-label mt-2">Description</label>
              <textarea
                className="form-control"
                value={experience.description}
                onChange={(e) =>
                  handleInputChange(e, "experience", index, "description")
                }
              />
              <button
                type="button"
                className="btn btn-danger mt-3"
                onClick={() => removeItem("experience", index)}
              >
                Remove Experience
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addNewExperience}
          >
            Add New Experience
          </button>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEducationAndExperience;
