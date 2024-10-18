import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";
import { IPresentation } from "../interfaces/Ipresentation";
import { Alert } from "../services/alert";
import { BackService, EnumDbEndPoints } from "../services/back";

interface Presentation {
  name: string;
  tags: string;
  hv: {
    url: string;
    text: string;
  };
  video: {
    url: string;
    text: string;
  };
  last: boolean;
}

const EditPresentation: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Presentation>({
    name: "",
    tags: "",
    hv: {
      url: "",
      text: "",
    },
    video: {
      url: "",
      text: "",
    },
    last: false,
  });

  const [selectedFile, setSelectedFile] = useState<Blob>(null as any);
  const [preview, setPreview] = useState<string>(null as any);

  const handleFileChange = (e: Event | undefined) => {
    const file: Blob = (e?.target as any)?.files[0];
    setSelectedFile(file);

    if (file) {
      const objectUrl: string = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  const [dbPresentation, setDbPresentation] = useState<IPresentation>(
    null as any
  );

  useEffect(() => {
    consultarInfo();
  }, []);

  function consultarInfo(): void {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(
          EnumDbEndPoints.PRESENTATION
        );
        setDbPresentation(response.data);
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

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: "hv" | "video"
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      BackService.sendImage(dbPresentation._id, formData);
    } catch (error) {
      Alert.basicAlert("Error", "Error uploading the image", "error");
    }

    let resPresentation;
    try {
      resPresentation = await BackService.putData(
        `${EnumDbEndPoints.PRESENTATION}/${dbPresentation._id}`,
        formData
      );
    } catch (error) {
      Alert.basicAlert(
        "Error",
        "An error has occurred updating the information",
        "error"
      );
    }

    if (!resPresentation?.data.actualizado) {
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
      <h2>Edit Presentation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Profile image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={() => {
                handleFileChange(event);
              }}
              accept="image/*"
            />
          </div>

          {preview && (
            <div className="mb-3">
              <img
                src={preview}
                alt="Preview"
                className="img-thumbnail"
                style={{ maxWidth: "200px" }}
              />
            </div>
          )}
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
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="form-control"
            value={formData.tags}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="hvUrl" className="form-label">
            HV URL
          </label>
          <input
            type="text"
            id="hvUrl"
            name="url"
            className="form-control"
            value={formData.hv.url}
            onChange={(e) => handleNestedChange(e, "hv")}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="hvText" className="form-label">
            HV Text
          </label>
          <input
            type="text"
            id="hvText"
            name="text"
            className="form-control"
            value={formData.hv.text}
            onChange={(e) => handleNestedChange(e, "hv")}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="videoUrl" className="form-label">
            Video URL
          </label>
          <input
            type="text"
            id="videoUrl"
            name="url"
            className="form-control"
            value={formData.video.url}
            onChange={(e) => handleNestedChange(e, "video")}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="videoText" className="form-label">
            Video Text
          </label>
          <input
            type="text"
            id="videoText"
            name="text"
            className="form-control"
            value={formData.video.text}
            onChange={(e) => handleNestedChange(e, "video")}
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

export default EditPresentation;
