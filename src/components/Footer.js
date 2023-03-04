import '../styles/Footer.css'

export default function Footer() {

  return (
    <footer>
      <div class="container">
        <section id="contact-me" class="contact-me">
          <h4><p>Contact Me</p></h4>
          <ul>
            <a href="mailto:minor.jbm@gmail.com">
              <li>
                Email
              </li>
            </a>
            <a href="https://github.com/jminor90" target="_blank">
              <li>
                GitHub
              </li>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <li>
                LinkedIn
              </li>
            </a>
          </ul>
        </section>
      </div>
    </footer>
  )
}