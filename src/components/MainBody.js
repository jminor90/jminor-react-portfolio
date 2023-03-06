import '../styles/MainBody.css'
import Image from "../assets/images/patches.png"


export default function MainBody() {

  return (
    <section id="about-me">
      <div class="container">
        <div class="section-title">
          <h2>About Me</h2>
        </div>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>


        <div class="row col-md-12">
          <div class="col-lg-4 col-md-12">
            <img src={Image} class="img-fluid" id="about-me-img" alt=""></img>
          </div>
          <div class="col-lg-8 col-md-12 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li> <b>Birthday:</b> <span>1 May 1995</span></li>
              <li> <b>Website:</b> <span>www.example.com</span></li>
              <li> <b>Phone:</b> <span>+123 456 7890</span></li>
              <li> <b>City:</b> <span>New York, USA</span></li>
            </ul>

            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}