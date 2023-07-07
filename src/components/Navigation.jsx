/*import { NavLink, Outlet } from 'react-router-dom'

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
*/

import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'BlogHost', href: '/', current: true },
  { name: 'Pricing', href: '/Pricing', current: false },
  { name: 'Contact', href: '/Contact', current: false },
  { name: 'Feature', href: '/Feature', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navigation = () => {
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <nav>
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                  
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <img
                        className="h-8 w-8 rounded-full"
                        src="\pg-launchOdbcDocs.ico"
                        alt=""
                      />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="\me2.jpg"
                        alt="my pic"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://testapp1-7tdo.onrender.com/admin/login/?next=/admin/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Login
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://testapp1-7tdo.onrender.com/admin/logout/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div>
      <main>
        <Outlet />
      </main>
    </div>
    </>
  )
}

