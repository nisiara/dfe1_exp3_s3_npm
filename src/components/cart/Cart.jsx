import './Cart.sass'

//En este componente necesitamos 2 props. La lista de juegos (el array del estado) y la función
//que 'envia' el juego a eliminar al componente App donde está lo lógica para realizar esta acción
const Cart = ({games, removeGame}) => {

  //Funcion para calcular el total a pagar
  const cartTotalPrice = games.reduce((total, game) => game.salePrice + total, 0)

  //Esta es la función que se ejecuta cuando el usuario pincha en el botón 'Eliminar'
  //la cual ejecuta la función que llega del componente App a través del los props 
  function handleRemoveGame(game){
    removeGame(game)
  }

  return (
    <aside className="cart">
      <div>
        {/* Renderizamos de forma condicional un mensaje o los productos presentes en la bolsa */}
        {games.length === 0 ?
          <div className="cart__message">
            <p>No hay juegos para comprar 😞. <br />Agrega juegos a la bolsa.</p>
          </div> 
          :
          <>
            <div className="cart__items">
              {games.map( game => {
                return(
                  <article key={game.id} className="cart-game">
                    <img className="cart-game__image" src={game.image} alt={game.name} width="64" height="64" />
                    <div className="cart-game__details">
                      <span className="cart-game__name">{game.name}</span>
                      <button onClick={() => handleRemoveGame(game)}className="cart-game__delete">Eliminar</button>
                    </div>
                    <span className="cart-game__price">${game.salePrice.toLocaleString('es-CL') }</span>
                  </article>
                )
              })}
              
            </div>
            <div className="cart__total">
              <h5>Total: ${cartTotalPrice.toLocaleString('es-CL')}</h5>
            </div>
          </>
        }

      </div>
    </aside>
  );
}
 
export default Cart;