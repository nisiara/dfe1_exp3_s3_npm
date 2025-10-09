import './Header.sass'

const Header = ({changeGameFilter, cartGames}) => {

  //Función handler que envia el filtro hacia el componente App
  //para que luego desde allí lo envie al componente GameList y filtre la lista
  //de juegos
  function handleFilterView(filter){
    changeGameFilter(filter)
  }

  return (
    // <header>
    //   <h1>
    //     <span>next up games</span>
    //     <img src='images/logo.png' alt="next up games" width="180" height="72" />
    //   </h1>
    
    //   <nav>
    //     <ul>
    //       <li><button onClick={() => handleFilterView(null)}>Inicio</button></li>
    //       <li><button onClick={() => handleFilterView('best seller')}>Más vendidos</button></li>
    //       <li><button onClick={() => handleFilterView('featured')}>Destacados</button></li>
    //       <li><button onClick={() => handleFilterView('favorite')}>Favoritos</button></li>
    //       <li><button onClick={() => handleFilterView('contact-form')}>Contáctanos</button></li>
    //     </ul>
    //   </nav>
    // </header>
    <header className="navbar navbar-expand-lg">
      
        <h1>
          <span>next up games</span>
          <img src='images/logo.png' alt="next up games" width="180" height="72" />
        </h1>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarMenu">
          <ul>
            <li><button onClick={() => handleFilterView(null)}>Inicio</button></li>
            <li><button onClick={() => handleFilterView('best seller')}>Más vendidos</button></li>
            <li><button onClick={() => handleFilterView('featured')}>Destacados</button></li>
            <li><button onClick={() => handleFilterView('favorite')}>Favoritos</button></li>
            <li><button onClick={() => handleFilterView('contact-form')}>Contáctanos</button></li>
          </ul>
        </nav>
        <button className="navbar-cart-trigger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cart" aria-controls="offcanvasCart">
          <span>🛍️</span>
          <small>{cartGames}</small>
        </button>
      
    </header>
  )
  
  
}

export default Header;