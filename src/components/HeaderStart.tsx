import { useEffect, useState } from "react";
import { BackService, EnumDbEndPoints } from "../services/back";
import { IPresentation } from "../interfaces/Ipresentation";

function HeaderStart() {
  const [dbData, setDbData] = useState<IPresentation>(null as any);

  useEffect(() => {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(
          EnumDbEndPoints.PRESENTATION
        );
        setDbData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }, []);

  return (
    <>
      <div
        className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
        id="home"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img
                className="img-fluid w-100 rounded-circle shadow-sm"
                src={BackService.getImageUrlProfile()}
                alt=""
              />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I'm</h3>
              <h1
                className="display-3 text-uppercase text-primary mb-2"
                style={{ WebkitTextStroke: "2px #ffffff" }}
              >
                {dbData?.name}
              </h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
              <div className="typed-text d-none">{dbData?.tags}</div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a
                  href={dbData?.hv.url}
                  className="btn btn-outline-light mr-5"
                  target="_blank"
                >
                  {dbData?.hv.text}
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-toggle="modal"
                  data-src={dbData?.video.url}
                  data-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">
                  {dbData?.video.text}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderStart;
