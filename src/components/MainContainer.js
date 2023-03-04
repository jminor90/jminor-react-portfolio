import Navbar from "./Navbar"
import MainBody from "./MainBody"
import Footer from "./Footer"
import Projects from './Projects'
import Hero from './Hero'

export default function MainContainer() {
  return (
    <>
      <Hero/>
      <Navbar/>
      <MainBody/>
      <Projects/>
      <Footer/>
    </>
  )
}