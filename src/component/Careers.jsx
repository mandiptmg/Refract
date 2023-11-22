const data = [
  {
    title: 'Mid-weight designer',
    desc: 'As a Midweight Designer you will be at the heart of the studios design output. Creating work that drives projects forward, you will be relied upon',
  },
  {
    title: 'Mid-weight designer',
    desc: 'As a Midweight Designer you will be at the heart of the studios design output. Creating work that drives projects forward, you will be relied upon',
  },
  {
    title: 'Mid-weight designer',
    desc: 'As a Midweight Designer you will be at the heart of the studios design output. Creating work that drives projects forward, you will be relied upon',
  },
  {
    title: 'Mid-weight designer',
    desc: 'As a Midweight Designer you will be at the heart of the studios design output. Creating work that drives projects forward, you will be relied upon',
  },
  {
    title: 'Wildcard ',
    desc: 'Come from a non-traditional background, but think we should talk?',
  },
]
const Careers = () => {
  return (
    <>
      <div className='mt-24'>
        <h1 className='font-[PP Fragment] md:text-[64px] text-[40px] font-normal leading-normal'>
          Careers at Refract
        </h1>
        <p className='mt-6 font-[PP Fragment] md:text-[30px] text-[15px] font-normal leading-normal '>
          Want to gain experience which works around your studies or other
          commitments? Are you an accomplished designer looking for a new
          challenge? We could be the perfect fit.
        </p>
      </div>
      <svg
        className='my-16 w-full'
        xmlns='http://www.w3.org/2000/svg'
        width='1440'
        height='81'
        viewBox='0 0 1440 81'
        fill='none'
      >
        <path d='M-2 1H1180L1100.5 80.5H1439.5' stroke='#636363' />
      </svg>
      <div>
        <h1 className='text-center font-[PP Fragment] md:text-[54px] text-[27px] font-normal leading-normal '>
          Open roles
        </h1>
        <p className='text-gray-500 text-center font-[PP Fragment] md:text-2xl text-[13px] font-normal leading-normal '>
          We cover all your creative needs. So you can focus on the borin... fun
          stuff :)
        </p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2  gap-10 my-16'>
          {data.map((item, index) => {
            const { title, desc } = item
            return (
              <>
                <div key={index} className='border border-white p-3 shadow-md'>
                  <span className='uppercase text-gray-600 text-xs'>
                    remote
                  </span>
                  <h1 className='text-xl my-1'>{title}</h1>
                  <p>{desc}</p>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='46'
                      height='46'
                      viewBox='0 0 46 46'
                      fill='none'
                    >
                      <path
                        d='M5.27091 7.66675C4.477 7.66675 3.83341 8.31034 3.83341 9.10425L3.83341 21.5626C3.83341 25.5321 7.05136 28.7501 11.0209 28.7501L37.2106 28.7501L30.0818 35.8794C29.5715 36.3898 29.5251 37.1884 29.9427 37.7512L30.0818 37.9124C30.5922 38.4227 31.3908 38.4691 31.9535 38.0516L32.1148 37.9124L41.6981 28.329C42.2085 27.8187 42.2548 27.0201 41.8373 26.4573L41.6981 26.2961L32.1148 16.7128C31.5534 16.1514 30.6432 16.1514 30.0818 16.7128C29.5715 17.2231 29.5251 18.0217 29.9427 18.5845L30.0818 18.7457L37.2106 25.8751L11.0209 25.8751C8.73842 25.8751 6.87009 24.1019 6.71835 21.8578L6.70841 21.5626L6.70841 9.10425C6.70841 8.31034 6.06482 7.66675 5.27091 7.66675Z'
                        fill='white'
                      />
                    </svg>
                  </span>
                </div>
              </>
            )
          })}
        </div>
       
      </div>
    </>
  )
}

export default Careers
