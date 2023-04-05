import '../styles/MainBody.css'
import Image from "../assets/images/patches.png"


export default function MainBody() {

  return (
    <>
      <section id="about-me">
        <div class="container-fluid d-flex flex-column align-items-center">
          <div class="section-title">
            <h2>About Me</h2>
          </div>

          <div class="row">
            <div class="col-xl-3 d-flex align-items-center justify-content-center m-1">
              <img src={Image} class="img-fluid" id="about-me-img" alt=""></img>
            </div>

            <div class="col-xl-8 d-flex flex-column align-items-center m-1">
              <p>Throughout my life I have been fascinated with computers and technology. I enjoy problem-solving and being able to express my creativity. I taught myself how to play music, and attempted to take my career and education in that direction. After some time I decided to bring my focus back to working with computers, and coding. I was already familiar with HTML,Visual BASIC, and Python to develop my curiosity.
                Soon I will be graduating from the <strong><u>University of Arizona's Web Development Certification</u></strong> and consider myself a ... </p>


              <h3><strong><u>Full Stack Web Developer</u></strong></h3>

            </div>



          </div>



          <div class="row">
            <div class="col-xl-11 d-flex align-items-center">

              <p>
                I enjoy making applications, and find the problem-solving part of coding to be very satisfying.
                <br />Front-end code is where I like to work, and I have been enjoying learning the functionality of databases.
                <br />As a Junior Web Developer I consider myself proficient in the following technologies:
              </p>


            </div>
            <div class="col-xl-1 text-center">
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
            </div>

          </div>
        </div>
      </section>
    </>
  )
}