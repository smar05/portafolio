import React, { useEffect, useState } from "react";
import {
  IEducation,
  IeducationAndExperience,
  IExperience,
} from "../interfaces/IeducationAndExperience";
import { BackService, EnumDbEndPoints } from "../services/back";

function Qualification() {
  const [dbData, setDbData] = useState<IeducationAndExperience>(null as any);

  useEffect(() => {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(
          EnumDbEndPoints.EDUCATION_AND_EXPERIENCE
        );
        setDbData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }, []);

  /**
   * Ordenar por la facha mas actual
   *
   * @param {(IEducation | IExperience)} a
   * @param {(IEducation | IExperience)} b
   * @return {*}  {number}
   */
  const orderByEndDate = (
    a: IEducation | IExperience,
    b: IEducation | IExperience
  ): number => {
    const dateA: number = new Date(a.end + "-01").getTime();
    const dateB: number = new Date(b.end + "-01").getTime();

    return dateB - dateA;
  };

  const calculateDifference = (start: string, end: string): string => {
    const [startYear, startMonth] = start.split("-").map(Number);
    const [endYear, endMonth] = end.split("-").map(Number);

    const yearDifference: number = endYear - startYear;
    const monthDifference: number = endMonth - startMonth;

    let totalMonths: number = yearDifference * 12 + monthDifference;

    if (totalMonths < 0) totalMonths = 0;

    const years: number = Math.floor(totalMonths / 12);
    const months: number = totalMonths % 12;

    if (years > 0) {
      return `${years} year(s) and ${months} month(s)`;
    } else {
      return `${months} month(s)`;
    }
  };

  return (
    <>
      <div className="container-fluid py-5" id="qualification">
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
            <div className="col-lg-6">
              <h3 className="mb-4">{dbData?.educationSection.title}</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                {dbData?.educationSection.education
                  .sort(orderByEndDate)
                  .map((education, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="position-relative mb-4">
                          <i
                            className="far fa-dot-circle text-primary position-absolute"
                            style={{
                              top: "2px",
                              left: "-32px",
                              position: "relative",
                            }}
                          ></i>
                          <h5 className="font-weight-bold mb-1">
                            {education.name}
                          </h5>
                          <p className="mb-2">
                            <strong>{education.school}</strong> |{" "}
                            <small>
                              {education.begin} - {education.end}
                            </small>
                          </p>
                          {education.description ? (
                            <>
                              <p>{education.description}</p>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">{dbData?.experienceSection.title}</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                {dbData?.experienceSection.experience
                  .sort(orderByEndDate)
                  .map((experience, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="position-relative mb-4">
                          <i
                            className="far fa-dot-circle text-primary position-absolute"
                            style={{
                              top: "2px",
                              left: "-32px",
                              position: "relative",
                            }}
                          ></i>
                          <h5 className="font-weight-bold mb-1">
                            {experience.name}
                          </h5>
                          <p className="mb-2">
                            <strong>{experience.company}</strong> |{" "}
                            <small>
                              {experience.begin} - {experience.end} (
                              {calculateDifference(
                                experience.begin,
                                experience.end
                              )}
                              )
                            </small>
                          </p>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: experience.description,
                            }}
                          ></p>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qualification;
