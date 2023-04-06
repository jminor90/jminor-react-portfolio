import ProjectContents from './ProjectContents'
import TheTranslator from '../assets/images/the-translator.png'
import OffNOn from '../assets/images/off-n-on.png'
import MusicJunkeez from '../assets/images/music-junkeez-login.png'
import CircleOfFifths from '../assets/images/circle-of-fifths.png'
// import CartoonTrivia from '../assets/images/trivia-game.png'
// import WeatherDashboard from '../assets/images/weather-dashboard.png'
// import NoSQLNoSocialMedia from '../assets/images/nosql-nosocial-media.png'
// import ReadMeGenerator from '../assets/images/readme-generator.png'


const projects = [
  {
    id: 1,
    name: "Circle of Fifths",
    description: "A simple music theory application that describes musical scales from the Circle of Fifths. Built in ReactJS.",
    deployedLink: "https://jminor90.github.io/circle-of-fifths/",
    githubLink: "https://github.com/jminor90/circle-of-fifths",
    image: CircleOfFifths
  },
  {
    id: 2,
    name: "Music Junkeez",
    description: "A music forum where users can discuss their favorite musical artists, songs, and albums. Built with ReactJS and GraphQL",
    deployedLink: "https://music-junkeez.herokuapp.com/",
    githubLink: "https://github.com/jminor90/music-junkeez",
    image: MusicJunkeez
  },
  {
    id: 3,
    name: "The Tran$lator",
    description: "An application that returns exchange rates, and languages based on what country is serached. Built with HTML,CSS and Javascript",
    deployedLink: "https://jminor90.github.io/the-translator/",
    githubLink: "https://github.com/jminor90/the-translator",
    image: TheTranslator
  },
  {
    id: 4,
    name: "Off-N-On",
    description: "A ticketing application that emulates users being able to submit questions and to be answered by a technician. Built with HandlebarsJS and MySQL.",
    deployedLink: "https://limitless-castle-65696.herokuapp.com/login",
    githubLink: "https://github.com/rxtATX/OffNOn",
    image: OffNOn
  },

  //,
  // {
  //   id: 5,
  //   name: "NoSQL-NoSocial-Media",
  //   description: "A back end application demonstrating MongoDB fundamentals",
  //   deployedLink: "https://github.com/jminor90/NoSQL-NoSocial-Media",
  //   githubLink: "https://github.com/jminor90/NoSQL-NoSocial-Media",
  //   image: NoSQLNoSocialMedia
  // },
  // {
  //   id: 6,
  //   name: "Read Me Generator",
  //   description: "A simple Node.JS application that gives prompts and returns a Markdown file used for a README",
  //   deployedLink: "https://github.com/jminor90/read-me-generator",
  //   githubLink: "https://github.com/jminor90/read-me-generator",
  //   image: ReadMeGenerator
  // }
];

export default function Projects() {

  return (
    <section id="my-projects" >
      <div class="container-fluid d-flex flex-column align-items-center">
        <div class="section-title">
          <h2>My Projects</h2>
        </div>
        <div class="grid">
          <ProjectContents projects={projects} />
        </div>
      </div>
    </section>
  )
}