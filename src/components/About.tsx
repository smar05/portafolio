import { useEffect, useState } from "react";
import { IaboutMe } from "../interfaces/IaboutMe";
import { BackService, EnumDbEndPoints } from "../services/back";

function About() {
  const [dbData, setDbData] = useState<IaboutMe>(null as any);

  useEffect(() => {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(EnumDbEndPoints.ABOUT_ME);
        setDbData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }, []);

  return (
    <>
      <div className="container-fluid py-5" id="about">
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
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img
                className="img-fluid rounded w-100"
                src="img/about.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">{dbData?.subTitle}</h3>
              <p>{dbData?.content}</p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2">
                  <h6>
                    Name: <span className="text-secondary">{dbData?.name}</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Birthday:{" "}
                    <span className="text-secondary">{dbData?.birthday}</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Degree:{" "}
                    <span className="text-secondary">{dbData?.degree}</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Experience:{" "}
                    <span className="text-secondary">
                      {new Date().getFullYear() - dbData?.experienceSince} years
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Phone:{" "}
                    <span className="text-secondary">{dbData?.phone}</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Email:{" "}
                    <span className="text-secondary">{dbData?.email}</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Freelance:{" "}
                    <span className="text-secondary">{dbData?.freelance}</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
