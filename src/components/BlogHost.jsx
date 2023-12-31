import { Card } from '../assets/peripherals/Card'
import { CardSmall } from '../assets/peripherals/CardSmall'
import { Flwpayment } from '../assets/peripherals/Flwpayment'

export const BlogHost = () => {
  return (
    <div className=' bg-gray-400'>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl place-items-center lg:place-items-center font-mono tracking-tight sm:text-6xl md:text-8xl lg:text-8xl"
        >News, tips, blogs & insights</h2>
        <p className="mt-6 text-xl md:text-2xl lg:text-4xl leading-8">
        All latest news about blogs in one place
        </p>
      </div>
      <section>
        <Card />
        <CardSmall />
        <Flwpayment />
      </section>
    </div>
  )
}
