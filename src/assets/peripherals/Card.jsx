import React from 'react'

export const Card = () => {
  return (
    <div className='bg-slate-100 shadow-2xl overflow-clip rounded-2xl h-80 max-w-prose'>
        <div className='rounded-2xl'>
            <img className='object-cover  h-52 w-full' src='./src/assets/Images/cp.jpeg' alt='computer' />
        </div>
        <div className='top-2 text-lg overflow-hidden relative mx-5'>
            <p className='justify-between flex'>Announcement <span>5 MIN TO READ</span></p>
            <h3 className='top-3 pb-4 relative font-bold '>Steps to apply for Student visa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci commodi suscipit nemo temporibus neque exercitationem tempora non vel, quibusdam quod necessitatibus laboriosam at quis nulla ducimus facilis sequi ullam.</h3>
        </div>
    </div>
  )
}
