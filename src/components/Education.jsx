import React from "react";

const Education = () => {
  return (
    <section id="education" className="min-vh-100 d-flex align-items-center">
      <div className="container">
        
        <h2 className="text-center fw-bold mb-5">Education</h2>

        <div className="row g-4">

          {/* B.Tech */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="fw-bold">B.Tech – CSE (AI)</h4>
                <h6 className="text-muted">2024 – Present</h6>

                <p className="mb-2">
                  <strong>UIET, CSJMU Kanpur</strong>
                </p>

                <p className="mb-2">
                  3rd Year | CGPA: <strong>8.57</strong>
                </p>

                <p className="mb-0">
                  <b>Relevant Coursework:</b><br />
                  DSA • DBMS • OS • TOC
                </p>
              </div>
            </div>
          </div>

          {/* Class XII */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="fw-bold">Class XII</h4>
                <h6 className="text-muted">2023</h6>

                <p className="mb-2">
                  <strong>UP Board</strong>
                </p>

                <p className="mb-3">
                  Percentage: <strong>96.5%</strong>
                </p>
                <p className="mb-0">
                  <b>Physics, Chemistry & Mathematics</b>
                </p>

                <p className="mb-0">
                  <strong>State Rank 6</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Class X */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="fw-bold">Class X</h4>
                <h6 className="text-muted">2021</h6>

                <p className="mb-2">
                  <strong>UP Board</strong>
                </p>

                <p className="mb-3">
                  Percentage: <strong>91.5%</strong>
                </p>

                <p className="mb-0">
                  <b>Mathematics & Science</b>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;