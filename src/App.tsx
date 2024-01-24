// App.js
import './App.css'
import Layout from './Components/Layout.tsx'
import Hero from './Components/Hero.tsx'
import Services from './Components/Services.tsx'
import Skills from './Components/Skills.tsx'
import Contact from './Components/Contact.tsx'
import Portfolio from './Components/Portfolio.tsx'
import Footer from './Components/Footer.tsx'
function App() {
  return (
    <div>
      
        <Layout>
          <Hero />
          <Services />
          <Skills />
          <Portfolio />
          <Contact/>
          <Footer/>
        </Layout>
        
      
      
     
      
    </div>
  )
}

export default App

