import { useGlobalContext } from "../context/context"
import { NavLink } from "react-router-dom"
const data = [
  { title: 'home', to: '/' },
  { title: 'about us', to: '/about' },
  { title: 'contact us', to: '/contact' },
  { title: 'careers', to: '/careers' },
]

const Menu = () => {
 const { close, setClose, open, setOpen } = useGlobalContext()
  return (
    <div className="mt-16">
      
        <ul
          className={
            open
              ? 'lg:text-5xl block text-lg md:text-3xl uppercase font-semibold'
              : 'lg:text-5xl hidden text-lg uppercase font-semibold'
          }
        >
          {data.map((item, index) => {
            const { title, to } = item
            return (
              <li
                onClick={() => {
                  setClose(!close)
                  setOpen(!open)
                  if (close === true) {
                    document.documentElement.classList.remove('dark')
                    localStorage.setItem('dark-mode', !close)
                  } else {
                    document.documentElement.classList.add('dark')
                    localStorage.setItem('dark-mode', !close)
                  }
                }}
                key={index}
                className='mb-10 hover:underline text-[#2F2F2F]'
              >
                <NavLink to={to}>{title}</NavLink>
              </li>
            )
          })}
          <li>
            <h1 className='text-gray-400 relative'>
              rafract Community
              <sup className='dark:text-black text-white absolute -top-1 lg:top-0 uppercase font-semibold lg:text-xs py-2 px-2  lg:px-1 lg:py-1 rounded-full border dark:border-black border-white   '>
                comming soon
              </sup>
            </h1>
          </li>
        </ul>
      </div>
   
  )
}

export default Menu