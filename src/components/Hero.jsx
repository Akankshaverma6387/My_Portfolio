function Hero(){
    return(
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center min-vh-100 g-5">
                    <div className="col-lg-7">
                        <p className="text-primary fs-3 mb-2">Hey, I'm </p>
                        <h1 className="display-3 fw-bold mb-3">Akanksha Verma</h1>
                        <h2 className="fs-4 text-secondary mb-3">B.Tech CSE-AI Student</h2>
                        <p className="lead text-secondary mb-4">Passionate about Full Stack Web Development, problem solving and building impactful projects.</p>
                        <div className="mt-4">
                            <a className="btn btn-primary px-4 py-2 me-2" href="#projects">View Projects</a>
                            <a href="#contact" className="btn btn-primary px-4 py-2">Contact me</a>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center mt-5 mt-lg-0">
                        <div className="bg-light rounded-circle p-4 d-inline-block">
                            <img src="\images\gitpic.jpeg" style={{width:"400px", height:"400px",objectFit:"cover",borderRadius:"50%",border:"4px solid white"}}/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Hero;