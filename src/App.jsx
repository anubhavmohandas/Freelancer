import { useFadeIn } from './hooks/useFadeIn'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const ref = useFadeIn()
  const { theme, toggle } = useTheme()

  return (
    <div ref={ref}>
      <Navbar theme={theme} toggleTheme={toggle} />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
