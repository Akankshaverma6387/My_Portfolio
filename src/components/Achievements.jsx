const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">

        <h2 className="text-center mt-5">
          <b>Achievements</b>
        </h2>

        <div className="row g-4">

          {/* IBM BoB */}
          <div className="col-md-4">
            <div className="achievement-card">

              <h4>
                <i
                  className="fas fa-trophy"
                  style={{ color: "#f59e0b" }}
                ></i>
                &nbsp;
                <strong>3rd Position - IBM BOB Hacks</strong>
              </h4>

              <p>
                Secured 3rd position in the IBM BOB Hackathon by
                building and presenting a working solution.
              </p>

              <div className="achievement-image">
                <img
                  src="/certificates/BobHack.jpeg"
                  alt="IBM BoB Hackathon Certificate"
                />
              </div>

            </div>
          </div>


          {/* UP Board */}
          <div className="col-md-4">
            <div className="achievement-card">

              <h4>
                <i
                  className="fa-solid fa-medal"
                  style={{ color: "rgb(229, 178, 23)" }}
                ></i>
                &nbsp;
                <strong>UP Board State Rank 6</strong>
              </h4>

              <p>
                Achieved State Rank 6 with 96.4% marks in the
                UP Board Class 12th examinations 2023.
              </p>

              <div className="achievement-image">
                <img
                  src="\certificates\12thBoard.jpeg"
                  alt="UP Board Achievement"
                />
              </div>

            </div>
          </div>


          {/* Avinya */}
          <div className="col-md-4">
            <div className="achievement-card">

              <h4>
                <i
                  className="fa-solid fa-award"
                  style={{ color: "#2563eb" }}
                ></i>
                &nbsp;
                <strong>Avinya 2026 - Final Round</strong>
              </h4>

              <p>
                Reached the Final Round of Avinya 2026, an IIT
                Guwahati Hackathon conducted by Prakriti Club.
              </p>

              <div className="achievement-image">
                <img
                  src="/certificates/Avinya.jpeg"
                  alt="Avinya 2026 Achievement"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;