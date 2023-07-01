import { Card } from '../assets/peripherals/Card'
import { CardSmall } from '../assets/peripherals/CardSmall'
import { Footer } from '../components/components/Footer/Footer'
export const BlogHost = () => {
  return (
    <div className=' bg-gray-400'>
      <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl place-items-center lg:place-content-center font-mono tracking-tight sm:text-6xl md:text-8xl lg:text-8xl">News, tips, blogs & insights</h2>
          <p className="mt-6 text-lg leading-8">
          All latest news about blogs in one place
          </p>
        </div>
        <Card />
          <CardSmall />
          <section className='relative flex mt-20'>
            <div>
              <Footer />
            </div>
          </section>
    </div>
  )
}
