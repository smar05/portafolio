import React, { useState } from "react";

interface Presentation {
  profileImg: string;
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
  const [formData, setFormData] = useState<Presentation>({
    profileImg: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="container mt-4">
      <h2>Edit Presentation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="profileImg" className="form-label">
            Profile Image URL
          </label>
          <input
            type="text"
            id="profileImg"
            name="profileImg"
            className="form-control"
            value={formData.profileImg}
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
