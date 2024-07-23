function Qualification() {
  return (
    <>
      <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Quality
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Education & Expericence
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px", position: "relative" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">Electronic Engineer</h5>
                  <p className="mb-2">
                    <strong>
                      Distrital Francisco José de Caldas University
                    </strong>{" "}
                    | <small>2016 - 2024</small>
                  </p>
                </div>
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px", position: "relative" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">
                    Full Stack Web Programming
                  </h5>
                  <p className="mb-2">
                    <strong>Digital House</strong> |{" "}
                    <small>Jul 2021 - Jun 2022</small>
                  </p>
                  <p>
                    Create websites and web systems using programming languages
                    (HTML, CSS, JavaScript, React, Mongo DB, Node.js andmore).
                  </p>
                </div>
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px", position: "relative" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">
                    Programming skills training program. Emphasis on web
                    applications, ComputerSoftware and Media Applications
                  </h5>
                  <p className="mb-2">
                    <strong>Antioquia University</strong> |{" "}
                    <small>Mar 2021 - Jan 2022</small>
                  </p>
                  <p>
                    Diploma in programming skills oriented to web development.
                    Train in programming, to face the challenges of the Fourth
                    Industrial Revolution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">My Expericence</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px", position: "relative" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">
                    Semi-Senior Fullstack Developer | IBM (for the Bank
                    Davivienda client)
                  </h5>
                  <p className="mb-2">
                    <strong>Cinte | IBM</strong> |{" "}
                    <small>Jul 2023 - May 2024 (11 Months)</small>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Participate in the development of web pages for Banco
                        Davivienda, using technologies such asAngular, Node.js,
                        Git and Google Cloud Platform (GCP).
                      </li>
                      <li>
                        Collaborated closely with multidisciplinary teams to
                        ensure the creation of intuitive and secureinterfaces
                        that met client needs.
                      </li>
                      <li>
                        Contributed to the success of key projects in a
                        top-level business environment, contributing
                        myexperience and technical skills to meet established
                        objectives.
                      </li>
                      <li>
                        Participated in process optimization and implementation
                        of best practices.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px", position: "relative" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">Software Developer</h5>
                  <p className="mb-2">
                    <strong>Softtek</strong> |{" "}
                    <small>Aug 2021 - Jul 2023</small>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Contribution in projects of various public and private
                        clients
                      </li>
                      <li>
                        I mainly used tools such as Angular, Spring boot, Sql,
                        AWS, Docker, Git, among others.
                      </li>
                      <li>
                        I managed to make great contributions to provide
                        maintenance and new functionalities to variousprojects
                        that were assigned to me.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qualification;
