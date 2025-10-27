// contacto.jsx
import './contacto.css'

export default function Contacto() {
  return (
    <main className="page-container">
      <section className="page-header">
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte. Envíanos tu consulta.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Tu correo" />
          </div>
          <div className="form-group">
            <label>Asunto</label>
            <input type="text" placeholder="Asunto" />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Tu mensaje"></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </main>
  )
}
