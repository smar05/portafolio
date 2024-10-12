import React, { useEffect, useState } from "react";
import { Iskills } from "../interfaces/Iskills";
import { BackService, EnumDbEndPoints } from "../services/back";

function Skills() {
  const [dbData, setDbData] = useState<Iskills>(null as any);

  useEffect(() => {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(EnumDbEndPoints.MY_SKILLS);
        setDbData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }, []);

  return (
    <>
      <div className="container-fluid py-5" id="skill">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              {dbData?.backTitle}
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              {dbData?.title}
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="row">
                <h2>{dbData?.frontend.title}</h2>
              </div>
              {dbData?.frontend.data.map((front, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="skill mb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold">{front.name}</h6>
                        <h6 className="font-weight-bold">
                          {front.percentage}%
                        </h6>
                      </div>
                      <div className="progress">
                        <div
                          className={`progress-bar ${front.color}`}
                          role="progressbar"
                          aria-valuenow={front.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: `${front.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="col-md-6">
              <div className="row">
                <h2>{dbData?.backend.title}</h2>
              </div>
              {dbData?.backend.data.map((back, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="skill mb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold">{back.name}</h6>
                        <h6 className="font-weight-bold">{back.percentage}%</h6>
                      </div>
                      <div className="progress">
                        <div
                          className={`progress-bar ${back.color}`}
                          role="progressbar"
                          aria-valuenow={back.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: `${back.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
