import '../styles/Navbar.css'
import Image from "../assets/images/patches.png"
export default function Navbar() {

  return (
    <div>

      <nav class="nav flex-column justify-content-between">
        <div id="topNav">
          <img id="profilePicture" src={Image}></img>
          <a class="btn nav-link" href="#">
            <h1>Joshua Minor</h1>
          </a>
          <div class="flex-row" id="socialMedia">
          <a href="#" class="fa fa-github"></a>
          
          <a href="#" class="fa fa-linkedin"></a>
        </div>
        </div>



        <a class="btn nav-link" href="#about-me">About Me</a>
        <a class="btn nav-link" href="#my-projects">Projects</a>
        <a class="btn nav-link" href="#resume">Resume</a>
        <a class="btn nav-link" href="#contact-me">Contact Me</a>

        <div id="bottomNav">

            Website made by <a href="https://github.com/jminor90" target="_blank">Joshua Minor</a> &#128153;

        </div>
      </nav>

    </div>

  )
}