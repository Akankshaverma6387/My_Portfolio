function Contact() {
  return (
    <section id="contact" className="mt-5 min-vh-100 d-flex align-items-center">
      <div className="container">

        <h2 className="text-center">Get in Touch</h2>
        <p className="text-center subtitle">
          Let's connect and build something great together.
        </p>

        <div className="row g-4 mt-4">

          <div className="col-md-4">
            <a href="https://github.com/Akankshaverma6387" className="contact-box">
              <i className="fa-brands fa-github contact-icon"></i>
              <h4>GitHub</h4>
              <p>Explore my projects and coding journey.</p>
            </a>
          </div>

          <div className="col-md-4">
            <a href="akankshaverma919827@gmail.com" className="contact-box">
              <i className="fa-solid fa-envelope contact-icon"></i>
              <h4>Email</h4>
              <p>Feel free to reach out for opportunities.</p>
            </a>
          </div>

          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/akanksha-verma-7a8723321" className="contact-box">
              <i className="fa-brands fa-linkedin contact-icon"></i>
              <h4>LinkedIn</h4>
              <p>Connect with me and let's grow together.</p>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;