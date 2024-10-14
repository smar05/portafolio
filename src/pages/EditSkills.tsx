import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";
import { Iskills } from "../interfaces/Iskills";
import { Alert } from "../services/alert";
import { BackService, EnumDbEndPoints } from "../services/back";

const EditSkills = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Iskills>({
    _id: "",
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
  });

  const [dbSkills, setDbSkills] = useState<Iskills>(null as any);

  useEffect(() => {
    consultarInfo();
  }, []);

  function consultarInfo(): void {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(EnumDbEndPoints.MY_SKILLS);
        setDbSkills(response.data);
        setFormData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }

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

  // Agregar una nueva habilidad a la sección (frontend o backend)
  const addNewSkill = (section: "frontend" | "backend") => {
    setFormData((prevState) => {
      const newSkill = { name: "", percentage: 0, color: "#000000" };
      return {
        ...prevState,
        [section]: {
          ...prevState[section],
          data: [...prevState[section].data, newSkill],
        },
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let resSkills;
    try {
      resSkills = await BackService.putData(
        `${EnumDbEndPoints.MY_SKILLS}/${dbSkills._id}`,
        formData
      );
    } catch (error) {
      Alert.basicAlert(
        "Error",
        "An error has occurred updating the information",
        "error"
      );
    }

    if (!resSkills?.data.actualizado) {
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
              max={100}
              min={0}
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
      <button
        type="button"
        className="btn btn-secondary my-2"
        onClick={() => addNewSkill(section)}
      >
        Add New Skill
      </button>
    </div>
  );

  return (
    <div className="container">
      <h1>Edit Skills</h1>
      <form onSubmit={handleSubmit}>
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
