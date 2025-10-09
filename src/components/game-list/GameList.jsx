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
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch('data/games.json', { signal });
        if (!response.ok) {
          throw new Error(`Error HTTP. Estado: ${response.status}`);
        }
        const result = await response.json();
        setGames(result);
      } 
      catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted -> clean useEffect');
        }
      } 
    };

    fetchData();

    // Aborta la petición fecth, limpiando el efecto evitando 'memory leaks'
    return () => abortController.abort()

  // El array de dependencias vacio asegura que este efecto solo corre cuando se monta el componente
  }, []);

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