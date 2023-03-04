import Navbar from "./Navbar"
import MainBody from "./MainBody"
import Footer from "./Footer"
import Projects from './Projects'
import Hero from './Hero'
import Resume from './Resume'

export default function MainContainer() {
  return (
    <>
      <Hero/>
      <Navbar/>
      <MainBody/>
      <Projects/>
      <Resume/>
      <Footer/>
    </>
  )
}