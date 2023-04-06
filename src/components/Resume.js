import ResumePDF from '../assets/documents/jminor-resume.pdf'
export default function Resume() {

  return (
    <section id="resume">
      <div class="container-fluid d-flex flex-column align-items-center">
        <div class="section-title">
          <h2>
            Resume
          </h2>
        </div>
        <p>Over 10 years of connecting with customers in a diverse background of retail spaces. Innovative, self-motivated and with a keen sense for details. Adaptive and ready for the next challenge.
        </p>

        <div class="row">

          <div class="col-xl-6">
            <h3><u>
              Summary
            </u></h3>
            <div>
            <p><b>Located in Tucson, Arizona</b></p>
              <p><i>
                Certified Full-Stack Web Developer, with a keen sense for detail and user experience.
              </i></p>

              <ul>

                <li>Fast-paced learner</li>
                <li>Detail orientated</li>
                <li>Self-starter, ready for any challenge</li>
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
              <li>Industry driven Full-Stack curriculum including: HTML, CSS, JavaScript, jQuery, Node.JS, MySQL, Express.js, React.js and MongoDB </li>

            </ul>
          </div>

          <div class="col-xl-6">
            <h3><u>
              Professional Experience
            </u></h3>

            <div>
              <h4><strong>
                Patient Care Consultant
              </strong></h4>
              <p>
                2021-2022
              </p>
              <p><i>
                <b>AB46 Investments</b>
                <br />
                Alternative Medicine Retail Space - Tucson, AZ
              </i></p>
              <ul>
                <li>Assisted Medical Patients in finding the right product for their own specific needs</li>
                <li>Attended educational classes to further knowledge in alternative medicine and product 	knowledge.</li>
                <li>Made personal connections with patients, to build trust, and to follow up with previous medicinal 	experiences.</li>
              </ul>
            </div>

            <div>
              <h4><strong>
                Shift Supervisor
              </strong></h4>
              <p>
                2017-2021
              </p>
              <p><i>
                <b>Starbucks</b>
                <br />
                Coffee Shop and Retail Space - Tucson, AZ
              </i></p>
              <ul>
                <li>Primary closing supervisor handling inventory management, product delivery, and personnel</li>
                <li>Working in a cooperative fast paced environment, overcoming unseen obstacles during our shifts 	together and learning from them to grow as a team</li>
                <li>Connect with customers and help deliver the Starbucks experience by creating a warm and comforting environment in the restaurant space</li>
              </ul>
            </div>



          </div>
        </div>
        <div class="row">
          <a download href={ResumePDF}>
            <button class="btn" id="downloadButton"><i class="fa fa-download"></i><b>Download my Resume</b> </button>
          </a>
        </div>



      </div>
    </section>
  )
}