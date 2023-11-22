import JoditEditor from 'jodit-react'
import { useRef, useState } from 'react'

const Contact = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')
  return (
    <>
      <div className='w-[75vw] mx-auto'>
        <h1 className='text-3xl md:text-5xl'>Get in contact</h1>
        <form className='mt-10 grid gap-y-4 '>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <label className='text-sm' htmlFor='name'>
                First name
              </label>
              <input
                placeholder='First name'
                type='text'
                className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
                id='name'
              />
            </div>
            <div>
              <label className='text-sm' htmlFor=' last name'>
                Last name
              </label>
              <input
                placeholder='Last name'
                type='text'
                className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
                id='name'
              />
            </div>
          </div>
          <div>
            <label className='text-sm' htmlFor='email'>
              Email address
            </label>
            <input
              placeholder=' Email Address'
              type='email'
              className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
              id='name'
            />
          </div>
          <div>
            <label className='text-sm' htmlFor='number'>
              Contact number
            </label>
            <input
              type='number'
              placeholder='Contact number'
              className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
              id='name'
            />
          </div>
          <div>
            <label className='text-sm' htmlFor='category'>
              What is your enquiry related to
            </label>
            <input
              type='text'
              placeholder='Pick a category'
              className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
              id='name'
            />
          </div>
          <div>
            <label className='text-sm' htmlFor='subject'>
              Enter subject
            </label>
            <input
              type='text'
              placeholder='Subject'
              className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
              id='name'
            />
          </div>
          <div>
            <label className='text-sm' htmlFor='subject'>
              Enter information
            </label>
            <JoditEditor
              className='text-black'
              ref={editor}
              value={content}
              // config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
          <div className='flex gap-x-2'>
            <input type='checkbox' name='' id='' />
            <p>I agree to the Terms of Use and Privacy Policy</p>
          </div>
          <div>
            <button className='bg-white hover:bg-slate-600 rounded-full text-black uppercase p-3 '>
              SUBMIT ENQUIRY
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
