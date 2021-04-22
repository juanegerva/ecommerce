import './App.css';
import {NavBar} from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>  
      <ItemListContainer greeting="Pagina Principal"/>
      <p>comenzando con el ecommerce</p>
    </div>
  );
}

export default App;
