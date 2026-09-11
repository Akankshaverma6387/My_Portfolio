function Projects() {
  const projects = [
    {
      title: "StayYaar",
      description:
        "A full-stack accommodation booking platform with user authentication, listings, reviews and responsive UI.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: "fa-solid fa-house",
      iconColor:"#FF5A5F",
      github: "https://github.com/Akankshaverma6387/Airbnb_project",
      demo: "",
    },
    {
      title: "TradeDesk",
      description:
        "A responsive stock trading platform inspired by Zerodha, featuring a modern interface and full-stack architecture.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: "fa-solid fa-chart-line",
      iconColor:"#387ED1",
      github: "https://github.com/Akankshaverma6387/Stock_trading-platform",
      demo: "",
    },
    {
      title: "Spotify Clone",
      description:
        "A music streaming interface built with HTML, CSS and JavaScript with a responsive and interactive design.",
      tech: ["HTML", "CSS", "Bootstrap"],
      icon: "fa-brands fa-spotify",
      iconColor:"#1DB954",
      github: "https://github.com/Akankshaverma6387/spotify_clone",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="section-heading">
          <h2>Projects</h2>
          <p>Some of the projects I've worked on</p>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="project-card">

                <div className="project-icon">
                  <i className={project.icon} style={{color:project.iconColor}}></i>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description mt-3">
                  {project.description}
                </p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons mt-5">
                  <a
                    href={project.github}
                    className="project-btn github-btn "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>&nbsp;
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="project-btn demo-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;