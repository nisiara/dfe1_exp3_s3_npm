import { useState } from 'react'
import './App.sass'
import Cart from './components/cart/Cart'
import GameList from './components/game-list/GameList'
import Header from './components/header/Header'
import ContactForm from './components/contact-form/ContactForm'

const App = () => {
  

  /*
  La acción de agregar a la bolsa esta en el componente Game y este debe 'viajar' hacia el componente 'Cart'
  por lo tanto fijamos el estado en el componente App, ya que el estado debe estar en el componente ancestro 
  común más cercano que necesite compartir ese estado.
  App
  |-- Header
  ├── GameList
  |    |__ ChangeLayout
  │    └── Game
  └── Cart
  */
  const [cartGames, setCartGames] = useState([]);

  //Esta es la función que recupera el objeto addedGame que proviene desde el componente Game
  //Con este objeto podemos actualizar el array del estado con el nuevo producto
  function addGameToCart(addedGame){
    //Se válida que el juego este en carro, si es así la función retorna 
    //(No se agrega como juego nuevo o aumenta la cantidad en la bolsa)
    const isGameInCart = cartGames.find(game => game.id === addedGame.id )
    if(isGameInCart) return

    //De lo contrario se agrega el juego al array declarado que maneja el estado
    setCartGames( prev => [...prev, addedGame])
  }

  //Esta función es la que recibe el componente Cart como prop, para eliminar juegos de la bolsa de compras
  function removeGameFromCart(removedGame){
    //Creamos un nuevo array donde esten todos los productos excepto el que se eligió para eliminar
    const updatedCart = cartGames.filter( game => game.id !== removedGame.id )
    //Se actualiza el carro con ese nuevo array
    setCartGames(updatedCart)
  }

  const [filter, setFilter] = useState('')

  function changeGameFilter(juego){
    setFilter(juego)
  }

  return (
    //Simulamos la navegación entre páginas con el estado de filter y renderizamos condicionalmente
    //el formulario o la lista de juegos
    <div className='app-container'>
      <Header changeGameFilter={changeGameFilter}/>
      {filter === 'contact-form' ? <ContactForm/> : (
        <>
          <GameList addGameToCart={addGameToCart} cartGames={cartGames} changeFilter={filter} />
          <Cart games={cartGames} removeGame={removeGameFromCart}/>
        </>
      )}
    </div>
    
  )
}

export default App
