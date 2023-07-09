import { Route, Routes } from 'react-router-dom'
import Home from "./Page/Home"
import About from "./Page/About"
import Work from "./Page/Work"
import Contact from "./Page/Contact"
import Navbar from './Page/Navbar'
import Footer from './Page/Footer'
import Loader from './Page/Loader'

const  App = () => {


  return (
    <div className='bg-black relative'> 
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='work' element={<Work />} />
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    {/* <Footer/> */}
    </div>
  )
}

export default  App 