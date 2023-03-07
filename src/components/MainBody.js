import '../styles/MainBody.css'
import Image from "../assets/images/patches.png"


export default function MainBody() {

  return (
    <section id="about-me">
      <div class="container">
        <div class="section-title">
          <h2>About Me</h2>
        </div>
        <p>Throughout my life I have been fascinated with computers and technology. I enjoy problem-solving and being able to express my creativity. I taught myself how to play music, and attempted to take my career and education in that direction. After some time I decided to bring my focus back to working with computers, and coding. I was already familiar with HTML,Visual BASIC, and Python to develop my curiosity.
        Soon I will be graduating from the <strong><u>University of Arizona's Web Development Certification</u></strong> and consider myself a ... </p>


        <div class="row col-md-12">
          <div class="col-lg-4 col-md-12">
            <img src={Image} class="img-fluid" id="about-me-img" alt=""></img>
          </div>
          <div class="col-lg-8 col-md-12 content" data-aos="fade-left">
            <h3><strong>Full Stack Web Developer</strong></h3>
            <p class="fst-italic">
              I enjoy making applications, and find the problem-solving part of coding to be very satisfying.
              <br/>Front-end code is where I like to work, and I have been enjoying learning the functionality of databases.
              <br/>As a Junior Web Developer I consider myself proficient in the following technologies:
            </p>
            <ul>
              <li>MongoDB</li>
              <li>ExpressJS</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>MySQL</li>
              <li>GraphQL</li>
            </ul>

            <p>
              If you have any further questions about myself or my experience feel free to <a href="#contact-me">Contact Me</a> or look over my <a href="#resume"> Resume</a>
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}