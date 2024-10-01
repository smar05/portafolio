import React, { useState } from "react";

interface Education {
  name: string;
  school: string;
  begin: string;
  end: string;
  description?: string;
}

interface Experience {
  name: string;
  company: string;
  begin: string;
  end: string;
  time?: string;
  description?: string;
}

interface EducationAndExperience {
  backTitle: string;
  title: string;
  educationSection: {
    title: string;
    education: Education[];
  };
  experienceSection: {
    title: string;
    experience: Experience[];
  };
  last: boolean;
}

const EditEducationAndExperience: React.FC = () => {
  const [formData, setFormData] = useState<EducationAndExperience>({
    backTitle: "",
    title: "",
    educationSection: {
      title: "",
      education: [
        { name: "", school: "", begin: "", end: "", description: "" },
      ],
    },
    experienceSection: {
      title: "",
      experience: [
        {
          name: "",
          company: "",
          begin: "",
          end: "",
          time: "",
          description: "",
        },
      ],
    },
    last: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    section: "education" | "experience"
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      if (section === "education") {
        const updatedEducation = [...prevState.educationSection.education];
        updatedEducation[index] = { ...updatedEducation[index], [name]: value };

        return {
          ...prevState,
          educationSection: {
            ...prevState.educationSection,
            education: updatedEducation,
          },
        };
      } else if (section === "experience") {
        const updatedExperience = [...prevState.experienceSection.experience];
        updatedExperience[index] = {
          ...updatedExperience[index],
          [name]: value,
        };

        return {
          ...prevState,
          experienceSection: {
            ...prevState.experienceSection,
            experience: updatedExperience,
          },
        };
      }

      return prevState;
    });
  };

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="container mt-4">
      <h2>Edit Education and Experience</h2>
      <form onSubmit={handleSubmit}>
        {/* Back Title and Main Title */}
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
            onChange={handleGeneralChange}
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
            onChange={handleGeneralChange}
            required
          />
        </div>

        {/* Education Section */}
        <h3>Education Section</h3>
        <div className="mb-3">
          <label htmlFor="educationTitle" className="form-label">
            Education Title
          </label>
          <input
            type="text"
            id="educationTitle"
            name="title"
            className="form-control"
            value={formData.educationSection.title}
            onChange={(e) => handleGeneralChange(e)}
            required
          />
        </div>

        {formData.educationSection.education.map((edu, index) => (
          <div key={index}>
            <div className="mb-3">
              <label htmlFor={`educationName${index}`} className="form-label">
                Education Name
              </label>
              <input
                type="text"
                id={`educationName${index}`}
                name="name"
                className="form-control"
                value={edu.name}
                onChange={(e) => handleChange(e, index, "education")}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`educationSchool${index}`} className="form-label">
                School
              </label>
              <input
                type="text"
                id={`educationSchool${index}`}
                name="school"
                className="form-control"
                value={edu.school}
                onChange={(e) => handleChange(e, index, "education")}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`educationBegin${index}`} className="form-label">
                Begin
              </label>
              <input
                type="date"
                id={`educationBegin${index}`}
                name="begin"
                className="form-control"
                value={edu.begin}
                onChange={(e) => handleChange(e, index, "education")}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`educationEnd${index}`} className="form-label">
                End
              </label>
              <input
                type="date"
                id={`educationEnd${index}`}
                name="end"
                className="form-control"
                value={edu.end}
                onChange={(e) => handleChange(e, index, "education")}
                required
              />
            </div>
          </div>
        ))}

        {/* Experience Section */}
        <h3>Experience Section</h3>
        <div className="mb-3">
          <label htmlFor="experienceTitle" className="form-label">
            Experience Title
          </label>
          <input
            type="text"
            id="experienceTitle"
            name="title"
            className="form-control"
            value={formData.experienceSection.title}
            onChange={(e) => handleGeneralChange(e)}
            required
          />
        </div>

        {formData.experienceSection.experience.map((exp, index) => (
          <div key={index}>
            <div className="mb-3">
              <label htmlFor={`experienceName${index}`} className="form-label">
                Job Title
              </label>
              <input
                type="text"
                id={`experienceName${index}`}
                name="name"
                className="form-control"
                value={exp.name}
                onChange={(e) => handleChange(e, index, "experience")}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor={`experienceCompany${index}`}
                className="form-label"
              >
                Company
              </label>
              <input
                type="text"
                id={`experienceCompany${index}`}
                name="company"
                className="form-control"
                value={exp.company}
                onChange={(e) => handleChange(e, index, "experience")}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`experienceBegin${index}`} className="form-label">
                Begin
              </label>
              <input
                type="date"
                id={`experienceBegin${index}`}
                name="begin"
                className="form-control"
                value={exp.begin}
                onChange={(e) => handleChange(e, index, "experience")}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`experienceEnd${index}`} className="form-label">
                End
              </label>
              <input
                type="date"
                id={`experienceEnd${index}`}
                name="end"
                className="form-control"
                value={exp.end}
                onChange={(e) => handleChange(e, index, "experience")}
                required
              />
            </div>
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEducationAndExperience;
