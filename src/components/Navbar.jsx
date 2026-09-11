function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
            <div className="container">
               <a className="navbar-brand fw-bold" href="#">Akanksha Verma</a>
               <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-2">
                   <li className="nav-item">
                    <a href="#home" className="nav-link active">Home</a>
                   </li>
                   <li className="nav-item">
                    <a href="#about" className="nav-link active">About</a>
                   </li>
                   <li className="nav-item">
                    <a href="#skills" className="nav-link active">Skills</a>
                   </li>
                   <li className="nav-item">
                    <a href="#projects" className="nav-link active">Projects</a>
                   </li>
                   <li className="nav-item">
                    <a href="#education" className="nav-link active">Education</a>
                   </li>
                   <li className="nav-item">
                    <a href="#achievements" className="nav-link active">Achievements</a>
                   </li>
                   <li className="nav-item">
                    <a href="#contact" className="nav-link active">Contact</a>
                   </li>
                </ul>
               </div>
            </div>
        </nav>
    )
}
export default Navbar;