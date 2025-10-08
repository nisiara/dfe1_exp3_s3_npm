import './Game.sass'

const Game = ({gameObj, addToCart, isInCart}) => {

  //Destructuramos el objeto con las propiedades que usaremos para renderizar este componente.
  const {id, image, name, description, platform, price, offerPrice} = gameObj

  
  //Esta funcion se ejecuta cuando el usuario haga click en el boton 'Agregar a la bolsa'.
  //Su rol es ser un intermediario. Prepara el objeto y luego invoca a addToCart()
  function handleAddToCart(){
    //Crea el objeto addedGame con las propiedades necesarias para guardar en el array que mantiene el estado del carrito
    const addedGame = {
      id,
      image,
      name,
      platform,
      //Si el objeto tiene un precio de oferta este se asignará como precio de venta, 
      // de lo contrario se asigna el precio normal
      salePrice: offerPrice || price,
    }

    //Llama a la función addTocart con el objeto addedGame como argumento, la cual es
    //una función recibida como 'prop' desde el componente padre GameList.
    //De esta forma estamos 'subiendo' el objeto hacia el componente padre
    addToCart(addedGame)

  }

  return ( 
    <article className="game">
      <img className="game__image" src={image} alt={name} width="148" height="148"/>
      <div className="game__details">
        <h3 className="game__name">{name}</h3>
        <p className="game__description">{description}</p>
        <span className="game__platform">{platform}</span>
        <div className='game__prices-container'>
          {
          /* Si existe el precio oferta, se le agregará una clase adicional, para agregarle estilos y
          diferenciarlo del precio oferta. */
          }
          <b className={offerPrice ? 'game__price game__price--outdated' : 'game__price'}>${price.toLocaleString('es-CL')}</b>
          {/* Si existe el precio de oferta, este se renderizará */}
          {offerPrice && <b className="game__price">${offerPrice.toLocaleString('es-CL')}</b>}
        </div>
        <button onClick={handleAddToCart} className={isInCart? 'game__action game__action--selected' : 'game__action'} >{isInCart ? 'Ya estoy en la bolsa 🥳' : 'Agregar a la bolsa'}</button>
      </div>
    </article>
   );
}
 
export default Game;