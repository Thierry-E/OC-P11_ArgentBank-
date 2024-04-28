import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='.SignIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
