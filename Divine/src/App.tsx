import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
