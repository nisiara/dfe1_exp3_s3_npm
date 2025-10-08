import './ChangeLayout.sass'

//En las props recibimos y enviamos el estado para renderizar de forma condicional
//el tipo de vista
const ChangeLayout = ({changeLayout, currentLayout}) => {
  function handleChangeLayout(kind){
    currentLayout = kind;
    changeLayout(currentLayout);
  }
  
  return (  
    <div className="change-view">
      <small>Cambiar vista:</small>
      <button className={currentLayout === 'grid' ? 'change-view__button change-view__button--active' : 'change-view__button'} onClick={() => handleChangeLayout('grid')}>
        <img src="images/icons/layout_grid.png" alt="grid view" />
      </button>
      <button className={currentLayout === 'list' ? 'change-view__button change-view__button--active' : 'change-view__button'} onClick={() => handleChangeLayout('list')}>
        <img src="images/icons/layout_row.png" alt="row view" />
      </button>
    </div>
  );
}
 
export default ChangeLayout;