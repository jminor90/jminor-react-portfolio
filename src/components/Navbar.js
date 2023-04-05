import Image from "../assets/images/patches.png"
export default function Navbar() {

  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light d-flex flex-md-column">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse w-100 flex-md-column justify-content-around" id="navbarSupportedContent">

          <a class="text-center" id="topNav" href="#">
            <img id="profilePicture" src={Image}></img>

            <h1 id="myName">Joshua Minor</h1>
          </a>

          <ul class="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
            <li>
              <a class="nav-link" href="#about-me">About Me</a>
            </li>
            <li>
              <a class="nav-link" href="#my-projects">Projects</a>
            </li>
            <li>
              <a class="nav-link" href="#resume">Resume</a>
            </li>
            <li>
              <a class="nav-link" href="#contact-me">Contact Me</a>
            </li>
          </ul>
          <div class="flex-row" id="socialMedia">
            <a href="https://github.com/jminor90" target="_blank" class="fa fa-github"></a>

            <a href="mailto:minor.jbm@gmail.com" class="fa fa-envelope"></a>

            <a href="https://www.linkedin.com/in/jminor90" target="_blank" class="fa fa-linkedin"></a>

          </div>
        </div>
      </nav>
    </>
  )
}