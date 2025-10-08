import './ContactForm.sass'

const ContactForm = () => {
  return (
    <main className='contact'>
      <h2>✍️ Contacto</h2>
      <p>Si tienes alguna pregunta o consulta, no dudes en ponerte en contacto con nosotros a través del siguiente formulario:</p>
      <form className="row" name="contact-form">
        <div className="col-md-6">
          <fieldset>
            <legend>Información de contacto</legend>
            <div className="contact__input">
              <label htmlFor="name">Nombre:</label>
              <input id="name" name="name" required autoComplete="true" />
            </div>
            <div className="contact__input">
              <label htmlFor="last-name">Apellido:</label>
              <input id="last-name" name="last-name" required />
            </div>
            <div className="contact__input">
              <label htmlFor="email">Correo electrónico:</label>
              <input id="email" type="email" name="email" required autoComplete="true"/>
            </div>
            <div className="contact__input">
              <label htmlFor="phone">Teléfono:</label>
              <input id="phone" type="tel" name="phone" autoComplete="true"/>
            </div>
          </fieldset>
        </div>

        <div className="col-md-6">
          <fieldset>
            <legend>Mensaje</legend>
            <div className="contact__input">
              <label htmlFor="asunto">Asunto:</label>
              <select id="asunto" name="asunto" required>
                <option value="consulta">Consulta</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="reclamo">Reclamo</option>
              </select>
            </div>
            <div className="contact__input">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="8" required></textarea>
            </div>

            <button className="contact__submit">Enviar</button>
          </fieldset>
        </div>
      </form>
    </main>
  )
}
 
export default ContactForm;