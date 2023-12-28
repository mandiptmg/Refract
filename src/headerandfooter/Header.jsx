import { useEffect } from 'react'
import logo2 from '../assets/rafract.svg'
import logo from '../assets/Refract.svg'
import Time from './Time'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const Header = () => {
  const { close, setClose, open, setOpen } = useGlobalContext()
  useEffect(() => {
    const storedValue = localStorage.getItem('dark-mode')
    if (storedValue === true) {
      document.body.classList.add('dark')
    } else {
      setClose(false)
    }
  }, [])
  return (
    <>
      <div className='flex justify-between items-center h-20 '>
        <div     onClick={() => {
                  setClose(false)
                  if (close === true) {
                    document.documentElement.classList.remove('dark')
                    localStorage.setItem('dark-mode', false)
                  } else {
                    document.documentElement.classList.add('dark')
                    localStorage.setItem('dark-mode', false)
                  }
                }}>
          <NavLink to='/'>
            <img
              src={close ? logo : logo2}
              alt='Refract'
              className='md:w-[198px] w-[80px]  h-[27.286px]'
            />
          </NavLink>
        </div>
        <div className='flex  gap-5  items-center'>
          <div>
            <Time />
          </div>
          <button
            onClick={() => {
              setOpen(!open)
              setClose(!close)
              if (close === true) {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('dark-mode', !close)
              } else {
                document.documentElement.classList.add('dark')
                localStorage.setItem('dark-mode', !close)
              }
            }}
          >
            <button>
              {close ? (
               <NavLink to='/'><svg
                  className='h-5 w-[40px] cursor-point h-[57.568px] flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='111'
                  height='59'
                  viewBox='0 0 111 59'
                  fill='none'
                >
                  <path d='M1 1L109.889 58.5678' stroke='black' />
                  <path d='M1 58.5679L109.889 1.00007' stroke='black' />
                </svg></NavLink> 
              ) : (
                <NavLink to='/menu'>
                  <svg
                    className='h-5 w-[40px] cursor-point h-[57.568px] flex-shrink-0'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 48 48'
                  >
                    <path
                      d='M 6 9 A 2.0002 2.0002 0 1 0 6 13 L 42 13 A 2.0002 2.0002 0 1 0 42 9 L 6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26 L 42 26 A 2.0002 2.0002 0 1 0 42 22 L 6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39 L 42 39 A 2.0002 2.0002 0 1 0 42 35 L 6 35 z'
                      stroke='gray'
                    ></path>
                  </svg>
                </NavLink>
              )}
            </button>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
