import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Footer from './Footer'
import User from '../pages/User'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/User' element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
