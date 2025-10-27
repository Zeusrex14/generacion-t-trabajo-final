// Footer.jsx
import './footer.css'

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna izquierda: branding */}
        <div className="footer-col footer-left">
          <h3 className="footer-title">Nomad</h3>
          <p className="footer-text">
            Descubrí los mejores destinos y viví experiencias únicas
            alrededor del mundo.
          </p>
        </div>

        {/* Columna centro: enlaces rápidos */}
        <div className="footer-col footer-center">
          <h4 className="footer-subtitle">Enlaces</h4>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/horarios">Horarios</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna derecha: redes sociales */}
        <div className="footer-col footer-right">
          <h4 className="footer-subtitle">Seguinos</h4>
          <div className="footer-icons">
            <a href="#" aria-label="Sitio web">🌐</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Volver arriba
        </button>
        <span>© 2025 Nomad. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
