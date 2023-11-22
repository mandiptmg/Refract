import Header from "./headerandfooter/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import About from './component/About'
import Contact from './component/Contact'
import Careers from './component/Careers'
// import RafractCommunity from './component/RafractCommunity'
import Menu from "./headerandfooter/Menu"
import NoPage from "./component/NoPage"
import Footer from "./headerandfooter/Footer"
import GetStarted from './component/get started/GetStarted'

const App = () => {
  return (
    <div className='w-[90vw] mx-auto max-w-7xl'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='careers' element={<Careers />} />
        {/* <Route path='rafract-community' element={<RafractCommunity />} /> */}
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='/menu' element={<Menu />} />

        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
