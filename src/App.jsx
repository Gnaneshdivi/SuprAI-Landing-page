import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Solutions from './pages/Solutions.jsx'
import SolutionLibrary from './pages/SolutionLibrary.jsx'
import UseCase from './pages/UseCase.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Compare from './pages/Compare.jsx'
import CompareDetail from './pages/CompareDetail.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionLibrary />} />
          <Route path="/solutions/:slug/:wf" element={<UseCase />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/compare/:slug" element={<CompareDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
