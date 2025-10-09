import { useState } from 'react'
import './ContactForm.sass'

const ContactForm = () => {

  // Creamos un diccionario con las expresiones regulares que validarán los inputs que ingrese el usuario
  const validationPatterns = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{9}$/,
    subject: /^(consulta|sugerencia|reclamo)$/i,
    message: /^[\s\S]{10,}$/
  }

  //Creamos un estado para guardar la validación de cada input
  const [validationInput, setValidationInput] = useState({
    name: false,
    lastName: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  })

  //Ya que haremos la validacion de la expresión regular en el evento onBlur, necesitamos otro estado
  //para 'trackear' si el usuario ha salido del input para mostrar el mensaje de error si corresponde.
  const [touched, setTouched] = useState({
    name: false,
    lastName: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  })

  //Funcion handler que se ejectuta en el evento onBlur (cuando se sale del input) 
  // 1. Cambia el estado 'touched' del input correspondiente setTouched()
  // 2. Valida lo que ingresa el usuario con la expresión regular correspondiente. setValidation()
  function handleOnBlur(event){
    const {name, value} = event.target

    setTouched(prev => ({...prev, [name]: true}))

    if (validationPatterns[name]) {
      const isValid = validationPatterns[name].test(value)
      setValidationInput(prevValidation => ({
        ...prevValidation,
        [name]: isValid
      }))
    } 
  }

  //useState para guardar en un objeto todos los campos ingresados por el usuario
  const [formObject, setFormObject] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  //Función handler que se ejecuta en el evento onChange.
  //1. Va llenando el objeto formObject con los datos ingresados por el usuario
  function handleOnChange(event){
    const {name, value} = event.target

    setFormObject( prevFormData => ({
      ...prevFormData, [name]: value,
    }))
  }

  const [validForm, setValidForm] = useState(false)

  //Función handler que se ejecuta al pinchar el botón enviar del formulario
  //Válida que todos los valores del objeto 'validation' sean true.
  function handleSubmition(event){
    event.preventDefault()
    setValidForm( Object.values(validationInput).every(isValid => isValid === true))
    
    console.log('Todos los datos formulario', formObject)
  }

  function handleFormReset(){
    if(validForm){
      setTouched({
        name: false,
        lastName: false,
        email: false,
        phone: false,
        subject: false,
        message: false
      })

      setValidationInput({
        name: false,
        lastName: false,
        email: false,
        phone: false,
        subject: false,
        message: false
      })

      setFormObject( prevFormData => ({
        ...prevFormData,
        name: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }))

    }
  }

  return (
    <>
    <main className='contact'>
      <div className="title">
        <h4>✍️ Contacto</h4>
      </div>
      
      {/* Usamos el atributo noValidate para evitar las validadiones de HTML5 */}
      <form className="row" name="contact-form" onSubmit={handleSubmition} noValidate>
        <div className="col-md-6">
          <fieldset>
            <legend>Información de contacto</legend>
            <div className="contact__input">
              <label htmlFor="name">Nombre:</label>
              <input id="name" name="name" autoComplete="true" onChange={handleOnChange} onBlur={handleOnBlur} />
              {touched.name && !validationInput.name && <small className="contact__alert">El nombre ingresado no cumple con el formato requerido.</small>}
            </div>
            <div className="contact__input">
              <label htmlFor="last-name">Apellido:</label>
              <input id="last-name" name="lastName" onChange={handleOnChange} onBlur={handleOnBlur} />
               {touched.lastName && !validationInput.lastName && <small className="contact__alert">El apellido ingresado no cumple con el formato requerido.</small>}
            </div>
            <div className="contact__input">
              <label htmlFor="email">Correo electrónico:</label>
              <input id="email" type="email" name="email" autoComplete="true" onChange={handleOnChange} onBlur={handleOnBlur} />
               {touched.email && !validationInput.email && <small className="contact__alert">El correo ingresado no cumple con el formato requerido.</small>}      
            </div>
            <div className="contact__input">
              <label htmlFor="phone">Teléfono:</label>
              <input id="phone" type="tel" name="phone" autoComplete="true" onChange={handleOnChange} onBlur={handleOnBlur} />
              {touched.phone && !validationInput.phone && <small className="contact__alert">El número ingresado no cumple con el formato requerido.</small>}
            </div>
          </fieldset>
        </div>

        <div className="col-md-6">
          <fieldset>
            <legend>Mensaje</legend>
            <div className="contact__input">
              <label htmlFor="asunto">Asunto:</label>
              <select id="asunto" name="subject" onChange={handleOnChange} onBlur={handleOnBlur}>
                <option value="">-- Selecciona una opción --</option>
                <option value="consulta">Consulta</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="reclamo">Reclamo</option>
              </select>
               {touched.subject && !validationInput.subject && <small className="contact__alert">Debes seleccionar un asunto</small>}
            </div>
            <div className="contact__input">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="8" required onChange={handleOnChange} onBlur={handleOnBlur}></textarea>
               {touched.message && !validationInput.message && <small className="contact__alert">El mensaje debe tener al menos 10 caracteres.</small>}
            </div>
            <button className="contact__submit" data-bs-toggle="modal" data-bs-target="#modal-submit">Enviar</button>
            
          </fieldset>
        </div>
      </form>
    </main>

    <div className="modal fade" id="modal-submit" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalSubmitLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          
          <div className="modal-body">
            <div className={validForm ? 'contact__message contact__message--success' : 'contact__message contact__message--warning'}>
              <p>{validForm ? 'Tu mensaje se ha enviado con exito.' : 'Debes ingresar todos los datos del formulario.'}</p>
            </div>
            <button type="button" data-bs-dismiss="modal" onClick={handleFormReset}>{validForm ? 'Nos contacremos contigo a la brevedad 😉' : 'Inténtalo nuevamente'}</button>
            
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}
 
export default ContactForm;