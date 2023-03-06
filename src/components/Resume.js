import '../styles/Resume.css'
export default function Resume() {

  return (
    <section id="resume">
      <div class="container">
        <div class="section-title">
          <h2>
            Resume
          </h2>
        </div>
        <p>Lorem ipsum
        </p>

        <div class="row">

          <div class="col-6">
            <h3><u>
              Summary
            </u></h3>
            <div>
              <h4>
                Joshua Minor
              </h4>
              <p><i>
                lorem ipsum
              </i></p>
              <ul>
                <li>Tucson, AZ</li>
                <li>minor.jbm@gmail.com</li>
              </ul>
            </div>

            <h3><u>
              Education
            </u></h3>
            <h4>
              University of Arizona Bootcamp
            </h4>
            <p><i>
              Certification in Web Development
              <br />
              Completed March, 2023
            </i></p>
            <ul>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </div>

          <div class="col-6">
            <h3><u>
              Professional Experience
            </u></h3>

            <div>
              <h4>
                Patient Care Consultant
              </h4>
              <p>
                2021-2022
              </p>
              <p><i>
                <b>AB46 Investments</b>
                <br />
                Alternative Medicine Retail Space - Tucson, AZ
              </i></p>
              <ul>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </div>

            <div>
              <h4>
                Shift Supervisor
              </h4>
              <p>
                2017-2021
              </p>
              <p><i>
                <b>Starbucks</b>
                <br />
                Tucson, AZ
              </i></p>
              <ul>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </div>



          </div>
        </div>
        <div class="row">
          <a href="https://docs.google.com/document/d/1V1UEAm24GcJIsYxJ9zD5ym7RreIp5dUX/edit?usp=sharing&ouid=115658308765347975196&rtpof=true&sd=true" target="_blank">
            <button class="btn" id="downloadButton"><i class="fa fa-download"></i><b>Download my Resume</b> </button>
          </a>
        </div>



      </div>
    </section>
  )
}