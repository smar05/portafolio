import React from "react";
import { useNavigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";

interface DashboardItem {
  id: number;
  name: string;
}

const Admin: React.FC = () => {
  const [items] = React.useState<DashboardItem[]>([
    { id: 1, name: "Presentation" },
    { id: 2, name: "About Me" },
    { id: 3, name: "Education and Experience" },
    { id: 4, name: "Skills" },
    { id: 5, name: "Contact" },
  ]);

  const navigate = useNavigate();

  const handleEditClick = (itemName: string) => {
    navigate(`/edit/${itemName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const logOut = () => {
    localStorage.clear();
    navigate(EnumPages.HOME);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Dashboard</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <h5>{item.name}</h5>
            <button
              className="btn btn-primary"
              onClick={() => handleEditClick(item.name)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <button className="btn btn-danger my-4" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default Admin;
