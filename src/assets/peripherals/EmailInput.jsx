import { useState } from 'react'

export const EmailInput = () => {
    const [value, setValue] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
    }
  return (
    <div className='grid w-screen'>
        <form onSubmit={handleSubmit}>
            <div className='inline-flex right-80 md:absolute outline-none border-2 focus:border-4 focus:w-2/5 rounded-full pl-4 w-96 h-16 border-blue-400 duration-700'>
                <input name='email' multiple='email' value={ value } onChange={(e) => setValue(e.target.value)} placeholder='Your email id...'  />
            </div>
            <div className='absolute bg-blue-100 top-1 left-2/4 focus:bg-blue-700 focus:duration-700 outline-none border-2 rounded-full w-32 h-14 border-blue-400'>
                <button type='submit'>Join Us</button>
            </div>
                
                
        </form>
    </div>
  )
}
