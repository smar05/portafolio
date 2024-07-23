function About() {
  return (
    <>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              About
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              About Me
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
              <h3 className="mb-4">Fullstack Developer</h3>
              <p>
                With more than 3 years of experience in software development for
                various industries, I stand out for my focuson code quality and
                team collaboration. My skills include Java, JavaScript,
                databases and frameworks suchas MySQL, Angular and Node.js.
                Completing my degree in electronic engineering from the
                Francisco José deCaldas District University and certifications
                in Programming and Fullstack Developer. My goal is to
                continuegrowing professionally and adding value in challenging
                environments, driving project success and contributing
                toorganizational growth.
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2">
                  <h6>
                    Name:{" "}
                    <span className="text-secondary">
                      Ricardo Andres Mantilla Sanchez
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Birthday:{" "}
                    <span className="text-secondary">7 August 1998</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Degree:{" "}
                    <span className="text-secondary">Electronic Engineer</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Experience:{" "}
                    <span className="text-secondary">
                      {new Date().getFullYear() - 2021} years
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Phone:{" "}
                    <span className="text-secondary">+57 300 260 2502</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Email:{" "}
                    <span className="text-secondary">
                      mantillasanchezr@gmail.com
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Freelance: <span className="text-secondary">Available</span>
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
