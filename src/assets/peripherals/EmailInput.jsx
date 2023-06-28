import { useState } from 'react'

export const EmailInput = () => {
    const [value, setValue] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
    }
  return (
    <div className='flex relative h-32 w-screen'>
        <form onSubmit={handleSubmit}>
            <label>
                <input name='email' multiple='email' value={ value } onChange={(e) => setValue(e.target.value)} placeholder='Your email id...' className='flex right-80 absolute outline-none border-2 focus:border-4 focus:w-2/5 rounded-full pl-4 w-96 h-16 border-blue-400 duration-700' />
                <button type='submit' className='absolute bg-blue-100 top-1 left-2/3 focus:bg-blue-700 focus:duration-700 outline-none border-2 rounded-full w-32 h-14 border-blue-400'>Join Us</button>
            </label>
        </form>
    </div>
  )
}
