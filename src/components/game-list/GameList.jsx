import './GameList.sass'
import { useEffect, useState} from 'react'
import Game from '../game/Game';
import ChangeLayout from '../change-layout/ChangeLayout';

//GameList recibe 3 props. 
//1. La función que pasa al componente Game con el objetivo de recuperar el objeto que se quiere agregar al carro
//2. La lista de juegos que está en el carro, para verificar si el juego a comprar ya existe en el carro.
//3. El filtro para mostrar los juegos correspondientes
const GameList = ({addGameToCart, cartGames, changeFilter}) => {


  //Agregamos el hook useState() para guardar el estado de la lista de juegos
  //que cargaremos a través del hook useEffect()
  const[games, setGames] = useState([]);

  //Usamos useEffect porque para interactuar co el estado necesitamos realizar
  //un 'efecto secundario' que no es renderizar elementos sino, en este caso, realizar una carga asíncrona
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('data/games.json', {signal: signal})  
      .then(response => {
        if (!response.ok) {
          throw new Error('Falló la carga de la API');
        }
        return response.json();
      })
      .then(games => {
        setGames(games);
      })
      .catch(error => {
        console.error('Error', error.message);
      });

    //Agregamos la función de retorno para limpiar useEffect y no existam 'memory leaks'
    //mejorando el rendimiento
    return () => {
      controller.abort();
    }

  }, [])

  const filteredGames = changeFilter ? games.filter( game => game.tag === changeFilter) : games

  //Agregamos el estado para cambiar la visualización de la vista, entre tipo grilla y tipo fila.
  const [currentLayout, setCurrentLayout] = useState('grid');

  //Recibimos el tipo de vista y la seteamos en el state.
  function handleLayoutChange(layout){
    setCurrentLayout(layout)
  }

  //Objeto para traducir la propiedad 'tag' que proviene del fetch
  const traductorTitulo = {
    featured: 'destacados',
    'best seller': 'más vendidos',
    favorite: 'favoritos'
  }

  //Retorna el jsx que se encarga de renderizar la lista de juegos.
  return ( 
    <>
      <main>
        <div className='title'>
          <h4><span>🕹️</span>Lista de {!changeFilter ? 'todos los juegos' : ` juegos ${traductorTitulo[changeFilter]} `}</h4>
          <ChangeLayout changeLayout={handleLayoutChange} currentLayout={currentLayout}/>
        </div>
        <div className={currentLayout === 'grid' ? 'game-list' : 'game-list game-list--row'}>
          {
            filteredGames.map( game => {
              //A través del metodo .find verificamos si hay coincidencias con la lista de juegos del carro y el juego que va al carrito 
              const isInCart = cartGames.find( cartGame => cartGame.id === game.id)
              return <Game key={game.id} gameObj={game} addToCart={addGameToCart} isInCart={isInCart}/>
            })
          }
        </div>
      </main>
    </>
  );
}
 
export default GameList;