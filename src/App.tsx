import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Differentials from './components/Differentials/Differentials'
import ContactCTA from './components/ContactCTA/ContactCTA'
import Location from './components/Location/Location'
import Instagram from './components/Instagram/Instagram'
import Footer from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Gallery />
        <ContactCTA />
        <Location />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
