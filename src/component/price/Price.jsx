import { useState } from "react"

const Price = () => {
 const [isToogle,setIsToogle] = useState(false);
  return (
    <div>
      <div>
        <div className='h-full p-6  border border-gray-600 flex flex-col text-left relative overflow-hidden'>
          <div className='justify-between border-b border-gray-200 pb-5 flex items-center'>
            <h2 className='text-lg tracking-widest title-font mb-1 font-medium'>
              Unlimited Service
            </h2>

            <div className='border  rounded-full '>
              <div className='flex gap-x-1  '>
                <button
                  onClick={() => setIsToogle(false)}
                  className={
                    !isToogle ? 'bg-white p-1 rounded-full text-black' : 'p-1'
                  }
                >
                  Monthly
                </button>

                <button
                  onClick={() => setIsToogle(true)}
                  className={
                    isToogle ? 'bg-white p-1 rounded-full text-black' : 'p-1'
                  }
                >
                  Quarterly
                </button>
              </div>
            </div>
          </div>
          <h1 className='text-5xl mt-5 text-gray-900 leading-none flex items-center pb-4 mb-4 '>
            <span className='text-3xl text-white'>$4,800</span>
            <span className='text-base ml-1 font-normal text-gray-500'>
              + GST/Month
            </span>
          </h1>
          <p className='flex text-xs  text-gray-600 mb-2'>
            <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2.5'
                className='w-3 h-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5'></path>
              </svg>
            </span>
            Unlimited requests (one request at a time)
          </p>
          <p className='flex  text-xs  text-gray-600 mb-2'>
            <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2.5'
                className='w-3 h-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5'></path>
              </svg>
            </span>
            Design requests across brand, product, web design & development
          </p>
          <p className='flex  text-xs  text-gray-600 mb-2'>
            <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2.5'
                className='w-3 h-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5'></path>
              </svg>
            </span>
            Custom quote and design plan to support deliverables in 1 2 days
          </p>
          <p className='flex  text-xs  text-gray-600 mb-2'>
            <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2.5'
                className='w-3 h-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5'></path>
              </svg>
            </span>
            Slack communication integration & 24-hour reply time guarantee
          </p>
          <p className='flex  text-xs  text-gray-600 mb-6'>
            <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2.5'
                className='w-3 h-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5'></path>
              </svg>
            </span>
            All file sources included
          </p>
          <p className='flex  text-xs  text-gray-600 mb-6'>
            <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2.5'
                className='w-3 h-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5'></path>
              </svg>
            </span>
            Completely discretionary
          </p>
          <p className='flex  text-xs  text-gray-600 mb-6'>
            <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2.5'
                className='w-3 h-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5'></path>
              </svg>
            </span>
            Cancel anytime
          </p>
          <button className='flex items-center mt-auto text-black  border-0 py-2 bg-white justify-center font-semibold px-4 w-full focus:outline-none hover:bg-gray-500 uppercase rounded-full hover:text-white'>
            get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Price
