// Horarios.jsx
import './horarios.css'

export default function Horarios() {
  return (
    <main className="page-container">
      {/* Encabezado */}
      <section className="page-header">
        <h1>Horarios</h1>
        <p>Consulta nuestros horarios de atención para oficinas y pasajeros.</p>
      </section>

      {/* Oficinas administrativas */}
      <section className="horarios-section">
        <h2>Oficinas Administrativas</h2>
        <table className="horarios-table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Lunes</td>     <td>09:00 – 18:00</td></tr>
            <tr><td>Martes</td>    <td>09:00 – 18:00</td></tr>
            <tr><td>Miércoles</td> <td>09:00 – 18:00</td></tr>
            <tr><td>Jueves</td>    <td>09:00 – 18:00</td></tr>
            <tr><td>Viernes</td>   <td>09:00 – 18:00</td></tr>
            <tr><td>Sábado</td>    <td>Cerrado</td></tr>
            <tr><td>Domingo</td>   <td>Cerrado</td></tr>
          </tbody>
        </table>
      </section>

      {/* Atención al pasajero */}
      <section className="horarios-section">
        <h2>Atención al Pasajero</h2>
        <ul className="passenger-hours">
          <li>Mostrador de check-in: 24 horas</li>
          <li>Información general: 24 horas</li>
          <li>Asistencia telefónica: +54 231 123-4567</li>
        </ul>
      </section>
    </main>
  )
}
