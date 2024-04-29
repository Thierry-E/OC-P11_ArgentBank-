import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='.SignIn' element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
