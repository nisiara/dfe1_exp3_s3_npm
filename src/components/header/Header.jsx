import './Header.sass'

const Header = ({changeGameFilter}) => {

  //Función handler que envia el filtro hacia el componente App
  //para que luego desde allí lo envie al componente GameList y filtre la lista
  //de juegos
  function handleFilterView(filter){
    changeGameFilter(filter)
  }

  return (
    <header>
      <h1>
        <span>next up games</span>
        <img src='images/logo.png' alt="next up games" width="180" height="72" />
      </h1>
    
      <nav>
        <ul>
          <li><button onClick={() => handleFilterView(null)}>Inicio</button></li>
          <li><button onClick={() => handleFilterView('best seller')}>Más vendidos</button></li>
          <li><button onClick={() => handleFilterView('featured')}>Destacados</button></li>
          <li><button onClick={() => handleFilterView('favorite')}>Favoritos</button></li>
          <li><button onClick={() => handleFilterView('contact-form')}>Contáctanos</button></li>
        </ul>
      </nav>
    </header>
  )
  
  
}

export default Header;