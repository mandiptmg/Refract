
const GetStarted = () => {
  return (
    <div>
      <h1 className='text-3xl text-center md:text-5xl'>Get started</h1>
      <form className='mt-10 grid gap-y-4 max-w-[661px] mx-auto'>
        <div>
          <label className='text-sm' htmlFor='name'>
            Full name
          </label>
          <input
            placeholder='Enter full name'
            type='text'
            className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
            id='name'
          />
        </div>
        <div>
          <label className='text-sm' htmlFor='email'>
            Enter work email
          </label>
          <input
            placeholder='Enter email'
            type='email'
            className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
            id='name'
          />
        </div>
        <div>
          <label className='text-sm' htmlFor='business'>
            Business name
          </label>
          <input
            type='text'
            placeholder='Enter business name'
            className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
            id='name'
          />
        </div>
        <div>
          <label className='text-sm' htmlFor='option'>
            ABN(Optional)
          </label>
          <input
            type='text'
            placeholder='Enter your ABN'
            className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
            id='name'
          />
        </div>
        <div>
          <label className='text-sm' htmlFor='business size'>
            Business size
          </label>
          <input
            type='text'
            placeholder='Enter business size'
            className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
            id='name'
          />
        </div>
        <div>
          <label className='text-sm' htmlFor='industry'>
            Industry
          </label>
          <input
            type='text'
            placeholder='Enter industry your business works in'
            className=' block w-full p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
            id='name'
          />
        </div>
        <div>
          <p className='text-base'>Would you class yourself as a startup?</p>
          <div className='flex gap-x-2'>
            <input
              type='checkbox'
              className=' p-2 border border-gray-400  outline-gray-400 bg-[#1A1A1A;]'
              id='name'
            />
            <h1>yes</h1>
          </div>
        </div>
        <div>
          <select
            name=''
            id=''
            className=' w-full p-2 border border-gray-400 text-gray-400 outline-gray-400 bg-[#1A1A1A;]'
          >
            <option value='Enter stage'>Enter stage</option>
            <option value='Basic'>Basic</option>
            <option value='Expert'>Expert</option>
            <option value='Advance'>Advance</option>
          </select>
        </div>
        <hr className="my-3"/>
        <div className='flex gap-x-2'>
          <input type='checkbox' name='' id='' />
          <p>I agree to the Terms of Use and Privacy Policy</p>
        </div>
        <div>
          <button className='bg-white hover:bg-slate-600 rounded-full text-black uppercase p-3 '>
            Continue to checkout
          </button>
        </div>
      </form>
    </div>
  )
}

export default GetStarted
