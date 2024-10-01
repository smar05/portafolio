import React, { useState } from "react";

interface SkillData {
  name: string;
  percentage: number;
  color: string;
}

interface SkillSection {
  title: string;
  data: SkillData[];
}

interface SkillsFormData {
  backTitle: string;
  title: string;
  frontend: SkillSection;
  backend: SkillSection;
  last: boolean;
}

const EditSkills = () => {
  const [formData, setFormData] = useState<SkillsFormData>({
    backTitle: "Skills Overview",
    title: "My Skills",
    frontend: {
      title: "Frontend Skills",
      data: [
        { name: "React", percentage: 80, color: "#61DAFB" },
        { name: "HTML", percentage: 90, color: "#E34F26" },
      ],
    },
    backend: {
      title: "Backend Skills",
      data: [
        { name: "Node.js", percentage: 70, color: "#68A063" },
        { name: "Express", percentage: 75, color: "#000000" },
      ],
    },
    last: true,
  });

  const handleSkillChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: "frontend" | "backend",
    index: number
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedSection = [...prevState[section].data];
      updatedSection[index] = {
        ...updatedSection[index],
        [name]: name === "percentage" ? parseInt(value) : value,
      };
      return {
        ...prevState,
        [section]: {
          ...prevState[section],
          data: updatedSection,
        },
      };
    });
  };

  const renderSkillSection = (section: "frontend" | "backend") => (
    <div className="skill-section">
      <h3>{formData[section].title}</h3>
      {formData[section].data.map((skill, index) => (
        <div key={index} className="form-group row mb-3">
          <div className="col-md-4">
            <label className="form-label">Skill Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={skill.name}
              onChange={(e) => handleSkillChange(e, section, index)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Percentage</label>
            <input
              type="number"
              className="form-control"
              name="percentage"
              value={skill.percentage}
              onChange={(e) => handleSkillChange(e, section, index)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Color</label>
            <input
              type="color"
              className="form-control"
              name="color"
              value={skill.color}
              onChange={(e) => handleSkillChange(e, section, index)}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container">
      <h1>Edit Skills</h1>
      <form>
        <div className="mb-4">
          <label className="form-label">Back Title</label>
          <input
            type="text"
            className="form-control"
            name="backTitle"
            value={formData.backTitle}
            onChange={(e) =>
              setFormData({ ...formData, backTitle: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        {/* Renderiza la sección de Frontend */}
        {renderSkillSection("frontend")}

        {/* Renderiza la sección de Backend */}
        {renderSkillSection("backend")}

        <button type="submit" className="btn btn-primary mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditSkills;
