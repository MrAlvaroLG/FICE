import './index.css'
import { NavigationBar } from './components/Navbar/navbar'
import { FrontText } from './components/front text/text'
import { Intro } from './components/intro/intro'
import { Slider } from './components/Slider/Slider'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div>
      <NavigationBar />
      <FrontText/>
      <Intro/>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default App
