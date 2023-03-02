import Projects from "./Projects"
export default function MainBody() {
  
  return (
    <main class="main-content">
      <section id="about-me" class="about-me">
      <h2>
        <p>
          About Me
        </p>
      </h2>
        
          <p>
            From a very young age I have always been fascinated with computers and technology. I witnessed the beginning of dial up internet, and grew fascinated by how easy it was for people across the world to connect. I learned around that time what HTML was and attempted to build some websites of my own. During High School I took a class for Visual Basic and HTML which further developed my curiosity in coding.
              <br/>
            However, I decided to pursue my other passion - music. After some time I decided to make a change in my life and got back into coding again. More recently I've been coding with Python and leaning Web Development with the Coding Bootcamp offered through the University of Arizona.
          </p>
        </section>
      <Projects/>
    </main>
  )
}