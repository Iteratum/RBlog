import { Card } from '../assets/peripherals/Card'
import { CardSmall } from '../assets/peripherals/CardSmall'
import { EmailInput } from '../assets/peripherals/EmailInput'
import { Footer } from '../components/components/Footer/Footer'
export const BlogHost = () => {
  return (
    <div className='w-[100vw] h-[70vh] box-border mx-8'>
      <div className='flex md:flex-shrink text-center font-bold justify-center items-center'>
        <h1 className='lg:text-8xl md:text-lg pt-10 font-mono'>News, tips, blogs & insights
        <br /><span className='text-xl'>All latest news about blogs in one place</span></h1>
        
      </div>
      <div className=''>
        <section className=''>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 py-6 gap-5'>
            <Card />
            <Card />
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 py-6 gap-5'>
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
            <CardSmall images='./src/assets/Images/images.jpeg' />
          </div>
          <section className='relative flex my-20'>
            <div>
              <EmailInput />
              <Footer />
            </div>
          </section>
        </section>
        
      </div>
    </div>
  )
}
