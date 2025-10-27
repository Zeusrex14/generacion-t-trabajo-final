import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/navBar.jsx'
import Footer from './components/footer.jsx'
import Home from './components/home.jsx'
import Horarios from './components/horarios.jsx'
import Contacto from './components/contacto.jsx'
import Servicios from './components/servicios.jsx'
import CardViajes from './components/cardViajes.jsx'
import Package from './components/package.jsx'
import FormLogin from './components/formLogin.jsx'
import FormSignUp from './components/formSignUp.jsx'
import Perfil from './components/perfil.jsx'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleLoginClick = () => {
    setShowLogin(true)
    setShowSignUp(false)
  }

  const handleSignUpClick = () => {
    setShowSignUp(true)
    setShowLogin(false)
  }

  const closeModals = () => {
    setShowLogin(false)
    setShowSignUp(false)
  }

  return (
    <>
      {/* Navbar funcional */}
      <NavBar
        onLoginClick={handleLoginClick}
        onSignUpClick={handleSignUpClick}
      />

      {/* Modales */}
      {showLogin && (
        <div className="overlay" onClick={closeModals}>
          <FormLogin onClose={closeModals} />
        </div>
      )}
      {showSignUp && (
        <div className="overlay" onClick={closeModals}>
          <FormSignUp onClose={closeModals} />
        </div>
      )}

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/viajes/:pais" element={<CardViajes />} />
        <Route path="/paquete/:id" element={<Package />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App