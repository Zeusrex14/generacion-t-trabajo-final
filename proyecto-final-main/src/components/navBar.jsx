// NavBar.jsx
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'     // <-- importa Link
import './navBar.css'
import userIcon from '../assets/user.png'
import carrito from '../assets/carrito.png'

function NavBar({ onLoginClick, onSignUpClick }) {
  const [visible, setVisible]   = useState(true)
  const [lastScrollY, setLastY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const userRef                 = useRef(null)

  // Mostrar/ocultar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setVisible(y < lastScrollY)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Cerrar menú al click fuera
  useEffect(() => {
    const handleClickOutside = e => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      {/* Enlace al inicio */}
      <Link to="/" className="nomad">
        NOMAD
      </Link>

      <Link 
        to="/perfil" 
        onClick={() => setMenuOpen(false)} 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img src={carrito} alt="" id="carrito"/>
      </Link>

      {/* Icono de usuario */}
      <div className="user-container" ref={userRef}>
        <button
          className="user-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menú de usuario"
        >
          <img src={userIcon} alt="Usuario" />
        </button>
        {menuOpen && (
          <ul className="user-menu">
            
            {/* ✅ AGREGÁ ESTE LINK AL PERFIL */}

            <li>
              <button onClick={() => { setMenuOpen(false); onLoginClick() }}>
                Iniciar sesión
              </button>
            </li>
            <li>
              <button onClick={() => { setMenuOpen(false); onSignUpClick() }}>
                Registrarse
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default NavBar
