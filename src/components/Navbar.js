import '../styles/Navbar.css'
import Image from "../assets/images/patches.png"
export default function Navbar() {

  return (
    <div>

      <nav >
        <div id="topNav">
          <a class="nav-link" href="#">
          <img id="profilePicture" src={Image}></img>
          </a>
          <a class="nav-link" href="#">
            <h1 id="myName">Joshua Minor</h1>
          </a>

        </div>


        <div id="midNav">
          <a class="btn nav-link" href="#about-me">About Me</a>
          <a class="btn nav-link" href="#my-projects">Projects</a>
          <a class="btn nav-link" href="#resume">Resume</a>
          <a class="btn nav-link" href="#contact-me">Contact Me</a>
        </div>

        <div id="bottomNav">

        <div class="flex-row" id="socialMedia">
            <a href="https://github.com/jminor90" target="_blank" class="fa fa-github"></a>

            <a href ="mailto:minor.jbm@gmail.com" class="fa fa-envelope"></a>

            <a href="https://www.linkedin.com/in/jminor90" target="_blank" class="fa fa-linkedin"></a>

          </div>
          {/* Website made by <a href="https://github.com/jminor90" target="_blank">Joshua Minor</a> &#128153; */}

        </div>
      </nav>

    </div>

  )
}