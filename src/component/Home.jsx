// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import man from '../assets/man.svg'
import Price from './price/Price'
import data from './question/data'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Question from './question/Question'
import 'animate.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [question,setQuestion] = useState(data)
    

  return (
    <>
      <div className='w-full'>
        <p className='md:text-6xl animate__animated animate__slower animate__backInLeft text-2xl uppercase font-thin pt-32  '>
          We are a small elite design studio dedicated to making the most
          memorable experiences within our time.
        </p>
        <div className='gap-5 animate__animated animate__slower animate__backInLeft animate__delay-2s  flex mt-1'>
          <button className='uppercase border border-white rounded-full py-2 px-2  hover:text-black hover:bg-white mt-8'>
            <NavLink to='/get-started'>get started</NavLink>
          </button>
          <button className='uppercase border border-white rounded-full py-2 px-2  hover:text-black hover:bg-white mt-8'>
            book a strategy call
          </button>
        </div>
      </div>
      <svg
        className='mt-16 w-full'
        width='1440'
        height='81'
        viewBox='0 0 1440 81'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M-2 1H1180L1100.5 80.5H1439.5' stroke='#636363' />
      </svg>
      <div className='w-full'>
        <div className='flex items-center'>
          <svg
            width='15'
            height='29'
            viewBox='0 0 15 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M14.5 1H1V28.5' stroke='white' />
          </svg>
          <h6 className='text-xs'>Who we are</h6>
          <svg
            width='14'
            height='28'
            viewBox='0 0 14 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 27.5H13.5V0' stroke='white' />
          </svg>
        </div>
        <p className=' mt-5 max-w-[970px]  md:text-[24px] font-[500]'>
          Lorem ipsum dolor sit amet consectetur. Hac venenatis mauris justo
          urna quam fermentum quam semper ipsum. Ac et at morbi mi egestas massa
          est viverra. Massa bibendum nunc urna aliquet vel dictum.Lorem ipsum
          dolor sit amet consectetur. Hac venenatis mauris justo urna quam
          fermentum quam semper ipsum. Ac et at morbi mi egestas massa est
          viverra. Massa bibendum nunc urna aliquet vel dictum.
        </p>
      </div>
      <svg
        className='w-full my-16'
        xmlns='http://www.w3.org/2000/svg'
        width='1440'
        height='81'
        viewBox='0 0 1440 81'
        fill='none'
      >
        <path d='M1441.5 1H259.5L339 80.5H0' stroke='#636363' />
      </svg>
      <div>
        <div className='flex items-center'>
          <svg
            width='15'
            height='29'
            viewBox='0 0 15 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M14.5 1H1V28.5' stroke='white' />
          </svg>
          <h6 className='text-xs'>What we offer</h6>
          <svg
            width='14'
            height='28'
            viewBox='0 0 14 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 27.5H13.5V0' stroke='white' />
          </svg>
        </div>
        <div className='mt-10'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='md:text-[54px] text-lg  font-[400] leading-normal'>
                Together there is nothing we can’t do
              </p>
              <p className='md:text-[24px] text-sm   font-[500] text-gray-400  leading-normal'>
                We cover all your creative needs. So you can focus on the
                borin... fun stuff :)
              </p>
            </div>
            <div className='relative'>
              <svg
                className='w-[95px] md:w-full'
                xmlns='http://www.w3.org/2000/svg'
                width='135'
                height='136'
                viewBox='0 0 135 136'
                fill='none'
              >
                <circle
                  cx='67.0579'
                  cy='68.0002'
                  r='66.5'
                  transform='rotate(-15 67.0579 68.0002)'
                  stroke='#D9D9D9'
                />
              </svg>
              <svg
                className='absolute w-[75px] md:w-full top-10 left-2 md:left-0'
                xmlns='http://www.w3.org/2000/svg'
                width='113'
                height='53'
                viewBox='0 0 113 53'
                fill='none'
              >
                <path d='M3.50842 40.9225L109.76 12.4524' stroke='white' />
                <path
                  d='M79.9621 7.49585L108.955 12.6681L86.2169 30.8391'
                  stroke='white'
                />
              </svg>
              <h1 className='text-xs md:text-lg absolute top-[4.2rem] md:left-8 left-5  rotate-[-15deg]'>
                SCROLL
              </h1>
            </div>
          </div>
          <div className='my-10'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className='mySwiper'
            >
              {data.map((item, index) => {
                const { title, desc } = item
                return (
                  <SwiperSlide key={index}>
                    <div className='border border-white p-3'>
                      <div className='h-32'></div>
                      <h1 className='text-xl my-2'>{title}</h1>
                      <p className='text-gray-400 text-sm'>{desc}</p>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>{' '}
      <svg
        className='w-full my-20'
        xmlns='http://www.w3.org/2000/svg'
        width='1431'
        height='95'
        viewBox='0 0 1431 95'
        fill='none'
      >
        <path d='M0 1H617.5L524.5 94H1433' stroke='#636363' />
      </svg>
      <div>
        <div className='flex justify-center items-center'>
          <svg
            width='15'
            height='29'
            viewBox='0 0 15 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M14.5 1H1V28.5' stroke='white' />
          </svg>
          <h6 className='text-xs'>A peak at our process</h6>
          <svg
            width='14'
            height='28'
            viewBox='0 0 14 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 27.5H13.5V0' stroke='white' />
          </svg>
        </div>
        <div className='text-center'>
          <p className='md:text-[54px] my-4 text-lg  font-[400] leading-normal'>
            Together there is nothing we can’t do
          </p>
          <span className='text-sm uppercase rounded-full p-2 border border-white'>
            download our process booklet
          </span>
          <div>
            <img src={man} className='w-full my-16' alt='phase' />
          </div>
        </div>
      </div>
      <svg
        className='w-full my-16'
        xmlns='http://www.w3.org/2000/svg'
        width='1431'
        height='95'
        viewBox='0 0 1431 95'
        fill='none'
      >
        <path d='M0 1H617.5L524.5 94H1433' stroke='#636363' />
      </svg>
      <div>
        <div className='flex justify-center items-center'>
          <svg
            width='15'
            height='29'
            viewBox='0 0 15 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M14.5 1H1V28.5' stroke='white' />
          </svg>
          <h6 className='text-xs'>A peak at our process</h6>
          <svg
            width='14'
            height='28'
            viewBox='0 0 14 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 27.5H13.5V0' stroke='white' />
          </svg>
        </div>
        <div className='text-center'>
          <h1 className='md:text-[54px] my-4 text-lg  font-[400] leading-normal'>
            Pricing
          </h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between items-center'>
            <Price />
            <Price />
            <Price />
          </div>
          <div className='flex gap-x-4 my-8 items-center border border-white px-1 py-3  '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='54'
              height='54'
              viewBox='0 0 54 54'
              fill='none'
            >
              <path
                d='M26.3163 37.9258L17.0779 27.144C15.333 25.1076 15.2984 22.1134 16.9956 20.0372C19.0487 17.5256 22.8114 17.3092 25.139 19.5687L26.9997 21.375L28.8605 19.5687C31.1883 17.3092 34.9512 17.5258 37.0044 20.0375C38.7019 22.114 38.6671 25.1086 36.9218 27.1452L27.6832 37.9258C27.3239 38.345 26.6755 38.345 26.3163 37.9258ZM49.5 27C49.5 39.4264 39.4264 49.5 27 49.5C14.5736 49.5 4.5 39.4264 4.5 27C4.5 14.5736 14.5736 4.5 27 4.5C39.4264 4.5 49.5 14.5736 49.5 27ZM46.125 27C46.125 16.4376 37.5624 7.875 27 7.875C16.4376 7.875 7.875 16.4376 7.875 27C7.875 37.5624 16.4376 46.125 27 46.125C37.5624 46.125 46.125 37.5624 46.125 27Z'
                fill='white'
              />
            </svg>
            <div className='text-left'>
              <h1 className='text-base'>Are you a charity or NFP? </h1>
              <p className='text-sm text-gray-500'>
                Get in touch and we can organise something special for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-4 mt-32 mb-24' />
      <div>
        <div className='flex items-center'>
          <svg
            width='15'
            height='29'
            viewBox='0 0 15 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M14.5 1H1V28.5' stroke='white' />
          </svg>
          <h6 className='text-xs'>FAQ</h6>
          <svg
            width='14'
            height='28'
            viewBox='0 0 14 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 27.5H13.5V0' stroke='white' />
          </svg>
        </div>
        <div>
          <p className='md:text-[54px] my-4 text-lg  font-[400] leading-normal'>
            Sure you ve got some questions
          </p>
          <div>
            <button className='rounded-full border hover:bg-white hover:text-black border-white p-1 text-sm md:text-lg'>
              Design subscription
            </button>
            <button className='rounded-full border mx-3 hover:bg-white hover:text-black border-white p-1 text-sm md:text-lg'>
              Services & tools
            </button>
            <button className='rounded-full border hover:bg-white hover:text-black border-white p-1 text-sm md:text-lg'>
              Adhoc work
            </button>
          </div>
        </div>
      </div>
      <hr className='h-4 mt-32 mb-8' />
      <div>
        {question.map((question) => {
          return <Question key={question.id} {...question}></Question>
        })}
      </div>
      <svg
        className='w-full my-16'
        xmlns='http://www.w3.org/2000/svg'
        width='1440'
        height='94'
        viewBox='0 0 1440 94'
        fill='none'
      >
        <path d='M1440 1H616.215L725.253 93H-7' stroke='#636363' />
      </svg>
      <div>
        <div className='text-center'>
          <p className='md:text-[54px] text-lg  font-[400] leading-normal'>
            Still unsure?
          </p>
          <p className='md:text-[24px] text-sm   font-[500] text-gray-400  leading-normal'>
            Let us convince you
          </p>
          <div
            className='flex gap-4 my-5 justify-center
           items-center'
          >
            <button className='flex border p-3 rounded-full hover:bg-white hover:text-black text-sm md:text-base  uppercase  gap-x-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
              >
                <path
                  d='M7.55658 2.41795L8.72358 2.06619C10.0461 1.66755 11.4591 2.31179 12.0254 3.57161L12.9271 5.57733C13.4098 6.65117 13.1554 7.91317 12.2944 8.71612L10.8001 10.1096C10.7564 10.1503 10.7288 10.2053 10.7221 10.2647C10.6778 10.6618 10.947 11.4352 11.5673 12.5095C12.0183 13.2908 12.4266 13.8387 12.7741 14.1468C13.0162 14.3615 13.1494 14.4079 13.2062 14.391L15.2165 13.7764C16.3421 13.4323 17.5619 13.8426 18.2506 14.7971L19.5313 16.5721C20.3374 17.6893 20.1925 19.2306 19.1922 20.1779L18.3058 21.0173C17.3494 21.9231 15.9879 22.2606 14.7191 21.9065C11.965 21.1378 9.49572 18.8137 7.28384 14.9826C5.06889 11.1462 4.2917 7.84173 5.00815 5.06994C5.33602 3.80146 6.30215 2.79607 7.55658 2.41795ZM7.98948 3.85413C7.23682 4.081 6.65715 4.68423 6.46043 5.44532C5.85778 7.77684 6.54663 10.7057 8.58288 14.2326C10.6164 17.7548 12.8054 19.815 15.1224 20.4617C15.8836 20.6742 16.7006 20.4717 17.2744 19.9282L18.1608 19.0888C18.6154 18.6582 18.6813 17.9576 18.3149 17.4498L17.0342 15.6748C16.7211 15.241 16.1667 15.0544 15.655 15.2109L13.6397 15.827C12.47 16.1757 11.4083 15.2342 10.2682 13.2595C9.49993 11.9288 9.14183 10.9001 9.2314 10.0982C9.2778 9.68273 9.47137 9.29763 9.77709 9.01254L11.2714 7.61909C11.6628 7.25411 11.7784 6.68047 11.559 6.19237L10.6573 4.18665C10.3999 3.614 9.75762 3.32116 9.15648 3.50236L7.98948 3.85413Z'
                  fill='#212121'
                />
              </svg>
              schedule a call
            </button>
            <button className='flex text-sm md:text-base border p-3 rounded-full hover:bg-white hover:text-black uppercase  gap-x-2 items-center'>
              <svg
                className=''
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
              >
                <path
                  d='M5.75 4H19.25C20.983 4 22.3992 5.35645 22.4949 7.06558L22.5 7.25V16.75C22.5 18.483 21.1435 19.8992 19.4344 19.9949L19.25 20H5.75C4.01697 20 2.60075 18.6435 2.50514 16.9344L2.5 16.75V7.25C2.5 5.51697 3.85645 4.10075 5.56558 4.00514L5.75 4H19.25H5.75ZM21 9.373L12.8493 13.6637C12.6619 13.7623 12.4431 13.7764 12.2468 13.706L12.1507 13.6637L4 9.374V16.75C4 17.6682 4.70711 18.4212 5.60647 18.4942L5.75 18.5H19.25C20.1682 18.5 20.9212 17.7929 20.9942 16.8935L21 16.75V9.373ZM19.25 5.5H5.75C4.83183 5.5 4.07881 6.20711 4.0058 7.10647L4 7.25V7.679L12.5 12.1525L21 7.678V7.25C21 6.33183 20.2929 5.57881 19.3935 5.5058L19.25 5.5Z'
                  fill='#99A3A4 '
                />
              </svg>
              SEND AN EMAIL
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
