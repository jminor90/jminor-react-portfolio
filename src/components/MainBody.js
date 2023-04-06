import '../styles/MainBody.css'
import HeadShot from "../assets/images/HeadShot.png"
import Badge from "../assets/images/full-stack-badge.png"


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
              <img src={HeadShot} class="img-fluid" id="about-me-img" alt=""></img>
            </div>

            <div class="col-xl-8 d-flex flex-column align-items-center m-1">
              <p>Throughout my life I have been fascinated with computers and technology. I enjoy problem-solving and being able to express my creativity. I taught myself how to play music, and attempted to take my career and education in that direction. After some time I decided to bring my focus back to working with computers, and coding. I was already familiar with HTML,Visual BASIC, and Python to develop my curiosity.
                As of March, 2023 I have graduated from the <a href="https://ce.arizona.edu/classes/coding-boot-camp" target="_blank"><strong><u>University of Arizona's Web Development Certification</u></strong></a> and consider myself a ... </p>


              <h3><strong><i>Full-Stack Web Developer</i></strong></h3>

            </div>



          </div>



          <div class="row">
            <div class="col-xl-9 d-flex align-items-center">

              <p>
                I enjoy making applications, and find the problem-solving part of coding to be very satisfying.
                <br />Front-end code is where I like to work, and I have been enjoying learning the functionality of databases.
                <br />As a Junior Web Developer I consider myself proficient in the following technologies:
              
              
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
              </p>
            </div>
            <div class="col-xl-3 text-center">
              <a href="https://arizona.badgr.com/public/assertions/bXeDZO9uTd26UtPpPyUUqw" target="_blank">
              <img src={Badge} class="img-fluid" id="fs-badge"></img>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}