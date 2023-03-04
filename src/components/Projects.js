import '../styles/Project.css'
export default function Projects() {
  
  return (
    <section id="my-projects">
      <div class="container">
        <h3><p>My Projects</p></h3>

        <div class="row my-projects">
          <div class="col-lg-6">
            <span tabindex="0" data-descr="Collaborative project - Utilizing 3rd Party APIs & jQuery">
              <a href="https://github.com/jminor90/the-translator" target="_blank">
                <figure class="project-1">The Tran$lator</figure>
              </a>
            </span>
            
          </div>
          <div class="col-lg-6">
            <img src="https://picsum.photos/300"></img>
          </div>
          <div class="col-lg-6">
            <img src="https://picsum.photos/300"></img>
          </div>
          <div class="col-lg-6">
            <img src="https://picsum.photos/300"></img>
          </div>

        </div>



      </div>
    </section>
  )
}