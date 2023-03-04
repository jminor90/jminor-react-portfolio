import '../styles/Project.css'
export default function Projects() {
  
  return (
    <section id="my-projects" class ="d-flex align-items-center justify-content-center">
      <div class="container ">
        <h2>My Projects</h2>
        <div class="container grid">

          <div class="img-wrapper">
          <img class="p-2 blur" src="https://picsum.photos/300?random=1"/>
          <div class="content fade slide-up">1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maiores aspernatur explicabo maxime doloremque rem porro ad in eveniet error!</div>
          </div>

          <div class="img-wrapper">
          <img class="p-2 blur" src="https://picsum.photos/300?random=2"/>
          <div class="content fade slide-up">2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maiores aspernatur explicabo maxime doloremque rem porro ad in eveniet error!</div>
          </div>

          <div class="img-wrapper">
          <img class="p-2 blur" src="https://picsum.photos/300?random=3"/>
          <div class="content fade slide-up">3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maiores aspernatur explicabo maxime doloremque rem porro ad in eveniet error!</div>
          </div>

          <div class="img-wrapper">
          <img class="p-2 blur" src="https://picsum.photos/300?random=4"/>
          <div class="content fade slide-up">4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maiores aspernatur explicabo maxime doloremque rem porro ad in eveniet error!</div>
          </div>

        </div>
      </div>

    </section>
  )
}