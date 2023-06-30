import { NavLink, Outlet } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className='sticky drop-shadow-lg bg-gradient-to-r from-green-400 to-blue-500 w-screen h-16'>
        <header  className='flex justify-between item-center relative px-4 top-4'>
          <nav className='text-emerald-700 font-bold ' > 
            <NavLink className='py-2 text-lime-400 text-2xl' to="BlogHost">BlogHost</NavLink>
          </nav>
          <nav className='relative px-8 gap-x-5' >
            <NavLink className='px-6 py-2 duration-700 hover:text-emerald-300 border-lime-300' to="Feature">Feature</NavLink>
            <NavLink className='px-6 py-2 duration-700 hover:text-emerald-300' to="Pricing">Pricing</NavLink>
            <NavLink className='px-6 py-2 duration-700 hover:text-emerald-300' to="Contact">Contact</NavLink>
          </nav>
          <nav>
            <NavLink className='px-6 py-2 duration-700 hover:text-emerald-300' to="Login">Login</NavLink>
            <NavLink className='px-6 py-2 duration-700 hover:text-emerald-300 bg-sky-900 text-white rounded-2xl' to="SignUp">Sign Up</NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
    </div>
  )
}
