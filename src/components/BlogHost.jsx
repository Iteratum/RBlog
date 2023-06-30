import { Card } from '../assets/peripherals/Card'
import { CardSmall } from '../assets/peripherals/CardSmall'
import { EmailInput } from '../assets/peripherals/EmailInput'

export const BlogHost = () => {
  return (
    <div className='flex w-[100vw] h-[70vh] box-border relative top-20 mx-8'>
        <div className='fixed text-center font-bold justify-center items-center'>
          <h1 className='text-9xl font-mono'>News, tips, blogs & insights</h1><br />
          <p className='text-xl'>All latest news about blogs in one place</p>
        </div>
        <div>
          <section className='relative flex-wrap top-96 flex gap-4'>
            <Card />
            <Card />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
          </section>
          <section className='relative flex top-96 my-20'>
            <h4 className='text-2xl left-32 top-4 absolute font-bold'>Get notified about our blogs published</h4>
            <div>
              <EmailInput />
            </div>
          </section>
        </div>
        <footer className='relative top-[105em] right-full '>
          <div className='absolute'>
            <h6 className='text-7xl font-bold'>Bloghub</h6>
            <a href='#'><p className='text-2xl mt-8'>Privacy Policy</p></a>
            <div className='grid grid-cols-3 top-10 relative'>
              <a href='#'><img className='w-16 h-16' src='./src/assets/Images/371907030_TWITTER_ICON_400px.gif' /></a>
              <a href='#'><img className='w-16 h-16' src='./src/assets/Images/371907490_FACEBOOK_ICON_400px.gif' /></a>
              <a href='#'><img className='w-16 h-16' src='./src/assets/Images/372102050_LINKEDIN_ICON_400px.gif' /></a>
            </div>
          </div>
          <section className='relative whitespace-nowrap top-44 font-mono col-span-2 left-80 flex gap-x-28 grid-cols-3'>
            <div>
              <h2 className='font-bold'>Product</h2>
              <a href='#'><p>Features</p></a>
              <a href='#'><p>Pricing</p></a>
              <a href='#'><p>Contact</p></a>
            </div>
            <div>
              <h2 className='font-bold'>Resources</h2>
              <a href='#'><p>Newsletters</p></a>
              <a href='#'><p>Blogs</p></a>
              <a href='#'><p>Events</p></a>
            </div>
            <div>
              <h2 className='font-bold'>Company</h2>
              <a href='#'><p>About Us</p></a>
              <a href='#'><p>FAQs</p></a>
              <a href='#'><p>Contact Us</p></a>
            </div>
            <div>
              <p className='font-bold text-center text-xl'>Got it</p>
              <button className='p-5 rounded-full border-2 bg-blue-800'>Download now</button>
            </div>
          </section>
        </footer>
    </div>
  )
}
