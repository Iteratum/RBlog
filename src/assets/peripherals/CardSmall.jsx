
/*export const CardSmall = ({ images }) => {
  return (
    <div className='bg-slate-100 shadow-2xl overflow-clip rounded-2xl h-96 w-96'>
        <div className='rounded-2xl'>
            <img className='object-cover h-52 w-full' src={ images } alt='computer' />
        </div>
        <div className='top-3 h-32 overflow-hidden text-lg relative mx-5'>
            <p className='justify-between flex'>Blog <span>5 MIN TO READ</span></p>
            <h3 className='top-3 pb-4 relative font-bold '>Steps to Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum expedita alias labore veniam ducimus, iste fugiat accusantium fugit nisi mollitia, vitae quisquam harum sint eveniet porro id ab temporibus. apply for Student visa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci commodi suscipit nemo temporibus neque exercitationem tempora non vel, quibusdam quod necessitatibus laboriosam at quis nulla ducimus facilis sequi ullam.</h3>
        </div>
    </div>
  )
}
*/

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: './src/assets/Images/images.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: './src/assets/Images/images.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: './src/assets/Images/images.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export const CardSmall = () => {
  return (
    <div className="bg-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">

          <div className="mt-6 space-y-12 gap-y-6 gap-x-3 grid grid-cols-1 md:grid md:grid-cols-2 md:space-y-0 lg:grid lg:grid-cols-3 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}