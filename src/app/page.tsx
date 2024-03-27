import About from "./component/About"
import Contact from "./component/Contact"
import Hero from "./component/Hero"
import Project from "./component/Project"
import Skill from "./component/Skill"

const Home = () => {
  return (
   <>
     <Hero />
     <About/>
     <Project />
     <Contact />
     <Skill />
      
   </>
  )
}

export default Home