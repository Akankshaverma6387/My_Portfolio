function About() {
  return (
    <section className="min-vh-100 d-flex align-items-center" id="about">
      <div className="container">

        {/* Section Heading */}
        <div className="about-title">
          <h2>Get to Know Me</h2>
        </div>

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-7">
            <div className="about-text">

              <h3 className="mb-5 focus" style={{padding:"20px"}}>
                Building ideas into <span className="text-primary">real-world applications</span>
              </h3>

              <p>
                I'm Akanksha Verma, a B.Tech CSE-AI student at UIET Kanpur
                with an interest in Full Stack Web Development, AI/ML & problem solving.
              </p>

              <p>
                I enjoy building clean, responsive and user-friendly web
                applications while continuously improving my programming
                and problem-solving skills.
              </p>

              <p>
                Currently, I'm focusing on developing my skills in the AI/ML and working on projects that help me turn what I learn
                into practical solutions.
              </p>

            </div>
          </div>
          <div className="col-1"></div>

          {/* Right Side */}
          <div className="col-lg-4 ">
            <div className="current-focus"></div>
              <h3 className="mb-5 ">Currently Focusing on</h3>
              
                <div className="focus mb-2">MERN stack projects</div>
                <div className="focus mb-2">AI/ML skills</div>
                <div className="focus mb-2">DSA in JAVA</div>
              
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;