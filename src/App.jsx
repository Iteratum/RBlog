import { BrowserRouter as Router, Route, Routes } from "../node_modules/react-router-dom/"
import { Contact } from './components/Contact'
import { Feature } from './components/Feature'
import { Navigation } from './components/Navigation'
import { Pricing } from './components/Pricing'
import { BlogHost } from "./components/BlogHost"
import { Footer } from "./components/components/Footer/Footer"



const App = () => {
  return (
    <div className='box-border '>
      <Router>
        <Navigation />
        <div>
        <Routes>
          <Route path="/" element={<BlogHost />} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App