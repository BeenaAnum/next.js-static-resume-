 "use client"
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Head from "next/head"; export default function Resume() {

  const [showSkills, setShowSkills] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for Skills section
  const toggleSkills = () =>
    setShowSkills(!showSkills);


  // Toggle function for Navbar menu
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <Head>
        <title>My Personal Resume</title>
        <meta name="description" content="A simple personal resume website built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <header>
          <nav className="navbar">
             <button className="hamburger" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
            </button>
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
              <Link href="#about">About</Link>
              <Link href="#education">Education</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#experience">Experience</Link>
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </nav>
        </header>

        <section id="about" className="section">
          <img src="profile1.jpg" alt="Profile Picture" />
          <h2>Personal Information</h2>
          <h1>Beena Anam</h1>
          <p><b>Father's Name: Riaz Uddin</b></p>
          <p><b>Date of Birth: 11th May</b></p>
          <p><b>Location: Karachi, Pakistan</b></p>
        </section>

        <section id="education" className="section">
          <center><h2>Education</h2></center>
          <p><b>Bachelor's in Science, from Karachi University</b></p>
          <p><b>Intermediate in Pre-Engineering</b></p>
          <p><b>Matriculation in Science</b></p>
        </section>

        <section id="skills" className="section">
          {showSkills && (
          <div className="content">
          <h2>Skills</h2>
          <ul>
            <li><b>MS Office</b></li>
            <li><b>HTML</b></li>
            <li><b>CSS</b></li>
            <li><b>TypeScript</b></li>
            <li><b>Next.js</b></li>
            <li><b>Communication and Soft Skills</b></li>
          </ul> </div>
          )}
          <button onClick={toggleSkills}>
            {showSkills ? "Hide Skills" : "Show Skills"}
          </button>
        </section>

        <section id="experience" className="section">
          <center><h2>Work Experience</h2></center>
          <p><b>6 Years Experience, As A Home tutor and I'm seeking out opportunity to start my professional career as a front-end developer</b></p>
        </section>

        <section id="portfolio" className="section">
          <center><h2>Portfolio</h2></center>
          <div className="project">
            <h3>Static Resume</h3>
            <a href="https://static-resume-olive.vercel.app/"  target="_blank">
              <img src="download(1).png" alt="Milestone 1 & 2" />
            </a>
            <h3>Milestone 1 & 2</h3>
          </div>
          <div className="project">
            <h3>Dynamic Resume</h3>
            <a href="https://dynamic-resume-self.vercel.app/"  target="_blank">
              <img src="download(2).png" alt="Milestone 3" />
            </a>
            <h3>Milestone 3</h3>
          </div>
          <div className="project">
            <h3>Editable Resume</h3>
            <a href="https://4th-milestone-editable-resume.vercel.app/"  target="_blank">
              <img src="download(3).png" alt="Milestone 4" />
            </a>
            <h3>Milestone 4</h3>
          </div>
          <div className="project">
            <h3>Shareable Resume</h3>
            <a href="https://5th-milestone-shareable-resume-five.vercel.app/"  target="_blank">
              <img src="download(4).png" alt="Milestone 5" />
            </a>
            <h3>Milestone 5</h3>
          </div>
          <div className="project">
            <h3>Dynamic-Country-App</h3>
            <a href="https://dynamic-country-routes-app.vercel.app/"  target="_blank">
              <img src="dynamic-country-app.png" alt="Milestone 6" />
            </a>
            <h3>Milestone 6</h3>
          </div>
          <div className="project">
            <h3>Dynamic-Country-Routes</h3>
            <a href="https://dynamic-country-routes.vercel.app/" target="_blank">
              <img src="dynamic-country-route.png" alt="Milestone 7" />
            </a>
            <h3>Milestone 7</h3>
          </div>
          <div className="project">
            <h3>My Portfolio</h3>
            <a href="https://my-portfoilo-chi.vercel.app/" target="_blank">
              <img src="portfolio.png" alt="Milestone 8" />
            </a>
            <h3>Milestone 8</h3>
          </div>
          <div className="project">
            <h3>SimpleNested-routing-app</h3>
            <a href="https://simple-routing-app-two.vercel.app/"  target="_blank">
              <img src="nested-routing.png" alt="Milestone 9" />
            </a>
            <h3>Milestone 9</h3>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: <b><a href="mailto:beenaanum@gmail.com" target="_blank">beenaanum@gmail.com</a></b></p>
          <p>LinkedIn: <b><a href="https://www.linkedin.com/in/beena-anum-2b2963254" target="_blank">Beena Anum</a></b></p>
          <p>GitHub: <b><a href="https://github.com/BeenaAnum" target="_blank">Beena Anum</a></b></p>

         <button><a href="#top">Top of the Resume</a></button>
      <footer className="footer">  

        <div className="social-media">
      <Link href="https://www.facebook.com/profile.php?id=100083909281190" target="_blank">
        <FaFacebook />
      </Link>
      <Link href="mailto:beenaanum@gmail.comm" target="_blank">
        <SiGmail />
      </Link>
      <Link href="https://www.linkedin.com/in/beena-anum-2b2963254" target="_blank">
        <FaLinkedin />
      </Link>
      <Link href="https://github.com/BeenaAnum" target="_blank">
        <FaGithub />
      </Link>
      </div>
     </footer>
    </section>

  </div>
    </>
  );
}