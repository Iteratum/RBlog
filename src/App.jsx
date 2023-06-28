import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { BlogHost } from './components/BlogHost'
import { Contact } from './components/Contact'
import { Feature } from './components/Feature'
import { Navigation } from './components/Navigation'
import { Pricing } from './components/Pricing'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigation />}>
      <Route path='/BlogHost' element={<BlogHost />} />
      <Route path='/Feature' element={<Feature />} />
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/Contact' element={<Contact />} />
    </Route>
  )
)


const App = () => {
  return (
    <div className='box-border '>
    <RouterProvider router={router} />
    </div>
  )
}

export default App