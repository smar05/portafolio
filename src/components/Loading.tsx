import React from "react";
import "../assets/css/Spinner.css";

const Loading: React.FC = () => {
  return (
    <>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </>
  );
};

export default Loading;
