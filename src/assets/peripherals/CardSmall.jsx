import React from 'react'

export const CardSmall = ({ images }) => {
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
