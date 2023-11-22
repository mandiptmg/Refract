import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../context/context"
const Footer = () => {
 const { close} = useGlobalContext()
  return (
    <footer className={close ? 'hidden':"block"}>
      <hr className='h-2 mt-20' />
      <div className='my-20'>
        <h1 className='uppercase md:text-5xl text-4xl lg:text-6xl '>
          Lets get in touch!
        </h1>
        <div className='grid sm:grid-cols-2 mt-20 lg:grid-cols-3  '>
          <div>
            <h1 className='text-3xl uppercase mb-8  font-semibold'>
              say hello
            </h1>
            <p>M: Hello@designrefract.com</p>
            <p>P: +61 437 497 779 </p>
          </div>
          <div className='grid my-8 sm:my-0'>
            <h1 className='text-3xl uppercase  mb-8 font-semibold'>links</h1>
            <span className='underline'>
              <NavLink to='/careers'>Careers</NavLink>
            </span>
            <p className='underline'>
              <a href='/'>FREE 30 minute strategy session</a>
            </p>
          </div>
          <div>
            <h1 className='text-3xl uppercase  mb-8 font-semibold'>
              social media
            </h1>

            <ul className='capitalize underline'>
              <li>
                <a href='#'>linkedIn </a>
              </li>
              <li>
                <a href='#'> Press</a>
              </li>
              <li>
                <a href='#'> Instagram </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=' mt-8 text-center'>
          <h1>&copy;2023 Refract ---@Mandip</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer